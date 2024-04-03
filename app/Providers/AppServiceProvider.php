<?php

namespace App\Providers;

use App\Events\ForgotPasswordEvent;
use App\Listeners\ProcessForgotPasswordListener;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::listen(
            ForgotPasswordEvent::class,
            ProcessForgotPasswordListener::class
        );
    }
}