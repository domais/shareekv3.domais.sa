<?php

namespace App\Livewire\Forms;

use App\Models\Permit;
use Illuminate\Support\Facades\DB;
use Livewire\Attributes\Validate;
use Livewire\Form;

class PermitForm extends Form
{

    public $order_number;
    public $user_id;
    public $event_type_id;
    public $event_location;
    public $literary_id;
    public $status_id;
    public $title;
    public $description;
    public $start_date;
    public $end_date;
    public $available_seats;
    public $need_support;
    public $lat;
    public $lng;

    public function rules()
    {
        return [
            'order_number' => 'required|unique:permits,order_number',
            'user_id' => 'required|exists:users,id',
            'event_type_id' => 'required|exists:event_types,id',
            'event_location' => 'required|in:1,2',
            'literary_id' => 'required|exists:literaries,id',
            'status_id' => 'required|exists:statuses,id',
            'description' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'available_seats' => 'required|integer',
            'need_support' => 'required|boolean',
            'lat' => 'required',
            'lng' => 'required',
        ];
    }

    public function store($status)
    {
        $data = [];
        if ($status == 1) {
            $data = $this->toArray();
        }
        else{
            $data = $this->validate();
        }

        DB::transaction(function () use ($data) {
            Permit::create($data);
        }); 

    }

    public function speakers()
    {
        //to service

    }

    public function partners()
    {
        // to service
        
    }
    
}


