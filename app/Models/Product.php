<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Stock;

class Product extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'image',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'created_at' => 'datetime'
    ];

    public function stocks()
    {
        return $this->hasMany(Stock::class);
    }
}