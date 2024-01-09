<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laratrust\Contracts\LaratrustUser;
use Laratrust\Traits\HasRolesAndPermissions;

class User extends Authenticatable implements LaratrustUser
{
    use HasApiTokens, HasFactory, Notifiable,HasRolesAndPermissions,SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function owner()
    {
        return $this->hasOne(Partner::class, 'owner_id');
    }

    public function permits()
    {
        return $this->hasMany(Permit::class,'user_id');
    }

    public function assignedpermits()
    {
        return $this->hasMany(Permit::class,'admin_id');
    }

    public function events()
    {
        return $this->hasMany(Event::class,'user_id');
    }

    public function assignedevents()
    {
        return $this->hasMany(Event::class,'admin_id');
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
