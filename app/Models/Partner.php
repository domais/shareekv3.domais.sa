<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'CR',
        'city',
        'class',
        'lat',
        'lng',
        'owner_id',
     
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
