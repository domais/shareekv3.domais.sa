<?php

namespace App\Livewire\Backend\Event;

use App\Models\Event;
use App\Models\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;

class Index extends Component
{
    use WithFileUploads;

    public $scheduled = [];
    public $active = [];
    public $completed = [];
    public $Waiting_for_approval = [];
    public $selected_id = 0;
    public $photos  = [];
    public $links = [];


    public function selected($id)
    {
        $this->selected_id = $id;
    }

    #[On('Act_AdminApprove')] 
    public function Act_AdminApprove($id,$model)
    {
        $event = Event::findorfail($id);

        $event->status_id = 9;
        $event->save();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));


    }


    #[On('saveEventImages')] 
    public function saveEventImages()
    {
        try {
            //code...
            $this->validate([
                'photos.*' => 'required|image',
                'links.*' => 'required|url',
            ]);
            
        } catch (ValidationException $th) {
            dd($th->validator->errors()->all());
            return;
        }

        $event = Event::findorfail($this->selected_id);

        $event->links = json_encode($this->links);
        $event->status_id = 8;
        $event->save();

      
        foreach ($this->photos as $photo) {

            $path = $photo->store('files/'.$event->order_number.'/documenting','public');
            $document = new File();
            $document->name = $event->order_number;
            $document->use = 'documenting';
            $document->type = 'image';
            $document->path = $path;
            $event->fileable()->save($document);
        }

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));
    }

    

    public function save()
    {
        dd($this->photos, $this->selected_id);
    }


    public function mount()
    {
        
        $events = getEvents(true);
        $this->scheduled = $events['5'];
        $this->active = $events['6'];
        $this->completed = $events['7'];
        $this->Waiting_for_approval = $events['8'];
     
    }
    public function render()
    {
        return view('livewire.backend.event.index');
    }
}
