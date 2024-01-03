<?php

namespace App\Livewire\Forms;

use App\Models\Permit;
use Illuminate\Support\Facades\DB;
use Livewire\Attributes\Validate;
use Livewire\Form;

class PermitForm extends Form
{
    public $event_type_id = "";
    public $category_id = "";
    public $other = "";
    public $targeted_audience = "";
    public $literary_id = "";
    public $litrary_children_id = "";
    public $title;
    public $description;
    public $start_date;
    public $end_date;
    public $available_seats;


    public $order_number;
    public $user_id;
    public $event_location;
    public $status_id;
    public $need_support;
    public $lat;
    public $lng;

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


