<?php

namespace App\Http\Resources;

use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class EventMapCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {

        return $this->collection->map(function ($events, $key) {
            $items = $events->map(function ($event) {
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
                    'title' => $event->title,
                    'image' => $image,
                    'default_image' => $isDefault,
                    'lat' => $event->lat,
                    'lng' => $event->lng,
                    'partner' => [
                        'logo' => $partnerLogo,
                        'name' => $event->user->owner->name,
                        'lat' => $event->user->owner->lat,
                        'lng' => $event->user->owner->lng,
                    ]
                ];
            });

            $partner = Partner::where('owner_id', $key)->select('lat', 'lng')->first();

            return [
                'id' => $key,
                'lat' => $partner['lat'],
                'lng' => $partner['lng'],
                'count' => $items->count(),
                'events' => $items
            ];
        })->toArray();
    }
}
