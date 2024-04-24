<?php

namespace App\Listeners;

use App\Events\RegisteredEmployeeEvent;
use App\Mail\EmailConfirmationMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;


class ProcessRegisteredEmployeeListener
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
    public function handle(RegisteredEmployeeEvent $event): void
    {
        Mail::to($event->employee->email)->sendNow(
            new EmailConfirmationMail($event->employee)
        );
    }
}