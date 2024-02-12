<?php

namespace App\Livewire\Backend\Permit;

use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Livewire\Forms\PartnershipForm;
use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
use App\Mail\ChangeStatus;
use App\Models\Draft;
use App\Models\Event;
use App\Models\File;
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
    public $permitNumber;
    public $permitFile;
    public $newAdmin = "";
    public $edit_support = false;


    public function changeAdmin()
    {
        if ($this->permit->status_id == 2) {
            # code...
            $this->permit->status_id = 3;
        }
        $this->permit->admin_id = $this->newAdmin;
        $this->permit->save();
        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    //files

    public function change_permit($status_id,$without_number = false)
    {
        if ($without_number == false) {
            $this->permit->status_id = $status_id;
            $this->permit->admin_id = auth()->user()->id;
            $this->permit->save();
        }
        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));
    }

    public function approvePermit()
    {
        try {
            // Validate the input
            $validator = Validator::make([
                'permitNumber' => $this->permitNumber,
                'permitFile' => $this->permitFile,
            ], [
                'permitNumber' => 'required|unique:permits,permit_number',
                'permitFile' => 'required|file|image|mimes:jpeg,png,jpg',
            ]);
            if ($validator->fails()) {
                // Handle validation failure
                throw new \Exception($validator->errors()->first());
            }
    
            // Find the permit
            $permit = $this->permit;
    
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

    public function updatePermit()
    {
        $permitData = $this->form->toArray();
            
            try {
                $this->savePermit($permitData, $this->speakers, $this->partnerships, $this->permit);
            } catch (\Exception $e) {
                $this->errors = [$e->getMessage()];
                return;
            } 

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'inside']));


    }

    public function mount()
    {
        $this->permit = Permit::where('order_number', $this->order_number)->first();

        if ($this->order_number && $this->permit == null) {
            abort(403,'التصريح غير موجود'); 
        }

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
            $this->histories = $this->permit->history()->whereNull('support_id')->orderBy('created_at', 'asc')->get();            
        }
        
        if (is_null($this->permit) && auth()->user()->owner) {
            $this->form->lng = auth()->user()->owner->lng;
            $this->form->lat = auth()->user()->owner->lat;
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

                 /*
                if (auth()->user()->hasRole('User') && auth()->user()->owner->points == 0) {
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

    #[On('IntialApproved_Dispatch')]
    public function IntialApproved($id, $model)
    {
        $permit = Permit::findorfail($id);
        $permit->status_id = 4;
        $permit->save();

        AddToHistory($permit->id, $permit->status_id);

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

    #[On('AssignPermit_Dispatch')]
    public function AssignPermit($place = 'inside', $redirect, $id, $model)
    {
        $permit = Permit::findorfail($id);
        $permit->status_id = 3;
        $permit->admin_id = auth()->id();
        $permit->save();

        AddToHistory($permit->id, $permit->status_id, null, 'تم تحويل التصريح للموظف');

        $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
        ];

        Mail::to([$permit->user->email])
            ->cc('domais-ChangeStatus@srv1.mail-tester.com')
            ->send(new ChangeStatus($data));

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => $place]));
    }

    #[On('RejectPermit_Dispatch')]
    public function RejectPermit($id, $model, $reason)
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
        AddToHistory($permit->id, $permit->status_id, null, $reason);


        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    #[On('Act_ApproveWithoutPirmet')]
    public function Act_ApproveWithoutPirmet($id, $model, $reason)
    {
        $permit = Permit::find($id);
        $permit->status_id = 5;
        $permit->save();

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


        AddToHistory($permit->id, $permit->status_id, null, $reason);

        $data = [
            'permit' => $permit,
            'status' => $permit->status,
            'user' => $permit->user,
        ];

        Mail::to([$permit->user->email])
            ->cc('domais-ChangeStatus@srv1.mail-tester.com')
            ->send(new ChangeStatus($data));

            return redirect(route('event.index'));

    }


    public function render()
    {
        return view('livewire.backend.permit.inputs');
    }
}
