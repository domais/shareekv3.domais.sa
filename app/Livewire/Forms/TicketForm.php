<?php

namespace App\Livewire\Forms;

use App\Models\Ticket;
use Livewire\Attributes\Validate;
use Livewire\Form;

class TicketForm extends Form
{
    
    public $request_type;
    public $permit_number;
    public $subject;
    public $description;
    public $additional_info;
    public $status = 0;

    public function rules()
    {
        return newTicket();

    }

    public function store()
    {
        $ticket = new Ticket();
        $ticket->request_type = $this->request_type;
        $ticket->permit_number = $this->permit_number;
        $ticket->subject = $this->subject;
        $ticket->description = $this->description;
        $ticket->additional_info = $this->additional_info;
        $ticket->status = $this->status;
        $ticket->user_id = auth()->id();
        $ticket->save();

        dd("تمت الإضافة باقي الملفات");

        
    
    }
}
