<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $image = $this->permit->fileable->where('use', 'adv')->last()->path ?? '';
        if ($image) {
            $image = config('filesystems.disks.do.cdn_endpoint') . '/' . $image;
        } else {
            $image = url('img/default-event.png');
        }

        $partnerLogo = $this->user->owner->image->path ?? '';
        if ($partnerLogo) {
            $partnerLogo = config('filesystems.disks.do.cdn_endpoint') . '/' . $partnerLogo;
        } else {
            $partnerLogo = url('img/default-event.png');
        }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'image' => $image,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'event_type' => $this->eventType->name ?? '',
            'category' => $this->category_id,
            'other' => $this->other,
            'event_location' => $this->event_location == 1 ? 'داخلي' : 'خارجي',
            'literary' => $this->literary->name ?? '',
            'status_id' => $this->status->name ?? '',
            'available_seats' => $this->available_seats,
            'need_support' => $this->need_support,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'goings' => $this->guestsGoing->pluck('id'),
            'guest_count' => $this->guestsGoing->count(),
            'allow_booking' => $this->allow_booking ?? true,
            'guests' => $this->guestsGoing
                ->map(function ($guest) {
                    return [
                        'id' => $guest->id,
                        'name' => $guest->name,
                        'email' => $guest->email,
                        'status' => $guest->pivot->status,
                        'type' => $guest->pivot->type,
                    ];
                }),
            'guest_approved' => $this->guestsGoing->where('id', auth()->id())->first()?->pivot->status === 'approved',
            'speakers' => $this->speakers->map(function ($speaker) {
                return [
                    'id' => $speaker->id,
                    'name' => $speaker->name,
                    'description' => $speaker->description,
                    'image' => $speaker->image->path ?? '',
                    'facebook' => $speaker->facebook,
                    'twitter' => $speaker->twitter,
                    'instagram' => $speaker->instagram,
                    'linkedin' => $speaker->linkedin,
                    'website' => $speaker->website,
                ];
            }),
            'partner' => [
                'logo' => $partnerLogo,
                'name' => $this->user->owner->name ?? '',
                'class' => $this->user->owner->class,
                'lat' => $this->user->owner->lat,
                'lng' => $this->user->owner->lng,
                'city' => $this->user->owner->city,
            ]
        ];
    }
}
