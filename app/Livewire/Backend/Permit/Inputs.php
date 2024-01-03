<?php

namespace App\Livewire\Backend\Permit;

use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Inputs extends Component
{
    public PermitForm $form;
    public SpeakerForm  $speakerForm;
    public $errors = [];
    public $speakers = [];

    public $Litrary_childes = [];

    public function updatedForm()
    {
        if ($this->form->literary_id) {
           $this->Litrary_childes =  getChildes($this->form->literary_id);
        }
    }

    public function addSpeaker()
    {
        try {
            $this->speakerForm->validate();
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            return;
        }
        $this->speakers[] = $this->speakerForm->toArray();

        $this->speakerForm->reset();
        
    }

    public function deleteSpeaker($index)
    {
        unset($this->speakers[$index]);
    }

    public function render()
    {
        return view('livewire.backend.permit.inputs');
    }
}
