<?php

namespace App\Contracts;


interface AuthServiceInterface
{
    /**
     * Login with email
     */
    public function login(string $email): \Illuminate\Http\JsonResponse;

    /**
     * Verify OTP
     */
    public function verify(string $email, string $code): \Illuminate\Http\JsonResponse;

    /**
     * Logout
     */
    public function logout(): \Illuminate\Http\JsonResponse;

    /**
     * Send email verification
     */
    public function sendEmailVerification(\App\Models\User $user): string;

    /**
     * Create token
     */
    public function createToken(\App\Models\User $user): string;

    /**
     * Register a new guest with role guest.
     */
    public function register(array $data): \Illuminate\Http\JsonResponse;

    /**
     * Resend email verification
     */
    public function resendEmailVerification(string $email): \Illuminate\Http\JsonResponse;

    /**
     * Update profile
     */
    public function updateProfile(array $data): \Illuminate\Http\JsonResponse;
}
