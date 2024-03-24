<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Size;
class Stock extends Model
{
    use HasFactory;


    protected $fillable = [
        'product_id',
        'size_id',
        'stock',
        'amount',
        'created_at',
        'updated_at',
    ];
    
    protected $casts = [
        'created_at' => 'datetime'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function size()
    {
        return $this->belongsTo(Size::class);
    }
}