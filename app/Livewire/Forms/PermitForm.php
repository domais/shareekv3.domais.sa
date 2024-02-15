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
    public $meeting_link;


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
           // dd($data->literary);
            # code...
            $this->literary_id = $data->literary->parent ? $data->literary->parent->id : $data->id;
            $this->litrary_children_id = $data->literary_id ?? "";
        }


        $this->meeting_link = $data->meeting_link ?? "";
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

        dd($data->fileable()->where('use','adv')->get()->last(),$data);

        $this->image_adv = $data->fileable()->where('use','adv')->latest()->first() ? 'public/'.$data->fileable()->where('use','adv')->latest()->first()->path : "";
        if ($data->event_location == 2) {
            # code...
            $this->location_image = $data->fileable->where('use','location_image')->last() ? 'public/'.$data->fileable->where('use','location_image')->last()->path : "";

            $this->approval_file = $data->fileable->where('use','approval_letter')->last() ? 'public/'.$data->fileable->where('use','approval_letter')->last()->path : "";
        }





    }
}


