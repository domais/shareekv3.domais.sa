<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function eventType()
    {
        return $this->belongsTo(EventType::class);
    }

    public function speakers()
    {
        return $this->hasMany(Speaker::class);
    }

    public function partnerships()
    {
        return $this->hasMany(Partnership::class);
    }

    public function literary()
    {
        return $this->belongsTo(Literary::class);
    }

    public function image(): \Illuminate\Database\Eloquent\Relations\MorphOne
    {
        return $this->morphOne(File::class, 'fileable');
    }


    public function guests()
    {
        return $this->belongsToMany(User::class, 'event_user', 'event_id', 'user_id');
    }

    public function guestsGoing()
    {
        return $this->belongsToMany(User::class, 'event_user', 'event_id', 'user_id')->wherePivot('type', 'going');
    }
}
