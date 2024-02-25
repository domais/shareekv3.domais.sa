<?php

namespace App\Livewire\Backend\Draft;

use App\Models\Draft;
use Livewire\Component;

class Show extends Component
{
    public function mount($order_number)
    {
        $draft = Draft::where('order_number', $order_number)->first();
        session()->put('draft', $draft);
         $this->redirect(route('permit.create'));
    }
    public function render()
    {
        return view('livewire.backend.draft.show');
    }
}
