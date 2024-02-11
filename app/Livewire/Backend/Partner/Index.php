<?php

namespace App\Livewire\Backend\Partner;

use App\Exports\PartnerExcel;
use App\Livewire\Forms\PartnerForm;
use App\Livewire\Forms\UserForm;
use App\Mail\WelcomeNewAdminMail;
use App\Models\Partner;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;
use Maatwebsite\Excel\Facades\Excel;

class Index extends Component
{
    use WithFileUploads;

    public UserForm $Uform;
    public PartnerForm $Pform;
    public $ValidationErrors = [];

    public function excelExport()
    {
        return Excel::download(new PartnerExcel(), 'partners.xlsx');
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
    
        Mail::to($user->email,'domais-WelcomeNewAdminMail@srv1.mail-tester.com')->send(new WelcomeNewAdminMail($user));
    

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
