<?php

namespace App\Livewire\Backend\Permit;

use App\Models\Draft;
use App\Models\Permit;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Livewire\Attributes\On;
use Livewire\Component;

class Index extends Component
{
    public $drafts = [];
    public $new_orders = [];
    public $pending = [];
    public $approved = [];
    public $rejected = [];
    public $role = 0;

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
       dd($place,$redirect,$id,$model);
       $permit = Permit::findorfail($id);
       $permit->status_id = 3;
       $permit->admin_id = auth()->id();
       $permit->save();

       AddToHistory($permit->id,$permit->status_id);

       $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => $place]));
    }

    #[On('RejectPermit_Dispatch')] 
    public function RejectPermit($place, $id,$model)
    {
        $permit = Permit::findorfail($id);
        $permit->status_id = 10;
        $permit->save();

        AddToHistory($permit->id,$permit->status_id);


        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => $place]));
    }
    
    #[On('IntialApproved_Dispatch')] 
    public function IntialApproved($place, $id,$model)
    {
        $permit = Permit::findorfail($id);
        $permit->status_id = 4;
        $permit->save();

        AddToHistory($permit->id,$permit->status_id);
        ChangePermitStatus($permit);


        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => $place]));
    }
    

    public function render()
    {
        return view('livewire.backend.permit.index');
    }
}
