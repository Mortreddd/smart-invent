<?php

namespace App\Jobs\Sales;

use App\Models\Sale;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SalesReportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public Sale $sale){}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Sale::create([
            'product_id' => $this->sale->product_id,
            'amount' => $this->sale->amount,
            'quantity' => $this->sale->quantity,
            'created_at' => $this->sale->created_at,
            'updated_at' => $this->sale->updated_at
        ]);
    }
}