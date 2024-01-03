<?php

namespace App\Livewire\Backend\Permit;

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

    public function mount()
    {
        $permits = getEvents();
        
        $this->drafts = $permits[1];  

        $this->new_orders = $permits[2];

        $this->rejected = $permits[10];

        $this->pending = $permits[3];

        $this->approved = $permits[4];   
    }

    #[On('DeletePermit_Dispatch')] 
    public function deletePermit($place, $id)
    {
        $permit = Permit::findOrfail($id);
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
         }
         $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => $place]));
    }
    

    public function render()
    {
        return view('livewire.backend.permit.index');
    }
}
