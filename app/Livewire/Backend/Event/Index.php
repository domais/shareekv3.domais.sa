<?php

namespace App\Livewire\Backend\Event;

use App\Models\Event;
use App\Models\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
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
    public $ValidationErrors = [];


    public function selected($id)
    {
        $this->selected_id = $id;
    }

    #[On('show_images_urls')] 
    public function show_images_urls($id,$model)
    {
        $event = Event::findorfail($id);
    
        // Get only the paths from images
        $images = array_map(function ($image) {
            return $image['path'];
        }, $event->fileable->toArray());

        $links = json_decode($event->links, true);

    
        // Dispatch the event with only the event name and the images paths
        $this->dispatch('show-images', ['event' => $event->title, 'images' => $images,'links' => $links]);
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
      //  dd($this->photos, $this->links, $this->selected_id);
        try {
            if (empty($this->photos) && (empty($this->links) || count(array_filter($this->links)) == 0)) {
                // Both photos and links are empty
                $validator = Validator::make([], []); // empty data and rules
                $validator->errors()->add('photos', 'الصور مطلوبة');
                $validator->errors()->add('links', 'الروابط مطلوبة');
                throw new ValidationException($validator);
            } else {
                // At least one of photos or links exists
                if (!empty($this->photos)) {
                    // Photos exist, validate them
                    $this->validate([
                        'photos.*' => 'required|image',
                    ]);
                }
                if (!empty($this->links) && count(array_filter($this->links)) > 0) {
                    // Links exist and are not empty, validate them
                    $this->validate([
                        'links.*' => 'required|url',
                    ]);
                }
            }
            
        } catch (ValidationException $th) {
            $this->ValidationErrors = $th->validator->errors()->all();
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
