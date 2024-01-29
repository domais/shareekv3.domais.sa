<?php

namespace App\Livewire\Forms;

use Livewire\Attributes\Validate;
use Livewire\Form;

class PartnershipForm extends Form
{
    public $name;
    public $type = "";
    public $description;

    public function rules()
    {
        return newPartnership();
    }
    
}
