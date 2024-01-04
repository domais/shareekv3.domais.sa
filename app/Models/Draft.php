<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Draft extends Model
{
    use HasFactory;

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

    public function literary()
    {
        return $this->belongsTo(Literary::class);
    }
    
}
