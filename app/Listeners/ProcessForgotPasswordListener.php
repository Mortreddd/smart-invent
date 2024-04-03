<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Events\ForgotPasswordEvent;
use App\Mail\MailResetPassword;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\View;
use App\Exceptions\FailedForgotPasswordRequestException;
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
        try{
            DB::table('password_reset_tokens')->updateOrInsert([
                'email' => $event->email
            ], [
                'token' => $token,
                'created_at' => Carbon::now()
            ]);
            Mail::to($event->email)->send(new MailResetPassword($event->email, $token));
        } 
        
        catch ( Exception $e ) {
            DB::table('password_reset_tokens')
                ->where('email', $event->email)
                ->where('token', $token)
                ->delete();
            throw new FailedForgotPasswordRequestException();
        }
       

        
        
    }
}