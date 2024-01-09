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
    public $data;

    public function mount()
    {
        $this->owner =  $this->partner->owner;
        $this->events = $this->owner->events->toArray();
        $this->permits = $this->owner->permits->toArray();
        $this->data = collect(array_merge($this->events, $this->permits))->sortByDesc('created_at');
        $this->tickets = $this->owner->tickets;

    }



    public function render()
    {
        return view('livewire.backend.partner.show');
    }
}
