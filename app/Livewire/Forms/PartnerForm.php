<?php

namespace App\Livewire\Forms;

use App\Models\Partner;
use Livewire\Attributes\Validate;
use Livewire\Form;

class PartnerForm extends Form
{
    public $partner_name;
    public $CR;
    public $city;
    public $status = "";
    public $lat;
    public $lng;
    public $class;

    public function rules()
    {
        return [
            'partner_name' => ['required', 'string', 'max:255'],
            'CR' => ['required', 'numeric'],
            'city' => ['required', 'string', 'in:الرياض,جدة,مكة,أبها'],
            'lat' => ['required', 'numeric'],
            'lng' => ['required', 'numeric'],
            'class' => ['required', 'string', 'in:أ,ب,ج,د'],
        ];
    }

    public function save($user)
    {
        $partner = new Partner();
        $partner->owner_id = $user->id;
        $partner->status = 0;
        $partner->name = $this->partner_name;
        $partner->city = $this->city;
        $partner->lat = $this->lat;
        $partner->lng = $this->lng;
        $partner->class = $this->class;
        $partner->CR = $this->CR;
        $partner->save();
    }
}
