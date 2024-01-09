<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function() {
    return redirect()->route('login');
});

Route::namespace('App\Livewire\Backend')->middleware('auth')->group(function() {

    Route::namespace('Permit')->prefix('permit')->as('permit.')->group(function() {
       
        Route::get('/', Index::class)->name('index');

        Route::get('/create', Inputs::class)->name('create')->middleware('role:User');

        Route::get('/draft/{draft}', Inputs::class)->name('draft');

        Route::get('/edit/{permit}', Inputs::class)->name('edit');

        Route::get('/show/{permit}', Inputs::class)->name('show');

    });

    Route::namespace('Partner')->prefix('partner')->as('partner.')->group(function() {
       
        Route::get('/', Index::class)->name('index');

        Route::get('/{partner}', Show::class)->name('show');

    });

    Route::namespace('Event')->prefix('event')->as('event.')->group(function() {
       
        Route::get('/', Index::class)->name('index');
    });

    Route::namespace('Ticket')->prefix('ticket')->as('ticket.')->group(function() {
       
        Route::get('/', Index::class)->name('index');
    });

});


require __DIR__.'/auth.php';
