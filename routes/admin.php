<?php

use Illuminate\Support\Facades\Route;


Route::namespace('App\Livewire\Backend')->middleware('auth')->group(function() {

    Route::namespace('Permit')->prefix('permit')->as('permit.')->group(function() {
       
        Route::get('/', Index::class)->name('index');
    });

});

