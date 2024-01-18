<?php

namespace App\Services;

use App\Models\User;
use App\Mail\BookedMail;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\EventResource;
use App\Contracts\EventGuestServiceInterface;
use App\Mail\ThanksMail;

class EventGuestService implements EventGuestServiceInterface
{

    public function __construct(
        public \App\Contracts\AuthServiceInterface $authService
    ) {
    }

    /**
     * Book the event for the user
     * @param data array
     */
    public function bookEvent(User $user, array $data): \Illuminate\Http\JsonResponse
    {
        $event = \App\Models\Event::find($data['event_id']);

        // You already booked this event
        if ($event->guests()->where('user_id', $user->id)->where('type', 'going')->exists()) {
            return response()->json([
                'message' => 'أنت مسجل بالفعل في هذا الحدث',
                'errors' => [
                    'event_id' => ['أنت مسجل بالفعل في هذا الحدث'],
                ],
            ], 422);
        }


        // if exists, update type to going
        if ($event->guests()->where('user_id', $user->id)->exists()) {
            $event->guests()->updateExistingPivot($user->id, ['type' => 'going']);
        } else {
            // else, attach the user to the event
            $event->guests()->attach($user);
        }

        Mail::to($user)->send(new BookedMail($event, $user->name));

        return response()->json([
            'message' => 'Event booked successfully',
            'data' => new EventResource($event),
        ], 200);
    }

    /**
     * Cancel the event for the user
     * @param data array
     */
    public function cancelEvent(User $user, array $data): \Illuminate\Http\JsonResponse
    {
        $event = \App\Models\Event::find($data['event_id']);

        // update type to cancelled
        $event->guests()->updateExistingPivot($user->id, ['type' => 'cancelled']);

        return response()->json([
            'message' => 'Event cancelled successfully',
            'data' => new EventResource($event),
        ], 200);
    }

    /**
     * Book as unauthenticated user
     * @param data array
     */
    public function bookAsGuest(array $data)
    {
        $event = \App\Models\Event::find($data['event_id']);

        \DB::beginTransaction();

        try {
            $register = $this->authService->register($data);

            if ($register->getStatusCode() !== 200) {
                return $register;
            }

            $user = $register->getData()->data->user;

            // attach the user to the event
            $event->guests()->attach($user->id);

            Mail::to($user)->send(new ThanksMail($user->name));
            Mail::to($user)->send(new BookedMail($event, $user->name));

            \DB::commit();
            return response()->json([
                'message' => 'Event booked successfully',
                'data' => [
                    'user' => $user,
                    'token' => $register->getData()->data->token,
                    'event' => new EventResource($event),
                ]
            ], 200);
        } catch (\Throwable $th) {
            \DB::rollBack();
            return response()->json([
                'message' => 'Something went wrong',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
}
