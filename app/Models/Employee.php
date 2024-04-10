<?php

namespace App\Models;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class Employee extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Authorizable, Notifiable, CanResetPassword, HasApiTokens;

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'gender',
        'role',
        'email',
        'password',
        'remember_token',
        'email_verified_at',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'password' => 'hashed',
        'created_at' => 'datetime'
    ];
}