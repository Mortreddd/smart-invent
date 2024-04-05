<?php

namespace App\Listeners\Product;

use Illuminate\Contracts\Queue\ShouldQueue;
use App\Events\Product\CreateNewProductEvent;
use App\Models\Stock;
use Illuminate\Queue\InteractsWithQueue;

class ProcessCreateNewProductListener
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
    public function handle(CreateNewProductEvent $event): void
    {
        $product = $event->product;
        
        Stock::create([
            'product_id' => $product->id,
            'size_id' => null,
            'stock' => 0,
            'amount' => 0,
            'created_at' => now()
        ]);


    }
}