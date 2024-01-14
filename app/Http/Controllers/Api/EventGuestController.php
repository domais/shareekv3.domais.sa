<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests\BookRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\CancelBookRequest;
use App\Http\Requests\BookAsGuestRequest;

class EventGuestController extends Controller
{
    public function __construct(
        public \App\Contracts\EventGuestServiceInterface $eventGuestService,
        public \App\Contracts\AuthServiceInterface $authService
    ) {
    }

    /**
     * Book the event for the user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function book(BookRequest $request)
    {
        $user = $request->user();
        return $this->eventGuestService->bookEvent($user, $request->all());
    }

    /**
     * Cancel the event for the user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function cancel(CancelBookRequest $request)
    {
        $user = $request->user();
        return $this->eventGuestService->cancelEvent($user, $request->all());
    }

    /**
     * Book as unauthenticated user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function bookAsGuest(BookAsGuestRequest $request)
    {
        return $this->eventGuestService->bookAsGuest($request->all());
    }
}
