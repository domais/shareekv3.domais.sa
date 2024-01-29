<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    use HasFactory;

    protected $fillable = [
        'permit_id',
        'status_id',
        'order_number',
    ];

    public function permit()
    {
        return $this->belongsTo(Permit::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
