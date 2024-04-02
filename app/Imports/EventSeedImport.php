<?php

namespace App\Imports;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Event;
use App\Models\Permit;
use App\Models\Literary;
use App\Models\EventType;
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
        foreach ($collection as $row) {
            $this->seedEvent($row);
        }
    }

    /**
     * Seed the events
     *
     * @param $events
     */
    private function seedEvent($event)
    {
        $id = 0;
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

        // 8:00 PM = 8:00 م or 8:00 AM = 8:00 ص
        $event['start_time'] = str_replace(['م', 'ص'], ['PM', 'AM'], $event['start_time']);
        $event['end_time'] = str_replace(['م', 'ص'], ['PM', 'AM'], $event['end_time']);
        // 10/19/23 = 19-10-23
        $event['start_date'] = implode('-', array_reverse(explode('/', $event['start_date'])));
        $event['end_date'] = implode('-', array_reverse(explode('/', $event['end_date'])));


        \Log::info('START: ' .$event['start_date'] . ' ' . $event['start_time']);
        // 2023-15-9 8:00PM
        $start = \Carbon\Carbon::createFromFormat('y-m-d h:iA', $event['start_date'] . ' ' . $event['start_time']); // 23-15-9 8:00PM
        \Log::info('END: ' .$event['end_date'] . ' ' . $event['end_time']);
        $end = \Carbon\Carbon::createFromFormat('y-m-d h:iA', $event['end_date'] . ' ' . $event['end_time']); // 23-15-9 10:00PM
        $type = EventType::where('name', $event['type'])->first();
        $literary = Literary::where('name', 'LIKE', '%'.$event['literary'].'%')->first();
        $docs = $event['docs'] == 'التوثيق' ? null : $event['docs'];

        if (!$literary) {
            \Log::error('Literary not found: ' . $event['literary']);
            return;
        }

        $existEvent = Event::where('title', $event['title'])->where('start_date', $start)->where('end_date', $end)->first();

        if ($existEvent) {
            \Log::warning('Event already exists: ' . $event['title']);
            return;
        }

        $eventSave = Event::create([
            'order_number' => Str::random(10),
            'title' => $event['title'],
            'description' => $event['body'] ?? $event['title'],
            'user_id' => $user->id,
            'event_type_id' => $type->id ?? 1,
            'event_location' => $event['palce'] === 'داخلية' ? 1 : 2,
            'start_date' => $start,
            'end_date' => $end,
            'available_seats' => 0,
            'need_support' => false,
            'lat' => $partner->lat,
            'lng' => $partner->lng,
            'status_id' => $this->getStatus($start, $end),
            'literary_id' => $literary->id,
            'category_id' => $event['event_type'],
            'other' => null,
            'links' => json_encode([$docs]),
            'source' => 'manual'
        ]);


        $eventSave->update(['order_number' => 'm-' . date('y') . str_pad($eventSave->id, 5, '0', STR_PAD_LEFT)]);

        \Log::info('Event created: #' . $id . ' ' . $event['email']);

        // Create Permit
        Permit::create($eventSave->toArray());

        $id++;
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
