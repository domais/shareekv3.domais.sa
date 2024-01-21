<?php

namespace App\Livewire\Backend\Role;

use App\Livewire\Forms\UserForm;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Edit extends Component
{
    public User $user;
    public UserForm $Uform;
    public $permissions = [];
    public $selected_permissions = [];
    public $ValidationErrors = [];

    public function mount()
    {
        // Fetch all available permissions
        $this->permissions = Permission::all();
    
        // Get the IDs of the user's permissions
        $this->selected_permissions = $this->user->permissions->pluck('id')->toArray();

        $this->Uform->setForm($this->user);
    }

    public function save()
    {
        try {
            if (empty($this->selected_permissions)) {
                $validator = Validator::make([], []); // empty data and rules
                $validator->errors()->add('permissions', 'يجب اختيار صلاحية واحدة على الأقل');
                throw new ValidationException($validator);
            }
    
            $this->Uform->update();

            //$this->user->permissions->detach();
    
            // Remove the old permissions and sync the new permissions
            $this->user->permissions()->sync($this->selected_permissions);

        } catch (ValidationException $th) {
            $this->ValidationErrors = $th->validator->errors()->all();
            return;
        }
    
        // Redirect to administrator.index
        return redirect()->route('adminstrator.index');
    }



    public function render()
    {
        return view('livewire.backend.role.edit');
    }
}
