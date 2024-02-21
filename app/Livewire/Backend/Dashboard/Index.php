<?php

namespace App\Livewire\Backend\Dashboard;

use App\Models\Event;
use App\Models\Literary;
use App\Models\Partner;
use App\Models\Permit;
use App\Models\Speaker;
use App\Models\Support;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
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
    public $reservation_counter;
    public $reward_counter;
    public $months;
    public $guests_months;
    public $literary_pie;
    public $events_starts_today;
    public $events_maps_locations;
    public $last_chart;

    public function mount()
    {
        $this->event_counter = Event::count();

        $this->events_maps_locations = Event::whereIn('status_id', [5,6])
        ->get()
        ->map(function ($event) {
            return [
                'lat' => $event->lat,
                'lng' => $event->lng,
                'info' => $event->title . ', ' . $event->user->owner->name
            ];
        });

        $user_ids = Permit::select('user_id', DB::raw('count(*) as permits_count'))
        ->groupBy('user_id')
        ->orderBy('permits_count', 'desc')
        ->take(10)
        ->get()
        ->pluck('user_id')
        ->toArray();



        $this->partners = Partner::whereIn('owner_id', $user_ids)->with(['owner.events.guests'])
        ->get()
        ->sortByDesc(function ($partner) {
            return $partner->owner->events->sum(function ($event) {
                return $event->guests->count();
            });
        });


        $this->events_starts_today = Event::whereDate('start_date', Carbon::today())
        ->selectRaw('HOUR(start_date) as hour, count(*) as count')
        ->groupBy('hour')
        ->get()
        ->pluck('count', 'hour')
        ->toArray();
    
        $data = [];
        for ($i = 0; $i < 24; $i++) {
            $data[] = $this->events_starts_today[$i] ?? 0;
        }

        $this->events_starts_today = $data;



        $this->partners_counter = Partner::count();

        $this->guests_counter = Event::withCount('guests')->get()->sum('guests_count');

        $this->urgent_permits = Permit::where('status_id', '<', 5)
        ->where('status_id', '!=', 16)
        ->where('start_date', '<=', Carbon::now()->addDays(5))
        ->where('start_date', '>=', Carbon::now())
        ->get();

        $this->support_counter = Support::count();

        $this->reservation_counter = Speaker::where('reservations', 1)->count();
        $this->reward_counter = Speaker::where('reward', 1)->count();

        $this->literary_pie = Literary::withCount('events')
        ->orderBy('events_count', 'desc')
        ->take(5)
        ->get();

        $literary_monthly_data = Literary::with(['events' => function ($query) {
            $query->select(DB::raw('MONTH(start_date) as month'))
                ->whereYear('start_date', now()->year);
        }])
        ->withCount('events')
        ->orderBy('events_count', 'desc')
        ->take(5)
        ->get()
        ->map(function ($literary) {
            $data = array_fill(0, 12, 0); // Initialize an array with 12 zeros
            foreach ($literary->events as $event) {
                if ($event->month) {
                    $data[$event->month - 1]++;
                }
            }
            return [
                'name' => $literary->name,
                'data' => $data
            ];
        });

        dd($literary_monthly_data);



        for ($i = 0; $i < 6; $i++) {
            $month = now()->subMonths($i);
        
            $count = Event::whereBetween('start_date', [
                $month->startOfMonth(),
                $month->copy()->endOfMonth()->endOfDay()
            ])->count();
        
            $guestsCount = Event::whereBetween('start_date', [
                $month->startOfMonth(),
                $month->copy()->endOfMonth()->endOfDay()
            ])->withCount('guests')->get()->sum('guests_count');
        
            $this->guests_months[] = [
                'month' => __(date('F', mktime(0, 0, 0, $month->month, 10))),
                'guests_count' => $guestsCount
            ];
        
            $this->months[] = [
                'month' => __(date('F', mktime(0, 0, 0, $month->month, 10))), // Translate the month name
                'count' => $count
            ];
        }


    }



    public function render()
    {
        return view('livewire.backend.dashboard.index');
    }
}
