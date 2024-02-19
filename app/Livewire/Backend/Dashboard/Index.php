<?php

namespace App\Livewire\Backend\Dashboard;

use App\Models\Event;
use App\Models\Partner;
use App\Models\Permit;
use App\Models\Support;
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
    public $support_counter;
    public $months;

    public function mount()
    {
        $this->event_counter = Event::count();

        $this->partners = Partner::with('owner.permits')
        ->whereHas('owner.permits')
        ->take(10)
        ->get();

        $this->partners_counter = Partner::count();

        $this->guests_counter = Event::withCount('guests')->get()->sum('guests_count');

        $this->urgent_permits = Permit::where('status_id', '<', 5)
        ->where('status_id', '!=', 16)
        ->where('start_date', '<=', Carbon::now()->addDays(5))
        ->where('start_date', '>=', Carbon::now())
        ->get();
        $this->support_counter = Support::count();

        for ($i = 0; $i < 6; $i++) {
            $month = now()->subMonths($i);
        
            $count = Event::whereBetween('start_date', [
                $month->startOfMonth(),
                $month->copy()->endOfMonth()->endOfDay()
            ])->count();
        
            $this->months[] = [
                'month' => __(date('F', mktime(0, 0, 0, $month->month, 10))), // Translate the month name
                'count' => $count
            ];
        }

        dd($this->months);
    }
    public function render()
    {
        return view('livewire.backend.dashboard.index');
    }
}
