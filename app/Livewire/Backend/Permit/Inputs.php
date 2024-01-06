<?php

namespace App\Livewire\Backend\Permit;

use App\Livewire\Backend\Permit\Traits\LiveChanges;
use App\Livewire\Forms\PermitForm;
use App\Livewire\Forms\SpeakerForm;
use App\Models\Draft;
use App\Models\Permit;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;
use Livewire\Component;

class Inputs extends Component
{
    use LiveChanges;

    public ?Draft $draft = null;
    public ?Permit $permit = null;

    public PermitForm $form;
    public SpeakerForm  $speakerForm;
    public $errors = [];
    public $speakers = [];
    public $Litrary_childes = [];
    public $is_show_page = false;
    public $histories =  [];

    public function mount()
    {
        if ($this->draft) {
            $this->form->setForm($this->draft);
            $this->updatedForm();
            if ($this->draft->speakers != null) {
                $this->speakers = json_decode($this->draft->speakers , true);
            }
        }   
        
        if ($this->permit) {
            $this->form->setForm($this->permit);
            $this->updatedForm();
            if (!empty($this->permit->speakers)) {
                $this->speakers = $this->permit->speakers->toArray();
            }
         
        }   

        $this->is_show_page = Route::currentRouteName() == 'permit.show';

        if ($this->is_show_page && $this->permit) {
            $this->histories = $this->permit->history()->orderBy('created_at', 'Desc')->get();
        }
    }   

    public function store($status)
    {
        $this->form->user_id = auth()->user()->id;

        try {
            $this->form->store($status);
            if ($status == 2 && empty($this->speakers)) {
                $this->errors[] = "يجب إضافة متحدث واحد على الأقل" ;
                return;
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
            $this->saveDraft($permitData, $this->draft,$this->speakers);
        }
        else{
            
            $this->savePermit($permitData, $this->speakers,$this->permit);
            
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
