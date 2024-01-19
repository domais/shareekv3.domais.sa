<?php

namespace App\Livewire\Backend\Role;

use App\Livewire\Forms\UserForm;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Index extends Component
{
    public UserForm $Uform;
    public $ValidationErrors = [];


    public function save()
    {
        try {
            $this->Uform->validate();
        } catch (ValidationException $th) {
            $this->ValidationErrors = $th->validator->errors()->all();
            return;
        }

        $user = $this->Uform->save(2);

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }


    public function render()
    {
        return view('livewire.backend.role.index');
    }
}
