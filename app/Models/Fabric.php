<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fabric extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'textile',
        'image',
        'stock',
        'price',
        'created_at',
        'updated_at',
        'log_id'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}