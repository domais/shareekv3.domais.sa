<?php

namespace App\Livewire\Backend\Event;

use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Index extends Component
{
    public $scheduled = [];
    public $active = [];
    public $completed = [];
    public $Waiting_for_approval = [];

    public function mount()
    {
        
        $events = getEvents(true);
        $this->scheduled = $events['5'];
        $this->active = $events['6'];
        $this->completed = $events['7'];
        $this->Waiting_for_approval = $events['8'];
     
    }
    public function render()
    {
        return view('livewire.backend.event.index');
    }
}
