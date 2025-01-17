<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    /**
     * Get the user that owns the ticket.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function fileable()
    {
        return $this->morphMany(File::class, 'fileable');    
    }
}

    

