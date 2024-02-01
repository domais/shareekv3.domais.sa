<?php

namespace App\Livewire\Backend\Support;

use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Livewire\Forms\PartnershipForm;
use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
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
    public $text_bread_crumb = 'support';


    //files

    public function mount()
    {   
        $this->permit = Permit::where('order_number', $this->order_number)->first();
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
            $this->histories = $this->permit->history()->orderBy('created_at', 'asc')->get();
            
        }
        if (is_null($this->permit)) {
            $this->form->lat = auth()->user()->owner->lat;
            $this->form->lng = auth()->user()->owner->lng;
        }
    }   
    
    public function render()
    {
        return view('livewire.backend.permit.inputs');
    }
}