<?php

namespace App\Livewire\Backend\Event;

use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Livewire\Forms\PartnershipForm;
use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
use App\Models\Event;
use App\Models\Permit;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\On;
use Livewire\Component;
use ZipArchive;

class Show extends Component
{
    use LiveChanges;

    public ?Permit $permit = null;
    public $order_number;
    public PermitForm $form;
    public SpeakerForm  $speakerForm;
    public PartnershipForm  $partnershipForm;

    public $errors = [];
    public $speakers = [];
    public $partnerships = [];
    public $Litrary_childes = [];
    public $is_show_page = false;
    public $histories =  [];
    public $selectedSpeakers = [];
    public $text_bread_crumb = 'event';
    public $newAdmin = "";
    public $edit_support = false;




    //files

    public function changeAdmin()
    {
        $this->permit->admin_id = $this->newAdmin;
        $this->permit->save();
        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    public function mount()
    {   
        $this->permit = Permit::where('order_number', $this->order_number)->first();

        if ($this->order_number && $this->permit == null) {
            abort(403,'التصريح غير موجود'); 
        }

        
        if ($this->permit) {
            $this->form->setForm($this->permit);
            $this->updatedForm();
            if (!empty($this->permit->speakers)) {
                $this->speakers = $this->permit->speakers->toArray();
            
                foreach ($this->speakers as &$speaker) {
                    $speaker['reservations'] = $speaker['reservations'] == 1 ? true : false;
                    $speaker['reward'] = $speaker['reward'] == 1 ? true : false;
                }
            }
            if (!empty($this->permit->partnerships)) {
                $this->partnerships = $this->permit->partnerships->toArray();
            }
        }   

        $this->is_show_page = true;

        if ($this->is_show_page && $this->permit) {
            $this->histories = $this->permit->history()->whereNull('support_id')->orderBy('created_at', 'asc')->get();            
        }
        if (is_null($this->permit)) {
            $this->form->lat = auth()->user()->owner->lat;
            $this->form->lng = auth()->user()->owner->lng;
        }
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

        if($links == [""] || $links == null)     $links = [];
            

        // Dispatch the event with only the event name and the images paths
        $this->dispatch('show-images', ['event' => $event->title, 'images' => $images,'links' => $links]);
    }

    #[On('downloadImages')] 
    public function downloadImages()
    {
        $zipName = $this->permit->permit_number . '.zip';
        $folderPath = 'files/' . $this->permit->permit_number . '/documenting';
        $tempPath = storage_path('app/public/temp/' . $this->permit->permit_number);

        // Check if the directory exists on 'do' disk
        if (!Storage::disk('do')->exists($folderPath)) {
            // If not, check if the directory exists on local disk
            if (!Storage::disk('local')->exists($folderPath)) {
                dd('Directory does not exist.');
                return response()->json(['error' => 'Directory does not exist.']);
            } else {
                // If it exists on local disk, use local disk
                $disk = Storage::disk('local');
            }
        } else {
            // If it exists on 'do' disk, use 'do' disk
            $disk = Storage::disk('do');
        }

        // Create a temporary local directory
        if (!file_exists($tempPath)) {
            mkdir($tempPath, 0777, true);
        }

        // Download all files to the temporary local directory
        $files = $disk->files($folderPath);
        foreach ($files as $file) {
            $fileContents = $disk->get($file);
            file_put_contents($tempPath . '/' . basename($file), $fileContents);
        }

        // Create a new zip archive
        $zip = new ZipArchive();
        if ($zip->open($tempPath . '/' . $zipName, ZipArchive::CREATE) === TRUE)
        {
            // Add all files in the temporary local directory to the zip archive
            foreach (glob($tempPath . '/*') as $filePath) {
                if (is_file($filePath)) {
                    $zip->addFile($filePath, basename($filePath));
                }
            }
            $zip->close();

            // Download the zip file from the temporary local directory
            return response()->download($tempPath . '/' . $zipName)->deleteFileAfterSend(true);
        }
    }

   
    
    public function render()
    {
        return view('livewire.backend.permit.inputs');
    }
}
