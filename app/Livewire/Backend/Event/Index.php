<?php

namespace App\Livewire\Backend\Event;

use App\Models\Event;
use App\Models\File;
use App\Models\History;
use App\Models\Permit;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;
use ZipArchive;

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
    public $permit_number;
    public $selected_event;
    public $attendance;
    public $number_files = 0;


    public function selected($id)
    {
        $this->selected_id = $id;

        $this->selected_event = Event::findorfail($this->selected_id)->toArray();

     //   dd($this->selected_event->toArray());
    }

    #[On('show_images_urls')] 
    public function show_images_urls($id,$model)
    {
        $event = Event::findorfail($id);

        $this->permit_number = $event->order_number;


    
        // Get only the paths from images
        $images = array_map(function ($image) {
            return $image['path'];
        }, $event->fileable->toArray());

        $links = json_decode($event->links, true);

        if($links == [""] || $links == null)     $links = [];
            

  

    
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

    #[On('downloadImages')] 
    public function downloadImages()
    {
        $zipName = $this->permit_number . '.zip';
        $folderPath = Storage::disk('public')->path('files/' . $this->permit_number . '/documenting');
    
        // Check if the directory exists
        if (!is_dir($folderPath)) {
            dd('Directory does not exist.');
            return response()->json(['error' => 'Directory does not exist.']);
        }
    
        $zip = new ZipArchive();
    
        if ($zip->open(public_path($zipName), ZipArchive::CREATE) === TRUE)
        {
            foreach (glob($folderPath . '/*') as $filePath)
            {
                $relativePath = basename($filePath);
                $zip->addFile($filePath, $relativePath);
            }
            $zip->close();
        }
    
        return response()->download(public_path($zipName))->deleteFileAfterSend(true);
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
        $event->attendance = $this->attendance ? $this->attendance : 0;
        $event->save();

        $permit = Permit::where('order_number', $event->order_number)->first();

        AddToHistory($permit->id,7);

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
       // dd(count($this->photos));
        
        $events = getEvents(true);
        $this->scheduled = $events['5'];
        $this->active = $events['6'];
        $this->completed = $events['7'];
        $this->Waiting_for_approval = $events['8'];
     
    }

    #[On('switchChange')] 
    public function switchChange($id)
    {
        $event = Event::where('order_number',$id)->first();

        $event->allow_booking = !$event->allow_booking;

        $event->save();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));


    }
    public function render()
    {
        return view('livewire.backend.event.index');
    }
}
