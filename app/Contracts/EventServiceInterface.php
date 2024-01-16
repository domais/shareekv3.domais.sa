<?php

namespace App\Contracts;


interface EventServiceInterface
{
    /**
     * Upcoming events with status
     * 5,6, between start and end date
     * @param data array
     */
    public function upcomingEvents(array $data): \Illuminate\Http\JsonResponse;

    /**
     * Past events with status
     * @param data array
     */
    public function pastEvents(array $data): \Illuminate\Http\JsonResponse;

    /**
     * show event
     * @param event \App\Models\Event
     */
    public function showEvent(\App\Models\Event $event): \Illuminate\Http\JsonResponse;

    /**
     * map events
     * @param data array
     */
    public function mapEvents(array $data): \Illuminate\Http\JsonResponse;

    /**
     * Authenticated user events past and upcoming
     * @param data array
     */
    public function userEvents(\App\Models\User $user, array $data): \Illuminate\Http\JsonResponse;

    /**
     * Get Literaries with count of related upcoming events
     * @param data array
     * @return \Illuminate\Http\JsonResponse
     */
    public function literaries(array $data): \Illuminate\Http\JsonResponse;
}
