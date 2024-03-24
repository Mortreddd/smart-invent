<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


class Employee extends Authenticatable
{
    use HasFactory, Authorizable, Notifiable;

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'gender',
        'role',
        'email',
        'password',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'password' => 'hashed',
        'created_at' => 'datetime'
    ];
}