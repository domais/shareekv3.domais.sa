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
        Auth::loginUsingId(1);
        
        $events = getEvents(true);
        dd($events);
     
    }
    public function render()
    {
        return view('livewire.backend.event.index');
    }
}
