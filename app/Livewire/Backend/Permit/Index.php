<?php

namespace App\Livewire\Backend\Permit;

use App\Mail\ChangeStatus;
use App\Models\Draft;
use App\Models\Event;
use App\Models\File;
use App\Models\Permit;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;

class Index extends Component
{
    use WithFileUploads;

    public $drafts = [];
    public $new_orders = [];
    public $pending = [];
    public $approved = [];
    public $rejected = [];
    public $errors = [];
    public $role = 0;
    public $selected_id = 0;
    public $permitNumber;
    public $permitFile;

    public function mount()
    {
        deleteDraft();

        $permits = getEvents();

        $this->drafts = $permits[1] ?? [];  

        $this->new_orders = $permits[2];
        $this->rejected = $permits[10];
        $this->pending = $permits[3];
        $this->approved = $permits[4]; 

        $user = auth()->user();
        
        if ($user->hasRole('User')) {
            $this->pending = $this->new_orders->concat($this->pending);
            $this->role = 2;
        }
    }

    public function selected($id)
    {
        $this->selected_id = $id;
    }
    

    public function approvePermit()
    {
        try {
            // Validate the input
            $validator = Validator::make([
                'selected_id' => $this->selected_id,
                'permitNumber' => $this->permitNumber,
                'permitFile' => $this->permitFile,
            ], [
                'selected_id' => 'required|exists:permits,id',
                'permitNumber' => 'required|unique:permits,permit_number',
                'permitFile' => 'required|file|image|mimes:jpeg,png,jpg',
            ]);
            if ($validator->fails()) {
                // Handle validation failure
                throw new \Exception($validator->errors()->first());
            }
    
            // Find the permit
            $permit = Permit::find($this->selected_id);
    
            // Update the permit number
            $permit->permit_number = $this->permitNumber;
            $permit->status_id = 5;
            $permit->save();
    
            // Store the file
            $path = $this->permitFile->store('files/'.$permit->order_number.'/permit_file','public');
            // Create a new file record
            $approval_file = new File();
            $approval_file->name = $permit->order_number;
            $approval_file->use = 'permit_file';
            $approval_file->type = 'pdf';
            $approval_file->path = $path;

            $permit->fileable()->save($approval_file);
        } catch (\Exception $e) {
            // Handle the exception
            $this->errors[] = $e->getMessage();
            return;
        }


        $event = Event::create($permit->toArray());

        $speakers = $permit->speakers;
        $partnerships = $permit->partnerships;

        foreach ($speakers as $speaker) {
            $speaker->event_id = $event->id;
            $speaker->save();
        }

        foreach ($partnerships as $partnership) {
            $partnership->event_id = $event->id;
            $partnership->save();
        }

        AddToHistory($permit->id,$permit->status_id);

        $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
        ];

        Mail::to([$permit->user->email])
            ->cc('domais-ChangeStatus@srv1.mail-tester.com')
            ->send(new ChangeStatus($data));
        
        $this->redirect(route('event.index'));
    }

    #[On('Act_ApproveWithoutPirmet')] 
    public function Act_ApproveWithoutPirmet($id, $model, $reason)
    {
        $permit = Permit::find($id);
        $permit->status_id = 5;
        $permit->save();

        Event::create($permit->toArray());

        
        AddToHistory($permit->id,$permit->status_id,null,$reason);

        $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
        ];

        Mail::to([$permit->user->email])
            ->cc('domais-ChangeStatus@srv1.mail-tester.com')
            ->send(new ChangeStatus($data));

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));
    }

    #[On('DeletePermit_Dispatch')] 
    public function deletePermit($place, $id,$model)
    {
        if ($model == 'AppModelsPermit') {
            $permit = Permit::findOrfail($id);        
        }
        else {
            $permit = Draft::findOrfail($id);        
        }
        $statusId = $permit->status_id;
        $permit->delete();

        if ($statusId == 1) {
            $this->drafts = collect($this->drafts)->filter(function ($value, $key) use ($id) {
                return $value->id != $id;
            });
        }  
        else {
            $this->rejected = collect($this->rejected)->filter(function ($value, $key) use ($id) {
                return $value->id != $id;
            });   
            AddToHistory($permit->id,$statusId);
    
         }
         $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => $place]));
    }

    #[On('AssignPermit_Dispatch')] 
    public function AssignPermit($place,$redirect ,$id,$model)
    {
       $permit = Permit::findorfail($id);
       $permit->status_id = 3;
       $permit->admin_id = auth()->id();
    //    dd($permit->support);
       $permit->save();

       AddToHistory($permit->id,$permit->status_id);

       $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
        ];

        Mail::to([$permit->user->email])
            ->cc('domais-ChangeStatus@srv1.mail-tester.com')
            ->send(new ChangeStatus($data));

       //ChangePermitStatus($permit);


       $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => $place]));
    }

    #[On('RejectPermit_Dispatch')] 
    public function RejectPermit($id,$model,$reason)
    {
        
        $permit = Permit::findorfail($id);
        $permit->status_id = 10;
        $permit->save();

        $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
        ];

        Mail::to([$permit->user->email])
            ->cc('domais-ChangeStatus@srv1.mail-tester.com')
            ->send(new ChangeStatus($data));
        AddToHistory($permit->id,$permit->status_id,null,$reason);


        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));
    }
    
    #[On('IntialApproved_Dispatch')] 
    public function IntialApproved($id,$model)
    {
        $permit = Permit::findorfail($id);
        $permit->status_id = 4;
        $permit->save();

        AddToHistory($permit->id,$permit->status_id);

        $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
        ];

   Mail::to([$permit->user->email])
    ->cc('domais-ChangeStatus@srv1.mail-tester.com')
    ->send(new ChangeStatus($data));


        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));
    }
    

    public function render()
    {
        return view('livewire.backend.permit.index');
    }
}
