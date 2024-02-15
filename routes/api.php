<?php

use App\Http\Controllers\Api\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Auth routes
Route::prefix('auth')
    ->group(function () {
        Route::post('login', [\App\Http\Controllers\Api\AuthController::class, 'login'])->name('login');
        Route::post('register', [\App\Http\Controllers\Api\AuthController::class, 'register'])->name('register');
        Route::post('verify', [\App\Http\Controllers\Api\AuthController::class, 'verify'])->name('verify');
        Route::post(
            'resend',
            [\App\Http\Controllers\Api\AuthController::class, 'resendEmailVerification']
        )->name('resend');

        // middleware auth:sanctum
        Route::middleware('auth:sanctum')->group(function () {
            Route::post('logout', [\App\Http\Controllers\Api\AuthController::class, 'logout'])->name('logout');
            Route::post('update', [\App\Http\Controllers\Api\AuthController::class, 'updateProfile'])->name('update');
        });
    });

// Event routes
// Auth routes
Route::prefix('events')
    ->group(function () {
        Route::get('/upcoming', [\App\Http\Controllers\Api\EventController::class, 'upcoming'])->name('upcoming');
        Route::get('/past', [\App\Http\Controllers\Api\EventController::class, 'past'])->name('past');
        Route::get('/map', [\App\Http\Controllers\Api\EventController::class, 'map'])->name('map');
        // middleware auth:sanctum
        Route::get('/user', [\App\Http\Controllers\Api\EventController::class, 'user'])
            ->middleware('auth:sanctum')->name('user');
        Route::get('/literaries', [\App\Http\Controllers\Api\EventController::class, 'literaries'])
            ->name('literaries');
        Route::get('/city', [\App\Http\Controllers\Api\EventController::class, 'getCity'])->name('city');
        Route::get('/{event}', [\App\Http\Controllers\Api\EventController::class, 'show'])->name('show');
    });

Route::prefix('event-guests')
    ->group(function () {
        Route::post('/book-event', [\App\Http\Controllers\Api\EventGuestController::class, 'book'])
            ->middleware('auth:sanctum')
            ->name('book');
        Route::post('/cancel-event', [\App\Http\Controllers\Api\EventGuestController::class, 'cancel'])
            ->middleware('auth:sanctum')
            ->name('cancel');
        // middleware guest
        Route::post('/book-as-guest', [\App\Http\Controllers\Api\EventGuestController::class, 'bookAsGuest'])
            ->name('bookAsGuest')->middleware('guest');
        Route::post('/{event}/attend', [\App\Http\Controllers\Api\EventGuestController::class, 'attend'])
            ->middleware('auth:sanctum')
            ->name('attend');


        // Route::get('test', function () {
        //     echo 'test';
        // })->middleware('guest');
    });
