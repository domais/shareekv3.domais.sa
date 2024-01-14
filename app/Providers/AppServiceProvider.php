<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            \App\Contracts\AuthServiceInterface::class,
            \App\Services\AuthService::class
        );

        $this->app->bind(
            \App\Contracts\EventServiceInterface::class,
            \App\Services\EventService::class
        );

        $this->app->bind(
            \App\Contracts\EventGuestServiceInterface::class,
            \App\Services\EventGuestService::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
