<?php

namespace App\Livewire\Backend\Permit\Traits;

use App\Models\Draft;
use Illuminate\Validation\ValidationException;
use Livewire\Attributes\On;

trait LiveChanges
{
    
    public function updatedForm()
    {
        if ($this->form->literary_id) {
           $this->Litrary_childes =  getChildes($this->form->literary_id);
        }
    }

    public function addSpeaker()
    {
        try {
            $this->speakerForm->validate();
        } catch (ValidationException $th) {
            $this->errors = $th->validator->errors()->all();
            return;
        }
        $this->speakers[] = $this->speakerForm->toArray();

        $this->speakerForm->reset(); 
    }

    public function deleteSpeaker($index)
    {
        unset($this->speakers[$index]);
    }
    
    #[On('editorUpdated')] 
    public function editorUpdated($data)
    {
        $this->form->description = $data;
    }

    #[On('updateLocation')] 
    public function updateLocation($lat,$lng)
    {
        $this->form->lat = $lat;
        $this->form->lng = $lng;
    }

    public function saveDraft($permitData, $draft = null)
    {
        $permitData = array_map(function($value) {
            return $value === "" ? null : $value;
        }, $permitData);
        $permitData['speakers'] = json_encode($this->speakers);
        $permitData['literary_id'] =  $permitData['litrary_children_id'];
    
        if ($draft === null) {
            $draft = Draft::create($permitData);
            $draft->order_number = date('y').str_pad($draft->id, 5, '0', STR_PAD_LEFT);
        } else {
            $draft->order_number = $draft->order_number;

            $draft->update($permitData);
        }
    
        $draft->save();
    }
}