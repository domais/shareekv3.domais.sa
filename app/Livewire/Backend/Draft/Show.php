<?php

namespace App\Livewire\Backend\Draft;

use Livewire\Component;

class Show extends Component
{
    public function mount($order_number)
    {
         $this->redirect(route('permit.create'));
    }
    public function render()
    {
        return view('livewire.backend.draft.show');
    }
}
