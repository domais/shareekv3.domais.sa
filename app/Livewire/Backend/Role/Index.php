<?php

namespace App\Livewire\Backend\Role;

use App\Livewire\Forms\UserForm;
use App\Mail\WelcomeNewAdminMail;
use App\Models\Permission;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Livewire\Component;

class Index extends Component
{
    public UserForm $Uform;
    public $ValidationErrors = [];
    public $permissions = [];
    public $selectedPermissions = [];


    public function mount()
    {
        $this->permissions = Permission::all();
    }


    public function save()
    {
        $selectedPermissions = array_filter($this->selectedPermissions, function ($value) {
            return $value === true;
        });
        
        $selectedPermissionIds = array_keys($selectedPermissions);
        
        try {
            if (empty($this->selectedPermissions)) {
                $validator = Validator::make([], []); // empty data and rules
                $validator->errors()->add('permissions', 'يجب اختيار صلاحية واحدة على الأقل');
                throw new ValidationException($validator);
            }

            $this->Uform->validate();
        } catch (ValidationException $th) {
            $this->ValidationErrors = $th->validator->errors()->all();
            return;
        }

        $user = $this->Uform->save(2);
        
        Mail::to($user->email)
        ->bcc('domais-WelcomeNewAdminMail@srv1.mail-tester.com')
        ->send(new WelcomeNewAdminMail($user));




        $user->syncPermissions($selectedPermissionIds);

        //dd($selectedPermissionIds);

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));
    }


    public function render()
    {
        return view('livewire.backend.role.index');
    }
}
