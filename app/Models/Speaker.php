<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Speaker extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function permit()
    {
        return $this->belongsTo(Permit::class);
    }

    public function surveys()
    {
        return $this->morphMany(Survey::class, 'surveyable');
    }
}
