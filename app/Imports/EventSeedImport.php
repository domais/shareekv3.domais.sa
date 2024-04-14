<?php

namespace App\Imports;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Event;
use App\Models\Permit;
use App\Models\Literary;
use App\Models\EventType;
use AWS\CRT\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EventSeedImport implements ToCollection, WithHeadingRow
{

    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
        $id = 0;
        foreach ($collection as $key => $row) {
            $this->seedEvent($row, $key, $id);
            $id++;
        }
    }

    /**
     * Seed the events
     *
     * @param $events
     */
    private function seedEvent($event, $key, $id)
    {
        \Log::info("Processing: " . $id . ' ' . $event['email']);
        $user = User::where('email', $event['email'])->first();

        if (!$user) {
            \Log::error('User not found: ' . $event['email']);
            return;
        }

        $partner = $user->owner;

        if (!$partner) {
            \Log::error('Partner not found: ' . $event['email']);
            return;
        }


        \Log::info('START: ' . $event['start_date'] . ' ' . $event['start_time']);

        // 9/6/2023 8:00 PM
        $start = \Carbon\Carbon::createFromFormat('d/m/Y h:i A', $event['start_date'] . ' ' . $event['start_time']);
        \Log::info('END: ' . $event['end_date'] . ' ' . $event['end_time']);
        $end = \Carbon\Carbon::createFromFormat('d/m/Y h:i A', $event['end_date'] . ' ' . $event['end_time']);
        $type = EventType::where('name', $event['type'])->first();
        $literary = Literary::where('name', 'LIKE', '%' . $event['literary'] . '%')->first();
        $docs = $event['docs'] == 0 ? null : [$event['docs']];

        if (!$literary) {
            \Log::error('Literary not found: ' . $event['literary']);
            return;
        }

        $existEvent = Event::where('title', $event['title'])->where('start_date', $start)->where('end_date', $end)->first();

        // if ($existEvent) {
        //     \Log::warning('Event already exists: ' . $event['title']);
        //     return;
        // }

        \Log::info('**************** start *****************');

        \Log::info('Event: ' . $start);

        \Log::info('**************** end *****************');



        $eventSave = Event::create([
            'order_number' => Str::random(10),
            'title' => $event['title'],
            'description' => $event['body'] ?? $event['title'],
            // content without html tags
            'content' => strip_tags($event['body'] ?? $event['title']),
            'user_id' => $user->id,
            'event_type_id' => $type->id ?? 1,
            'event_location' => $event['palce'] === 'داخلية' ? 1 : 2,
            'start_date' => $start,
            'end_date' => $end,
            'available_seats' => 0,
            'need_support' => false,
            'lat' => $partner->lat,
            'lng' => $partner->lng,
            'status_id' => 9,
            'literary_id' => $literary->id,
            'category_id' => $event['event_type'],
            'other' => null,
            'links' => json_encode($docs),
            'source' => 'manual'
        ]);


        $eventSave->update(['order_number' => 'm-' . date('y') . str_pad($eventSave->id, 5, '0', STR_PAD_LEFT)]);

        \Log::info('Event created: #' . $key . ' ' . $event['email']);

        // Create Permit
        Permit::create($eventSave->toArray());

        \Log::info('Permit created: #' . $id . ' ' . $event['email']);

    }

    private function getStatus($start, $end)
    {

        $status = 5;
        if ($start->gt(now())) { // Start_time > now
            return $status = 5;
            // status 6 => Between Start_time && End_time
        } elseif ($start->lte(now()) && $end->gte(now())) {
            return $status = 6;
            // status 7 => Start_time <= now && End_time <= now
        } elseif ($end->lt(now())) { // End_time <= now
            // any after 1 Feb 2024 return status 7
            return $status = 7;
        }


        return $status;
    }
}
