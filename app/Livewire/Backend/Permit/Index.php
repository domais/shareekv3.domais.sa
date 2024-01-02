<?php

namespace App\Livewire\Backend\Permit;

use App\Models\Permit;
use App\Models\User;
use Livewire\Component;

class Index extends Component
{
    public $drafts = [];
    public $pending = [];
    public $approved = [];
    public $rejected = [];

    public function mount()
    {
        /*
         this code only before login system
        */

         $this->drafts = Permit::where('status_id', 1)->get();
 
        

    }
    public function render()
    {
        return view('livewire.backend.permit.index');
    }
}
