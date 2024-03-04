<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'image',
        'amount',
        'created_at',
        'updated_at',
    ];


    public function stocks()
    {
        return $this->hasManu(Stock::class);
    }
}