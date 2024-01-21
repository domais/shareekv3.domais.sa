<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    protected $guarded = [];


    protected $casts = [
        'start_at' => 'datetime:Y-m-d\TH:i:s',
        'end_at' => 'datetime:Y-m-d\TH:i:s',
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
