<?php

use Illuminate\Support\Facades\Route;


Route::namespace('App\Livewire\Backend')->middleware('auth')->group(function() {

    Route::namespace('Permit')->prefix('permit')->as('permit.')->group(function() {
       
        Route::get('/', Index::class)->name('index');

        Route::get('/create', Inputs::class)->name('create');
    });

    Route::namespace('Event')->prefix('event')->as('event.')->group(function() {
       
        Route::get('/', Index::class)->name('index');
    });

    Route::namespace('Show')->prefix('{type}')->as('show.')->group(function() {
       
        Route::get('/{id}', Index::class)->name('index');
    });

});

