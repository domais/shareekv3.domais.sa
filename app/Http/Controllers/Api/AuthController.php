<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\VerfiyRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\UpdateUserRequest;

class AuthController extends Controller
{

    public function __construct(
        public \App\Contracts\AuthServiceInterface $authService
    ) {
    }

    /**
     * Login email only
     * @param LoginRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request): \Illuminate\Http\JsonResponse
    {
        return $this->authService->login($request->email);
    }

    /**
     * Verify phone number
     * @param VerfiyRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function verify(VerfiyRequest $request): \Illuminate\Http\JsonResponse
    {
        return $this->authService->verify($request->token, $request->code);
    }

    /**
     * Logout
     */
    public function logout(Request $request): \Illuminate\Http\JsonResponse
    {
        return $this->authService->logout();
    }

    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request)
    {
        return $this->authService->register($request->validated());
    }

    /**
     * Resend email verification
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function resendEmailVerification(LoginRequest $request): \Illuminate\Http\JsonResponse
    {
        return $this->authService->resendEmailVerification($request->email);
    }

    /**
     * Update user profile
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateProfile(UpdateUserRequest $request): \Illuminate\Http\JsonResponse
    {
        return $this->authService->updateProfile($request->validated());
    }
}
