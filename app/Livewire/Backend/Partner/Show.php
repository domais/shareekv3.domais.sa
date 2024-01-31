<?php

namespace App\Livewire\Backend\Partner;

use App\Livewire\Forms\PartnerForm;
use App\Livewire\Forms\UserForm;
use App\Mail\WelcomeNewAdminMail;
use App\Models\Partner;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;

class Show extends Component
{
    use WithFileUploads;
    public Partner $partner;
    public $owner;



    public UserForm $Uform;
    public PartnerForm $Pform;
    public $ValidationErrors = [];

    public function mount()
    {
        $this->owner =  $this->partner->owner;


        $this->Uform->setForm($this->partner->owner);
        $this->Pform->setForm($this->partner);

    }

    public function changeStatus($status)
    {
        $this->partner->status = $status;
        $this->partner->save();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    public function save()
    {
        try {
            $user = $this->Uform->update();
            $this->Pform->update();
          
        } catch (ValidationException $th) {
            $this->ValidationErrors = $th->validator->errors()->all();
            return;
        }
        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    #[On('setCoordinates')] 
    public function setCoordinates($lat, $lng)
    {
       $this->Pform->coordinates = $lat . ',' . $lng;
    }

    public function senddata()
    {
        $user = $this->owner; // Assuming $this->owner contains the user data
    
        Mail::to($user->email)->send(new WelcomeNewAdminMail($user));
    
        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }






    public function render()
    {
        return view('livewire.backend.partner.show');
    }
}
