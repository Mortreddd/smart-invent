<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'size_id',
        'quantity',
        'earned',
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

    public function date()
    {
        return Carbon::parse($this->creaetd_at)->week;
    }

    public function size()
    {
        return $this->belongsTo(Size::class);
    }
 

}