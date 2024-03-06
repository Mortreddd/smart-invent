<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;


    protected $fillable = [
        'employee_id',
        'activity',
        'created_at',
        'updated_at'
    ];


    
}