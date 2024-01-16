<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'use',
        'type',
        'path',
        'fileable_id',
        'fileable_type',
    ];

    public function fileable(): MorphTo
    {
        return $this->morphTo();
    }
}
