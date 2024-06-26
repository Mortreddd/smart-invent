<?php

namespace App\Providers;

use App\Events\ForgotPasswordEvent;
use App\Events\RegisteredEmployeeEvent;
use App\Events\StockBroker\OutOfProductStockEvent;
use App\Listeners\ProcessForgotPasswordListener;
use App\Listeners\ProcessRegisteredEmployeeListener;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use App\Listeners\StockBroker\ProcessOutOfProductStockListener;

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

        Event::listen(
            OutOfProductStockEvent::class,
            ProcessOutOfProductStockListener::class
        );
        
        Event::listen(
            RegisteredEmployeeEvent::class,
            ProcessRegisteredEmployeeListener::class
        );
    }
}