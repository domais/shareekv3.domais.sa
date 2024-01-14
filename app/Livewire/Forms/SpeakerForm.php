<?php

namespace App\Livewire\Forms;

use Livewire\Attributes\Validate;
use Livewire\Form;

class SpeakerForm extends Form
{
    public $name;
    public $phone;
    public $email;
    public $nationality;
    public $type = "";
    public $twitter;
    public $instagram;
    public $linkedin;
    public $reservations = false;
    public $reward = false;

    public function rules()
    {
        return newSpeaker();
    }
    
}
