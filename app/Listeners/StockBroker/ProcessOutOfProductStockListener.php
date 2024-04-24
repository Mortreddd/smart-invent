<?php

namespace App\Listeners\StockBroker;

use App\Events\StockBroker\OutOfProductStockEvent;
use App\Mail\StockBroker\ProductStockWarningMail;
use App\Models\Employee;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

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

        // * SEND AN EMAIL TO THE ADMINS
        $admins = Employee::where('role', 'Admin')->get('email');
        Mail::to($admins)->sendNow(new ProductStockWarningMail($admins, $event->stock));
    }
}