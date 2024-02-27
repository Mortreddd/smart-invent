<?php

namespace App\Listeners\Materials;

use App\Events\Materials\MaterialsAreLowEvent;
use App\Models\Staff;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class MaterialsAreLowListener
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
    public function handle(MaterialsAreLowEvent $material): void
    {
        $managers = Staff::where('role', 'Manager')->get();
        Mail::send('', [$material], function($message) use ($managers, $material){
            $message->to($managers)->subject($material.'is running low');
        } );
    }
}