<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Literary extends Model
{
    use HasFactory;

    public function permits()
    {
        return $this->hasMany(Permit::class);
    }

    public function parent()
    {
        return $this->belongsTo(Literary::class, 'parent_id');
    }

    
}
