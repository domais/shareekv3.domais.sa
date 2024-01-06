<?php

namespace App\Livewire\Backend\Ticket;

use App\Livewire\Forms\TicketForm;
use App\Models\Ticket;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Index extends Component
{
    public $tickets = [];
    public $errors = [];
    public TicketForm $form;

    public function mount()
    {
        if (auth()->user()->hasRole('User')) {
           
            $this->tickets = auth()->user()->tickets;

        } else {
            $this->tickets = Ticket::all();
        }
        
    }
    public function store()
    {
        try {
            $this->form->validate();
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            return;
        }

        $this->form->store();
        $this->form->reset();

        
        

    }
    public function render()
    {
        return view('livewire.backend.ticket.index');
    }
}
