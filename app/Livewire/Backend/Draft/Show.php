<?php

namespace App\Livewire\Backend\Draft;

use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Livewire\Forms\PartnershipForm;
use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
use App\Models\Draft;
use App\Models\Permit;
use Carbon\Carbon;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Show extends Component
{
    use LiveChanges;

    public ?Draft $permit = null;
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

    public function store($status)
    {
       
        $this->form->user_id = auth()->user()->id;

        try {
            $this->form->store($status);
            if ($status == 2 && empty($this->speakers) && $this->form->event_type_id == 1) {
                $this->errors[] = "يجب إضافة متحدث واحد على الأقل" ;
                return;
            }
         
            if ($status == 2) {
                $startDate = Carbon::parse($this->form->start_date);
                $now = Carbon::now();
                $difference = $now->diffInDays($startDate, false);

            }
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            return;
        }
        $permitData = $this->form->toArray();

            try {
                $this->savePermit($permitData, $this->speakers, $this->partnerships, $this->permit);
            } catch (\Exception $e) {
                $this->errors = [$e->getMessage()];
                return;
            }            
        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));

    }
    
    public function render()
    {
        return view('livewire.backend.permit.inputs');
    }
}
