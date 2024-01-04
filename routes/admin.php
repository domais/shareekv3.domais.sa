<?php

use Illuminate\Support\Facades\Route;


Route::namespace('App\Livewire\Backend')->group(function() {

    Route::namespace('Permit')->prefix('permit')->as('permit.')->group(function() {
       
        Route::get('/', Index::class)->name('index');

        Route::get('/create', Inputs::class)->name('create');

        Route::get('/draft/{draft}', Inputs::class)->name('draft');

    });

    Route::namespace('Event')->prefix('event')->as('event.')->group(function() {
       
        Route::get('/', Index::class)->name('index');
    });

});

