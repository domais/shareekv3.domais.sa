<?php

namespace App\Livewire\Backend\Dashboard;

use App\Models\Event;
use App\Models\Partner;
use App\Models\Permit;
use Carbon\Carbon;
use Livewire\Component;

class Index extends Component
{
    public $event_counter;
    public $chart_one = [];
    public $partners = [];
    public $partners_counter;
    public $urgent_permits = [];
    public $guests_counter;

    public function mount()
    {
        $this->event_counter = Event::count();

        $this->partners = Partner::with('owner.permits')
        ->whereHas('owner.permits')
        ->take(10)
        ->get();

        $this->partners_counter = Partner::count();

        $this->guests_counter = Event::withCount('guests')->get()->sum('guests_count');

        $this->urgent_permits = Permit::where('status_id', '<=', 5)
        ->where('start_date', '<=', Carbon::now()->addDays(5))
        ->where('start_date', '>=', Carbon::now())
        ->get();
    }
    public function render()
    {
        return view('livewire.backend.dashboard.index');
    }
}
