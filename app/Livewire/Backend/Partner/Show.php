<?php

namespace App\Livewire\Backend\Partner;

use App\Livewire\Forms\PartnerForm;
use App\Livewire\Forms\UserForm;
use App\Models\Partner;
use Livewire\Component;
use Livewire\WithFileUploads;

class Show extends Component
{
    use WithFileUploads;
    public Partner $partner;
    public $owner;
    public $events;
    public $permits;
    public $tickets;


    public UserForm $Uform;
    public PartnerForm $Pform;
    public $ValidationErrors = [];

    public function mount()
    {
        $this->owner =  $this->partner->owner;
        $this->events = $this->owner->events->toArray();
        $this->permits = $this->owner->permits->toArray();
        $this->tickets = $this->owner->tickets;

        $this->Uform->setForm($this->partner->owner);
        $this->Pform->setForm($this->partner);

    }

    public function changeStatus($status)
    {
        $this->partner->status = $status;
        $this->partner->save();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }



    public function render()
    {
        return view('livewire.backend.partner.show');
    }
}
