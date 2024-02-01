<?php

namespace App\Livewire\Backend\Permit;

use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Livewire\Forms\PartnershipForm;
use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
use App\Mail\ChangeStatus;
use App\Models\Draft;
use App\Models\Permit;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;
use Livewire\WithFileUploads;

class Inputs extends Component
{
    use LiveChanges,WithFileUploads;

    public ?Draft $draft = null;
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
    public $text_bread_crumb = 'permit';

    //files

    public function mount()
    {
        $this->permit = Permit::where('order_number', $this->order_number)->first();

        if ($this->draft) {
            $this->form->setForm($this->draft);
            $this->updatedForm();
            if ($this->draft->speakers != null) {
                $this->speakers = json_decode($this->draft->speakers , true);
                $this->partnerships = json_decode($this->draft->partnership , true);
            }
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

        $this->is_show_page = Route::currentRouteName() == 'permit.show';
        if ($this->is_show_page && $this->permit) {
            $this->histories = $this->permit->history()->orderBy('created_at', 'asc')->get();
        }
        // Rahmani: remove isset() && fix this
        if (is_null($this->permit) && isset(auth()->user()->owner)) {
            $this->form->lng = auth()->user()->owner->lng;

          //  dd($this->form->lat,$this->form->lng);
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
                /*
                if ($difference < 3) {
                    $validator = Validator::make([], []); // empty data and rules
                    $validator->errors()->add('start_date', 'يجب أن يكون تاريخ البداية بعد خمسة أيام على الأقل من الآن');
                    throw new ValidationException($validator);
                }
                  
                 later */
               /* if (auth()->user()->hasRole('User') && auth()->user()->owner->points == 0) {
                    $validator = Validator::make([], []); // empty data and rules
                    $validator->errors()->add('points', 'ليس لديك رصيد كافي للدعم اللوجستي');
                    throw new ValidationException($validator);
                }*/
            }
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            return;
        }
        $permitData = $this->form->toArray();

        if ($status == 1) {
            if (empty($this->form->litrary_children_id)  || empty($this->form->title) ) {
                $this->errors[] = "يجب إدخال العنوان و التصنيف الأدبي" ; 
                return;
            }
            $this->saveDraft($permitData, $this->draft,$this->speakers,$this->partnerships);
        }
        else{

            
            try {
                $this->savePermit($permitData, $this->speakers, $this->partnerships, $this->permit);
            } catch (\Exception $e) {
                $this->errors = [$e->getMessage()];
                return;
            }            
        }
        if ($this->draft) {
            session(['draft_to_delete' => $this->draft->id]);
        }

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));

    }


    public function render()
    {
        return view('livewire.backend.permit.inputs');
    }
}
