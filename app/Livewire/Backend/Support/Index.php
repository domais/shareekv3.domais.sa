<?php

namespace App\Livewire\Backend\Support;

use Livewire\Component;

class Index extends Component
{
    public $requests = [];
    public $initial_approve = [];
    public $rejectd = [];
    public $approved = [];

    public function render()
    {
        return view('livewire.backend.support.index');
    }
}
