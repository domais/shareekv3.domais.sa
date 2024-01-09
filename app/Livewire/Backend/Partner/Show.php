<?php

namespace App\Livewire\Backend\Partner;

use App\Models\Partner;
use Livewire\Component;

class Show extends Component
{
    public Partner $partner;
    public $owner;
    public $events;
    public $permits;
    public $tickets;

    public function mount()
    {
        $this->owner =  $this->partner->owner;
        $this->events = $this->owner->events->toArray();
        $this->permits = $this->owner->permits->toArray();
        $this->tickets = $this->owner->tickets;
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
