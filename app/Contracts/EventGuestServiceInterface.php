<?php

namespace App\Contracts;


interface EventGuestServiceInterface
{
    /**
     * Book the event for the user
     * @param data array
     */
    public function bookEvent(\App\Models\User $user, array $data): \Illuminate\Http\JsonResponse;

    /**
     * Cancel the event for the user
     * @param data array
     */
    public function cancelEvent(\App\Models\User $user, array $data): \Illuminate\Http\JsonResponse;

    /**
     * Book as unauthenticated user
     * @param data array
     */
    public function bookAsGuest(array $data);

    /**
     * Attend the event for the user
     */
    public function attendEvent(\App\Models\User $user, array $data): \Illuminate\Http\JsonResponse;
}
