<?php

namespace App\Livewire\Forms;

use App\Models\File;
use App\Models\Ticket;
use Illuminate\Support\Facades\Storage;
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
    public $files = [];

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

        foreach ($this->files as $key => $file) {
            # code...
            $path = $file->store('files/'.$ticket->id.'/tickets','digitalocean');
            // Create a new file record
            $approval_file = new File();
            $approval_file->name = $this->request_type;
            $approval_file->use = 'documenting';
            $approval_file->type = 'pdf';
            $approval_file->path = $path;

            $ticket->fileable()->save($approval_file);

            $docUrl = Storage::disk('digitalocean')->url($path);

        }

       

       // dd($docUrl);
        
    
    }
}
