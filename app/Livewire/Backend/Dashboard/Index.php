<?php

namespace App\Livewire\Backend\Dashboard;

use App\Models\Event;
use Livewire\Component;

class Index extends Component
{
    public $event_counter;
    public $chart_one = [];
    public function mount()
    {
        $this->event_counter = Event::count();
        
    }
    public function render()
    {
        return view('livewire.backend.dashboard.index');
    }
}
