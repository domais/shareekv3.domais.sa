<?php

namespace App\Livewire\Backend\Partner;

use App\Livewire\Forms\PartnerForm;
use App\Livewire\Forms\UserForm;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Index extends Component
{
    public UserForm $Uform;
    public PartnerForm $Pform;
    public $ValidationErrors = [];

    public function save()
    {
        try {
            $this->Uform->validate();
            $this->Pform->validate();
        
        } catch (ValidationException $th) {
            $this->ValidationErrors = $th->validator->errors()->all();
            return;
        }

        $user = $this->Uform->save();

        $this->Pform->save($user);

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));

        
    }



    public function render()
    {
        return view('livewire.backend.partner.index');
    }
}
