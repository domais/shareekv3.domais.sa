<?php

namespace App\Livewire\Backend\Partner;

use App\Exports\PartnerExcel;
use App\Livewire\Forms\PartnerForm;
use App\Livewire\Forms\UserForm;
use App\Models\Partner;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;

class Index extends Component
{
    use WithFileUploads;

    public UserForm $Uform;
    public PartnerForm $Pform;
    public $ValidationErrors = [];

    public function excelExport()
    {
        return (new PartnerExcel())->download('partners.xlsx');
    }

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


    
    #[On('setCoordinates')] 
    public function setCoordinates($lat, $lng)
    {
       $this->Pform->coordinates = $lat . ',' . $lng;
    }



    public function render()
    {
        return view('livewire.backend.partner.index');
    }
}
