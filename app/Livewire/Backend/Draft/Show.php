<?php

namespace App\Livewire\Backend\Draft;

use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Livewire\Forms\PartnershipForm;
use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
use App\Models\Draft;
use App\Models\Permit;
use Livewire\Component;

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
        $this->permit = Draft::where('order_number', $this->order_number)->first();

        if ($this->order_number && $this->permit == null) {
            abort(403,'التصريح غير موجود'); 
        }

        
        if ($this->permit) {
            $this->form->setFormDraft($this->permit);
        }   

    }   
    
    public function render()
    {
        return view('livewire.backend.permit.inputs');
    }
}
