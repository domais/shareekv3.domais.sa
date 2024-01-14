<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EventController extends Controller
{

    public function __construct(
        public \App\Contracts\EventServiceInterface $eventService
    ) {
    }

    /**
     * upcoming events
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function upcoming(Request $request)
    {
        return $this->eventService->upcomingEvents($request->all());
    }

    /**
     * past events
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function past(Request $request)
    {
        return $this->eventService->pastEvents($request->all());
    }

    /**
     * show event
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, \App\Models\Event $event)
    {
        return $this->eventService->showEvent($event);
    }

    /**
     * map events
     */
    public function map(Request $request)
    {
        return $this->eventService->mapEvents($request->all());
    }

    /**
     * Authenticated user events past and upcoming
     */
    public function user(Request $request)
    {
        return $this->eventService->userEvents($request->user(), $request->all());
    }
}
