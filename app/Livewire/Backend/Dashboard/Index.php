<?php

namespace App\Livewire\Backend\Dashboard;

use App\Models\Event;
use App\Models\Partner;
use Livewire\Component;

class Index extends Component
{
    public $event_counter;
    public $chart_one = [];
    public $partners = [];
    public $partners_counter;

    public function mount()
    {
        $this->event_counter = Event::count();

        $this->partners = Partner::with('owner.permits')
        ->whereHas('owner.permits')
        ->take(10)
        ->get();

        $this->partners_counter = Partner::count();
    }
    public function render()
    {
        return view('livewire.backend.dashboard.index');
    }
}
