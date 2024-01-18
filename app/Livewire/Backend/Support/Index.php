<?php

namespace App\Livewire\Backend\Support;

use App\Models\File;
use App\Models\Permit;
use App\Models\Support;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;

class Index extends Component
{
    use WithFileUploads;

    public $requests = [];
    public $initial_approve = [];
    public $rejectd = [];
    public $approved = [];
    public $selected_id = 0;
    public $file;


    public function mount()  {
        $this->requests = Permit::where('need_support', 1)
        ->whereHas('support', function ($query) {
            $query->where('status_id', 11);
            
        })->get();      
        
        
        $this->initial_approve = Permit::where('need_support', 1)
        ->whereHas('support', function ($query) {
            $query->where('status_id', 12);
            
        })->get(); 

        $this->rejectd = Permit::where('need_support', 1)
            ->whereHas('support', function ($query) {
                $query->where('status_id', 15);
            })->get();


        $this->approved = Permit::where('need_support', 1)
        ->whereHas('support', function ($query) {
            $query->where('status_id', 13);
            
        })->get();;
        
    }

    public function selected($id)
    {
        $this->selected_id = $id;
    }

 
    public function save()
    {
        try {
            //code...
            $this->validate([
                'file' => 'required|file|mimes:pdf|max:1024',
            ]);
            
        } catch (ValidationException $th) {
            dd($th->validator->errors()->all());
            return;
        }

            $support = Permit::findorfail($this->selected_id);

            $support->support->update(['status_id' => 13]);

            $path = $this->file->store('files/'.$support->order_number.'/documenting','public');
            $document = new File();
            $document->name = $support->order_number;
            $document->use = 'documenting';
            $document->type = 'pdf';
            $document->path = $path;
            $support->fileable()->save($document);
  

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    #[On('Act_AdminStartStudySupport')] 
    public function Act_AdminStartStudySupport($id,$model)
    {
        $permit = Permit::findorfail($id);
        $permit->support->update(['status_id' => 12]);

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    #[On('Act_AdminStartStudySupportarchive')] 
    public function Act_AdminStartStudySupportarchive($id,$model)
    {
        $permit = Permit::findorfail($id);
        $permit->support->update(['status_id' => 14]);

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }



    #[On('RejectPermit_Dispatch')] 
    public function RejectPermit_Dispatch($id,$model,$reason)
    {
        $permit = Permit::findorfail($id);
        $permit->support->update(['status_id' => 15]);

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }


    public function render()
    {
        return view('livewire.backend.support.index');
    }
}