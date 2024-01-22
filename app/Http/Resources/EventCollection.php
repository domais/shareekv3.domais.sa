<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class EventCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($event) {

            // full path for image
            $isDefault = false;
            $image = $event->image->path ?? '';
            if ($image) {
                $image = config('filesystems.disks.do.cdn_endpoint') . '/' . $image;
            } else {
                $isDefault = true;
                $image = url('img/default-event.png');
            }

            $partnerLogo = $event->user->owner->image->path ?? '';
            if ($partnerLogo) {
                $partnerLogo = config('filesystems.disks.do.cdn_endpoint') . '/' . $partnerLogo;
            } else {
                $partnerLogo = url('img/default-event.png');
            }

            return [
                'id' => $event->id,
                'order_number' => $event->order_number,
                'title' => $event->title,
                'description' => $event->description,
                'image' => $image,
                'default_image' => $isDefault,
                'start_date' => $event->start_date,
                'end_date' => $event->end_date,
                'event_type' => $event->eventType->name,
                'category_id' => $event->category_id,
                'event_location' => $event->event_location == 1 ? 'داخلي' : 'خارجي',
                'literary' => optional($event->literary)->name ?? 'لم يحدد النوع',
                'status_id' => $event->status->name,
                'available_seats' => $event->available_seats,
                'guest_count' => $event->guestsGoing->count(),
                'goings' => $event->guestsGoing->pluck('id'),
                'partner' => [
                    'logo' => $partnerLogo,
                    'name' => $event->user->owner->name ?? '',
                    'class' => $event->user->owner->class,
                    'city' => $event->user->owner->city,
                ]
            ];
        })->toArray();
    }
}
