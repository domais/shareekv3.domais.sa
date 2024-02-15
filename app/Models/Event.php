<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    protected $fillable = [
        'order_number',
        'user_id',
        'admin_id',
        'event_type_id',
        'category_id',
        'other',
        'targeted_audience',
        'event_location',
        'literary_id',
        'status_id',
        'title',
        'description',
        'start_date',
        'end_date',
        'available_seats',
        'need_support',
        'lat',
        'lng',
        'source',
        'is_survey_sent',
        'meeting_link',

    ];

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

    public function fileable()
    {
        return $this->morphMany(File::class, 'fileable');
    }

    public function image(): \Illuminate\Database\Eloquent\Relations\MorphOne
    {
        return $this->morphOne(File::class, 'fileable');
    }

    public function guests()
    {
        return $this->belongsToMany(User::class, 'event_user', 'event_id', 'user_id')->withPivot('type', 'status');
    }

    public function guestsGoing()
    {
        return $this->belongsToMany(User::class, 'event_user', 'event_id', 'user_id')
            ->wherePivot('type', 'going')->withPivot('type', 'status');
    }

    public function permit()
    {
        return $this->hasOne(Permit::class, 'order_number', 'order_number');
    }
}
