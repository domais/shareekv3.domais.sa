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
    public $start_date = "";
    public $end_date = "";
    public $available_seats;
    public $event_location = "";
    public $image_adv;
    public $approval_file;
    public $location_image;



    public $order_number = 0;
    public $user_id;
    public $status_id = 1;
    public $need_support = 0;
    public $lat;
    public $lng;
    

    public function store($status)
    {
        $data = [];
        if ($status == 1) {
            $data = $this->toArray();
        }
        else{
            $data = $this->validate(newPermit());
        }
        
    }

    public function setForm($data)
    {
        // this 3 always required
        $this->title = $data->title;
        if ($data->literary) {
            # code...
            $this->literary_id = $data->literary->parent->id;
            $this->litrary_children_id = $data->literary_id;
        }


        $this->event_type_id = $data->event_type_id ?? "";
        $this->category_id = $data->category_id ?? "";
        $this->other = $data->other ?? "";
        $this->targeted_audience = $data->targeted_audience ?? "";
        $this->description = $data->description ?? "";
        $this->start_date = $data->start_date ?? "";
        $this->end_date = $data->end_date ?? "";
        $this->available_seats = $data->available_seats ?? "";
        $this->event_location = $data->event_location ?? "";

        $this->lat = $data->lat;
        $this->lng = $data->lng;

        $this->image_adv = 'public/'.$data->fileable->where('use','adv')->first()->path ?? "";

        if ($data->event_location == 2) {
            # code...
            $this->location_image = 'public/'.$data->fileable->where('use','location_image')->first()->path ?? "";

            $this->approval_file = 'public/'.$data->fileable->where('use','approval_letter')->first()->path ?? "";
        }





    }
}


