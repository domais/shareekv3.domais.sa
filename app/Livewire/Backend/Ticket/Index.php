<?php

namespace App\Livewire\Backend\Ticket;

use App\Livewire\Forms\TicketForm;
use App\Models\Ticket;
use Illuminate\Validation\ValidationException;
use Livewire\Component;
use Livewire\WithFileUploads;

class Index extends Component
{
    use WithFileUploads;

    public $tickets = [];
    public $errors = [];
    public $user;
    public TicketForm $form;

    public function mount()
    {
        $this->user = auth()->user();
        if ($this->user->hasRole('User')) {
            $this->tickets = $this->user->tickets->toArray();
        } else {
            $this->tickets = Ticket::with('user')->get()->toArray();
        }
        
    }
    public function save()
    {
        try {
            $this->form->validate();
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            return;
        }

        $this->form->store();
        $this->form->reset();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));

        
        

    }
    public function render()
    {
        return view('livewire.backend.ticket.index');
    }
}
