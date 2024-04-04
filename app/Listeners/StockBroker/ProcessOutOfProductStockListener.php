<?php

namespace App\Listeners\StockBroker;

use App\Events\StockBroker\OutOfProductStockEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ProcessOutOfProductStockListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(OutOfProductStockEvent $event): void
    {
        //
    }
}