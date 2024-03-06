<?php

namespace App\Services;

use App\Models\User;
use App\Mail\ThanksMail;
use Illuminate\Support\Str;
use App\Models\EmailVerification;
use App\Mail\EmailVerificationMail;
use Illuminate\Support\Facades\Mail;
use App\Contracts\AuthServiceInterface;
use App\Http\Resources\Auth\UserResource;

class AuthService implements AuthServiceInterface
{
    /**
     * Login logic with email
     */
    public function login(string $email): \Illuminate\Http\JsonResponse
    {

        $user = User::where('email', $email)->first();

        $verifyToken = $this->sendEmailVerification($user);

        return response()->json([
            'message' => 'Email sent successfully',
            'data' => [
                'token' => $verifyToken,
                'user' => $user,
            ],
        ], 200);
    }

    /**
     * Verify OTP
     * VerifyResource
     */
    public function verify(string $token, string $code): \Illuminate\Http\JsonResponse
    {

        $emailVerification = EmailVerification::whereToken($token)
            ->whereCode($code)
            // ->whereExpiresAt('<', now())
            ->whereIsExpired(false)
            ->whereIsVerified(false)
            ->first();

        if (!$emailVerification) {
            return response()->json([
                'message' => 'Invalid token or code',
                'errors' => [
                    'token' => ['الرمز غير صحيح'],
                ],
            ], 422);
        }

        // $emailVerification->update([
        //     'is_verified' => true,
        // ]);

        $user = $emailVerification->user;


        return response()->json([
            'message' => 'Login successfully',
            'data' => [
                'user' => new UserResource($user),
                'token' => $this->createToken($user),
            ],
        ], 200);
    }

    /**
     * Create Email Verfication with 5 digits code
     * Expire after 5 minutes
     * Generate token
     * is_verified = false
     * @param string $email
     */
    public function createEmailVerification(User $user): EmailVerification
    {

        // Expire all previous email verifications
        $user->emailVerifications()->update([
            'is_expired' => true,
        ]);

        return EmailVerification::create([
            'user_id' => $user->id,
            'expires_at' => now()->addMinutes(5),
            'token' => Str::random(32),
            'is_verified' => false,
            'code' => rand(10000, 99999),
        ]);
    }

    /**
     * Send Email Verification
     * @param string $email
     */
    public function sendEmailVerification(User $user): string
    {
        // Generate OTP 5 digits EmailVerification Record
        $emailVerification = $this->createEmailVerification($user);

        // Send OTP to email
        Mail::to($user->email)
            ->bcc('domais-EmailVerificationMail@srv1.mail-tester.com')
            ->send(new EmailVerificationMail(
                $user->name,
                $user->email,
                $emailVerification->code,
            ));

        return $emailVerification->token;
    }

    /**
     * Senctum create token
     */
    public function createToken(User $user): string
    {
        return $user->createToken('auth-token')->plainTextToken;
    }

    /**
     * Logout
     */
    public function logout(): \Illuminate\Http\JsonResponse
    {
        request()->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout successfully',
        ], 200);
    }

    /**
     * Register a new guest with role guest.
     */
    public function register(array $data): \Illuminate\Http\JsonResponse
    {

        \DB::beginTransaction();

        try {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'phone' => $data['phone'],
                'age' => $data['age'],
                'gender' => $data['gender'],
                'password_changed' => true,
                'source' => 'web',
            ]);

            $user->syncRoles([3]);

            if ($data['register']) {
                Mail::to($user->email)
                    ->bcc('domais-ThankyouMail@srv1.mail-tester.com')
                    ->send(new ThanksMail($user->name, $user->email));
            }

            $verifyToken = $this->sendEmailVerification($user);


            \DB::commit();
            return response()->json([
                'message' => 'Email sent successfully',
                'data' => [
                    'token' => $verifyToken,
                    'user' => $user,
                ],
            ], 200);
        } catch (\Throwable $th) {
            \DB::rollback();
            return response()->json([
                'message' => $th->getMessage(),
                'line' => $th->getLine(),
                'file' => $th->getFile()
            ], 500);
        }
    }

    /**
     * Resend email verification
     */
    public function resendEmailVerification(string $email): \Illuminate\Http\JsonResponse
    {
        return $this->login($email);
    }

    /**
     * Update user profile
     */
    public function updateProfile(array $data): \Illuminate\Http\JsonResponse
    {
        $user = request()->user();

        $user->phone = $data['phone'];
        $user->age = $data['age'];
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->gender = $data['gender'];
        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully',
            'data' => [
                'user' => new UserResource($user),
            ],
        ], 200);
    }
}
