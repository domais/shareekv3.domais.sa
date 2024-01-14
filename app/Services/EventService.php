<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Event;
use App\Http\Resources\EventResource;
use App\Http\Resources\EventCollection;
use App\Contracts\EventServiceInterface;
use App\Http\Resources\EventMapCollection;

class EventService implements EventServiceInterface
{
    /**
     * Upcoming events with status
     * 5,6, between start and end date
     * @param data array
     */
    public function upcomingEvents(array $data): \Illuminate\Http\JsonResponse
    {
        $events = Event::where('start_date', '>=', Carbon::now())
            ->orderBy('start_date', 'desc')
            ->paginate($data['per_page'] ?? 10, ['*'], 'page', $data['page'] ?? 1);

        return response()->json([
            'message' => 'Upcoming events',
            'data' => new EventCollection($events),
        ], 200);
    }

    /**
     * Past events with status
     * @param data array
     */
    public function pastEvents(array $data): \Illuminate\Http\JsonResponse
    {
        $events = Event::whereDate('end_date', '<', Carbon::now())
            ->orderBy('start_date', 'desc')
            ->paginate($data['per_page'] ?? 10, ['*'], 'page', $data['page'] ?? 1);

        return response()->json([
            'message' => 'Past events',
            'data' => new EventCollection($events),
        ], 200);
    }

    /**
     * show event
     * @param event \App\Models\Event
     */
    public function showEvent(Event $event): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'message' => 'Event details',
            'data' => new EventResource($event),
        ], 200);
    }

    /**
     * map events
     * @param data array
     */
    public function mapEvents(array $data): \Illuminate\Http\JsonResponse
    {
        $events = Event::whereDate('start_date', '>=', Carbon::now())
            ->paginate($data['per_page'] ?? 50, ['*'], 'page', $data['page'] ?? 1);

        return response()->json([
            'message' => 'Upcoming Map events',
            'data' => new EventMapCollection($events),
        ], 200);
    }

    /**
     * Authenticated user events past and upcoming
     * @param data array
     */
    public function userEvents(User $user, array $data): \Illuminate\Http\JsonResponse
    {
        $upcomingEvents = $user->guestEventsGoing()
            ->whereDate('start_date', '>=', Carbon::now())
            ->paginate(10, ['*'], 'page', $data['page'] ?? 1);

        $pastEvents = $user->guestEvents()
            ->whereDate('end_date', '<', Carbon::now())
            ->paginate(10, ['*'], 'page', $data['page'] ?? 1);

        return response()->json([
            'message' => 'Upcoming events',
            'data' => [
                'upcoming' => new EventCollection($upcomingEvents),
                'past' => new EventCollection($pastEvents),
                'count' => $upcomingEvents->total() + $pastEvents->total(),
            ],
        ], 200);
    }
}
