<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Events\ForgotPasswordEvent;
class ProcessForgotPasswordListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     */
    public function handle(ForgotPasswordEvent $event): void
    {
        $token = Str::random(60);
        DB::table('password_reset_tokens')->insert([
            'email' => $event->email,
            'token' => $token,
            'created' => now()
        ]);
        
    }
}