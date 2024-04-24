<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailConfirmationController extends Controller
{
    public function index(int $email_id)
    {
        Employee::findOrFail($email_id)->update([
            'email_verified_at' => now()
        ]);

        return Inertia::render('Success/EmailConfirmationSuccess');
    }
}