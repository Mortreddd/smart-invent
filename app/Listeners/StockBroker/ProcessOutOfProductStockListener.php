<?php

namespace App\Listeners\StockBroker;

use App\Events\StockBroker\OutOfProductStockEvent;
use App\Models\Employee;
use App\Models\Product;
use App\Models\Stock;
use App\Notifications\NotifyAdminsForStockWarning;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

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
        $sale = $event->sale;
        $stock = Stock::whereAll([
                    'product_id' => $sale->id,
                    'size_id' => $sale->size_id
                ])
                ->latest()
                ->first();
                
        if ($stock->quantity <= 30) {
            // * SEND AN EMAIL TO THE ADMINS
            $admins = Employee::where('role', 'Admin')->get();
            Notification::send($admins, 
                new NotifyAdminsForStockWarning(
                    Product::with('stocks')->find($sale->product_id)
                )
            );
            
        }

        // * DECREMENT THE STOCKS
        $stock->decrement('quantity', $sale->quantity);
    }
}