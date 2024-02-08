<?php

namespace App\Livewire\Backend\Support;

use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Livewire\Forms\PartnershipForm;
use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
use App\Models\Permit;
use Illuminate\Support\Facades\Route;
use Livewire\Component;

class Inputs extends Component
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
    public $edit_support = true;


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

        $this->is_show_page = Route::currentRouteName() == 'support.show';
        if ($this->is_show_page && $this->permit) {
            $this->histories = $this->permit->history()->whereNull('support_id')->orderBy('created_at', 'asc')->get();            
        }
        // Rahmani: remove isset() && fix this
        if (is_null($this->permit) && isset(auth()->user()->owner)) {
            $this->form->lng = auth()->user()->owner->lng;

          //  dd($this->form->lat,$this->form->lng);
        }
    }   

    public function store()
    {

        $permitData = $this->form->toArray();
        try {
            unset($permitData['status_id']);
            $permitData['user_id'] = auth()->id();
            $this->savePermit($permitData, $this->speakers, $this->partnerships, $this->permit,null,true);
        } catch (\Exception $e) {
            $this->errors = [$e->getMessage()];
            return;
        }    

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));

    }
    
    public function render()
    {
        return view('livewire.backend.support.inputs');
    }
}
