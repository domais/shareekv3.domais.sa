<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Event;
use App\Http\Resources\EventResource;
use App\Http\Resources\EventCollection;
use App\Contracts\EventServiceInterface;
use App\Http\Resources\EventMapCollection;
use App\Http\Resources\LiterarieCollection;
use Illuminate\Contracts\Database\Eloquent\Builder;

class EventService implements EventServiceInterface
{
    /**
     * Upcoming events with status
     * 5,6, between start and end date
     * @param data array
     */
    public function upcomingEvents(array $data): \Illuminate\Http\JsonResponse
    {

        $lat = $data['lat'] ?? null;
        $lng = $data['lng'] ?? null;
        $radius = $data['radius'] ?? 100; // km

        // check if lat and lng are in Saudi Arabia
        if ($lat < 15 || $lat > 35 || $lng < 34 || $lng > 56) {
            // Riyadh
            $lat = 24.7136;
            $lng = 46.6753;
        }

        // Literary_id
        $data['type'] = $data['type'] ?? null;

        $events = Event::when(!isset($data['date_range']), function ($query) {
                return $query->whereDate('start_date', '>=', Carbon::now());
            })
            ->when(isset($data['date_range']), function ($query) use ($data) {
                return $this->filterDateRangeEvents($data['date_range'], $query);
            })
            ->when(isset($data['targeted_audience']), function ($query) use ($data) {
                return $query->where('targeted_audience', $data['targeted_audience']);
            })
            ->when(isset($data['type']), function ($query) use ($data) {
                return $query->where('literary_id', $data['type']);
            })
            ->orderBy('start_date', 'desc')
            ->paginate($data['per_page'] ?? 10, ['*'], 'page', $data['page'] ?? 1);

        $events = new EventCollection($events);
        return response()->json([
            'message' => 'Upcoming events',
            // return with meta page
            'data' => $events,
            'meta' => [
                'current_page' => $events->currentPage(),
                'last_page' => $events->lastPage(),
                'per_page' => $events->perPage(),
                'total' => $events->total(),
            ],
        ], 200);
    }

    /**
     * Past events with status
     * @param data array
     */
    public function pastEvents(array $data): \Illuminate\Http\JsonResponse
    {
        $data['type'] = $data['type'] ?? null;

        $events = Event::where('end_date', '<', Carbon::now())
            ->orderBy('start_date', 'desc')
            ->when(isset($data['type']), function ($query) use ($data) {
                return $query->where('literary_id', $data['type']);
            })
            ->when(isset($data['targeted_audience']), function ($query) use ($data) {
                return $query->where('targeted_audience', $data['targeted_audience']);
            })
            ->paginate($data['per_page'] ?? 10, ['*'], 'page', $data['page'] ?? 1);

        $events =  new EventCollection($events);

        return response()->json([
            'message' => 'Past events',
            'data' => $events,
            'meta' => [
                'current_page' => $events->currentPage(),
                'last_page' => $events->lastPage(),
                'per_page' => $events->perPage(),
                'total' => $events->total(),
            ],
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

    /**
     * Get Literaries with count of related upcoming events
     * @param data array
     * @return \Illuminate\Http\JsonResponse
     */
    public function literaries(array $data): \Illuminate\Http\JsonResponse
    {
        // status = [upcoming, past]
        $status = $data['status'] ?? 'upcoming';
        $literaries =
            $literaries = \App\Models\Literary::where('status', 1)->withCount([
                'events' => function ($query) use ($status) {
                    if ($status === 'upcoming') {
                        $query->where('start_date', '>=', Carbon::now());
                    } elseif ($status === 'past') {
                        $query->where('end_date', '<', Carbon::now());
                    }
                },
            ])
            ->whereHas('events', function ($query) use ($status) {
                if ($status === 'upcoming') {
                    $query->where('start_date', '>=', Carbon::now());
                } elseif ($status === 'past') {
                    $query->where('end_date', '<', Carbon::now());
                }
            })
            ->orderBy('events_count', 'desc')
            ->get();

        return response()->json([
            'message' => 'Literaries',
            'data' => new LiterarieCollection($literaries),
        ], 200);
    }

    /**
     * Filter date range events
     */
    private function filterDateRangeEvents(string $date = null, Builder $query = null)
    {
        $dateRange = [
            'this_week' => [
                'start' => Carbon::now()->startOfWeek()->format('Y-m-d H:i:s'),
                'end' => Carbon::now()->endOfWeek()->format('Y-m-d H:i:s'),
            ],
            'next_week' => [
                'start' => Carbon::now()->add(1, 'weeks')->startOfWeek()->format('Y-m-d H:i:s'),
                'end' => Carbon::now()->add(1, 'weeks')->endOfWeek()->format('Y-m-d H:i:s'),
            ],
            'this_month' => [
                'start' => Carbon::now()->startOfMonth()->format('Y-m-d H:i:s'),
                'end' => Carbon::now()->endOfMonth()->format('Y-m-d H:i:s'),
            ],
            'next_month' => [
                'start' => Carbon::now()->add(1, 'months')->startOfMonth()->format('Y-m-d H:i:s'),
                'end' => Carbon::now()->add(1, 'months')->endOfMonth()->format('Y-m-d H:i:s'),
            ],
        ];
        \Log::info($dateRange[$date]['start']);
        return $query->whereBetween('start_date', [$dateRange[$date]['start'], $dateRange[$date]['end']]);
    }

    /**
     * map events
     * @param data array
     */
    public function mapEvents(array $data): \Illuminate\Http\JsonResponse
    {
        $lat = $data['lat'] ?? null;
        $lng = $data['lng'] ?? null;
        $radius = $data['radius'] ?? 30; // km

        // check if lat and lng are in Saudi Arabia
        if ($lat < 15 || $lat > 35 || $lng < 34 || $lng > 56) {
            // Riyadh
            $lat = 24.7136;
            $lng = 46.6753;
        }


        $events = Event::when(isset($lat) && isset($lng), function ($query) use ($lat, $lng, $radius) {
            return $query->selectRaw('*, ( 6371 * acos( cos( radians(?) ) *
            cos( radians( lat ) ) * cos( radians( lng ) - radians(?) ) + sin( radians(?) ) *
            sin( radians( lat ) ) ) ) AS distance', [$lat, $lng, $lat])
                ->having('distance', '<', $radius)
                ->orderBy('distance');
        })
            ->when(isset($data['date_range']), function ($query) use ($data) {
                return $this->filterDateRangeEvents($data['date_range'], $query);
            })
            ->when(isset($data['type']), function ($query) use ($data) {
                return $query->where('literary_id', $data['type']);
            })
            ->when(!isset($data['date_range']), function ($query) {
                return $query->whereDate('start_date', '>=', Carbon::now());
            })
            ->get();

        $events = $events->groupBy('user_id');
        $events = new EventMapCollection($events);
        return response()->json([
            'message' => 'Nearby events',
            'data' => $events,
        ], 200);
    }
}
