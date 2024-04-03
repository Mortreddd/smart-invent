<?php

namespace App\Exceptions;
use Throwable;
use Exception;
use Inertia\Inertia;
class FailedForgotPasswordRequestException extends Exception
{
    public function render($request, Throwable $exception)
    {
        // return Inertia::render('Errors/ForgotPasswordError');
    }
}