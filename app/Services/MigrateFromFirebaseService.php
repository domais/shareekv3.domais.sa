<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Event;
use App\Jobs\SaveFile;
use App\Models\Partner;
use App\Models\Speaker;
use App\Models\Literary;
use Illuminate\Support\Str;
use App\Mail\UpdatePasswordMail;
use App\Models\File;
use App\Models\Permit;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class MigrateFromFirebaseService
{
    public function migrate($chunk): void
    {
        //  Dump data from firebase_data folder Event.json


        // Chunk data to 100
        $chunk->each(function ($item) {
            $user = $this->user(
                $item->user->display_name,
                $item->user->email,
                @$item->user->phone_number,
                @$item->user->photo_url
            );

            $partner = $this->partner($item->user, $user);

            $event = $this->event($item, $user);

            $this->speakers($item, $event, $partner);
        });

        // $this->users();
        // $this->partners();
    }

    public function user($name, $email, $phone, $avatar, $guest = false): User
    {
        $randomPassword = Str::random(8);

        \Log::info('Password: ' . $randomPassword);

        $valition = validator([
            'email' => $email,
            'name' => $name,
        ], [
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|unique:users',
        ]);

        $source = $guest ? 'firebase-guest' : 'firebase';

        // Create User
        $user = User::updateOrCreate(
            ['email' => $email, 'source' => $source],
            ['phone' => $phone, 'name' => $name, 'password' => Hash::make($randomPassword)]
        );

        // assign role based 2
        if ($guest && $user->wasRecentlyCreated) {
            $user->syncRoles([3]);
        } else {
            $user->syncRoles([2]);
        }

        if ($user->wasRecentlyCreated && isset($avatar) && $avatar) {
            \Log::info('Avatar: ' . $avatar);
            $this->saveFile($avatar, 'image', 'avatar', $user);
        }

        if (isset($email) && $email && $user->wasRecentlyCreated) {
            Mail::to($user->email)->send(new UpdatePasswordMail(@$user->name,  $user->email, $randomPassword));
        }

        \Log::info('User: #' . $user->id . ' ' . $user->email);
        return $user;
    }

    public function saveFile($url, $type, $use, $model): void
    {
        // Delete all files related to this model
        $model->image()->delete();
        // // dd($url);
        $image = file_get_contents($url);
        $name = Str::random(10) . '.png';
        $path = strtolower(class_basename($model)) . '/' . $use . '/' . $model->id . '/' . $name;
        Storage::disk('do')->put($path, $image);

        // morph file avatar to file table
        $model->image()->create([
            'name' => $name,
            'path' => $path,
            'type' => $type,
            'use' => $use,
        ]);

        // SaveFile::dispatch($model, $url, $type, $use)->delay(now()->addSeconds(5));
    }

    public function partner($item, $user): Partner
    {

        // Search for level_user 'أ','ب','ج','د' and assign class
        if (isset($item->livel_user)) {
            if (Str::contains($item->livel_user, 'أ')) {
                $class = 'أ';
            } elseif (Str::contains($item->livel_user, 'ب')) {
                $class = 'ب';
            } elseif (Str::contains($item->livel_user, 'ج')) {
                $class = 'ج';
            } elseif (Str::contains($item->livel_user, 'د')) {
                $class = 'د';
            }
        } else {
            $class = null;
        }

        \Log::info('Class: ' . $class);

        $partner = Partner::firstOrCreate(
            [
                'owner_id' => $user->id,
            ],
            [
                'name' => $item->Cafi_name ?? null,
                'city' => $item->city_user ?? null,
                'lat' => $item->Cafi_map->latitude ?? 0.0,
                'lng' => $item->Cafi_map->longitude ?? 0.0,
                'class' => $class,
                'source' => 'firebase'
            ]
        );


        if ($partner->wasRecentlyCreated && isset($item->cafi_logo) && $item->cafi_logo) {
            \Log::info('Logo: ' . $item->cafi_logo);
            $this->saveFile($item->cafi_logo, 'image', 'logo', $partner);
        }

        \Log::info('Partner: #' . $partner->id . ' ' . $partner->name);
        return $partner;
    }

    private function getStatus($event): int
    {

        $start = $event->Start_time->seconds;
        $end = $event->End_time->seconds;

        // status 5 => مجدولة
        // status 6 => قائمة
        // status 7 => بانتظار التوثيق الشريك
        // status 8 => مراجعة التوثيق
        $start = Carbon::createFromTimestamp($start);
        $end = Carbon::createFromTimestamp($end);

        $status = 9;
        // status 5 => Start_time > now && End_time <= now
        if ($start->gt(now())) {
            $status = 5;
            // status 6 => Between Start_time && End_time
        } elseif ($start->lte(now()) && $end->gte(now())) {
            $status = 6;
            // status 7 => Start_time <= now && End_time <= now
        } elseif ($end->lt(now())) {
            $status = 7;
        }

        if (isset($event->event_Send) && $event->event_Send && isset($event->reject_evint) && !$event->reject_evint) {
            $status = 2;
        }

        if (isset($event->sup_post) && $event->sup_post) {
            $status = 3;
        }

        if (isset($event->verification) && $event->verification) {
            $status = 8;
        }

        \Log::info('Status: ' . $status);
        return $status;
    }

    private function event($item, $user): Event
    {
        $status = $this->getStatus($item);

        $type = $item->cheld_yang_Shear ?? $item->type_adab;
        \Log::info('Type: ' . $type);
        $literary = Literary::where('name', $type)->first();
        if ($literary) {
            \Log::info('Literary: ' . $literary->id);
        }
        if (isset($item->Not_Event) && $item->Not_Event) {
            $eventTypeId = 2;
        } else {
            $eventTypeId = 1;
        }


        $event = Event::updateOrCreate(['order_number' => $item->id], [
            'title' => $item->Event_name,
            'description' => $item->Event_Des,
            'user_id' => $user->id,
            'admin_id' => 4,
            'event_type_id' => $eventTypeId,
            'event_location' => $item->Event_cat === 'داخلية' ? 1 : 2,
            'start_date' => Carbon::createFromTimestamp($item->Start_time->seconds),
            'end_date' => Carbon::createFromTimestamp($item->End_time->seconds),
            'available_seats' => $this->convert($item->Event_Gest),
            'need_support' => false,
            'lat' => $item->user->Cafi_map->latitude ?? 0.0,
            'lng' => $item->user->Cafi_map->longitude ?? 0.0,
            'status_id' => $status,
            'literary_id' => $literary->id ?? 1,
            'category_id' => $item->type_event,
            'other' => $item->type_event === 'أخرى' ? $item->Event_0ther : null,
            'created_at' => Carbon::createFromTimestamp($item->time_Post->seconds),
            'updated_at' => Carbon::createFromTimestamp($item->time_Post->seconds),
            'source' => 'firebase'
        ]);



        // event is updated
        if ($event->wasRecentlyCreated && isset($item->Evint_img) &&  $item->Evint_img) {
            \Log::info('Image: ' . $item->Evint_img);
            // morph file avatar to file table
            $this->saveFile($item->Evint_img, 'image', 'adv', $event);
        }

        $this->permit($item, $event);


        \Log::info('Event: #' . $event->id . ' ' . $event->title);
        return $event;
    }

    private function permit($item, $event)
    {
        $permit = Permit::updateOrCreate(['order_number' => $item->id], [
            'order_number' => $item->id,
            'user_id' => $event->user_id,
            'admin_id' => $event->admin_id,
            'event_type_id' => $event->event_type_id,
            'category_id' => $event->category_id,
            'other' => $event->other,
            'targeted_audience' => $event->targeted_audience,
            'event_location' => $event->event_location,
            'literary_id' => $event->literary_id,
            'status_id' => $event->status_id,
            'title' => $event->title,
            'description' => $event->description,
            'start_date' => $event->start_date,
            'end_date' => $event->end_date,
            'available_seats' => $event->available_seats,
            'need_support' => $event->need_support,
            'lat' => $event->lat,
            'lng' => $event->lng,
            'source' => $event->source
        ]);

        if ($event->image) {
            $newImage = $event->image->replicate();
            $newImage->fileable_type = 'App\Models\Permit'; // Replace 'NewType' with the actual type
            $newImage->fileable_id = $permit->id; // Replace 'NewId' with the actual ID
            $newImage->save();
        }
    }

    function convert($string): int
    {
        $arabic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

        $num = range(0, 9);
        $englishNumbersOnly = str_replace($arabic, $num, $string);

        return $englishNumbersOnly;
    }

    private function speakers($item, $event, $partner): void
    {
        // Speaker 1
        if (isset($item->speaker_1_firstName) && $item->speaker_1_firstName) {
            \Log::info('Speaker 1: ' . $item->speaker_1_firstName . ' ' . $item->speaker_1_secondName);
            $speaker = Speaker::updateOrCreate([
                'name' => $item->speaker_1_firstName . ' ' . $item->speaker_1_secondName,
                'event_id' => $event->id,
            ], [
                'phone' => $item->speaker_1_Phone ?? null,
                'partner_id' => $partner->id,
                'nationality' => $item->speaker_1_country ?? null,
                'type' => $item->speaker_title_1 ? $item->speaker_title_1 : null,
                'twitter' => $item->speaker_1_twetr ?? null,
                'instagram' => $item->speaker_1_insta ?? null,
                'linkedin' => $item->speaker_1_linkden ?? null,
                'city' => $item->speaker_city_1 ?? null,
                'source' => 'firebase'
            ]);
        }

        // Speaker 2
        if (isset($item->speaker_2_firstName) && $item->speaker_2_firstName) {
            \Log::info('Speaker 2: ' . $item->speaker_2_firstName . ' ' . $item->speaker_2_secondName);
            $speaker_2 = Speaker::updateOrCreate([
                'name' => $item->speaker_2_firstName . ' ' . $item->speaker_2_secondName,
                'event_id' => $event->id,
            ], [
                'partner_id' => $partner->id,
                'nationality' => $item->speaker_2_country ?? null,
                'type' => isset($item->speaker_title_2) && $item->speaker_title_2 ? $item->speaker_title_2 : null,
                'twitter' => $item->speaker_2_tweter ?? null,
                'instagram' => $item->speaker_2_insta ?? null,
                'linkedin' => $item->speaker_2_linldin ?? null,
                'city' => $item->speaker_city_2 ?? null,
                'source' => 'firebase'
            ]);
        }

        if (isset($item->speaker_3_Name) && $item->speaker_3_Name) {
            \Log::info('Speaker 3: ' . $item->speaker_3_Name);
            // Speaker 3
            $speaker_3 = Speaker::updateOrCreate([
                'name' => $item->speaker_3_Name,
                'event_id' => $event->id,
            ], [
                'email' => $item->speaker_3_mail ?? null,
                'partner_id' => $partner->id,
                'nationality' => $item->speaker_3_country ?? null,
                'type' => null,
                'twitter' => $item->speaker_3_tweter ?? null,
                'instagram' => $item->speaker_3_insta ?? null,
                'linkedin' => $item->speaker_3_linkdin ?? null,
                'city' => $item->speaker_city_3 ?? null,
                'source' => 'firebase'
            ]);
        }
    }

    public function guests($chunk)
    {
        // Chunk data to 100
        $chunk->each(function ($item) {
            if (!isset($item->event_id)) {
                return;
            }
            $event = Event::where('order_number', $item->event_id)->first();
            $validEmail = filter_var($item->email, FILTER_VALIDATE_EMAIL);
            if (!$validEmail) {
                return;
            }
            $user = User::where('email', $item->email)->first();
            if (!$user) {
                \Log::info('Guest: ' . $item->email);
                $user = User::updateOrCreate([
                    'email' => $item->email,
                    'phone' => $item->phone,
                ], [
                    'name' => $item->name,
                    'password' => Hash::make(Str::random(8)),
                    'source' => 'firebase-guest'
                ]);

                $user->syncRoles([3]);
            }
            if ($event) {
                $event->guests()->sync([$user->id => ['type' => 'going']]);
                \Log::info('Guest: #' . $event->id . ' ' . $event->title);
            }
        });
    }
}
