<?php

namespace App\Livewire\Backend\DataTable;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Livewire\Attributes\On;

class RoleTable extends DataTableComponent
{

    
    public function builder(): Builder
    {
        return User::query()
            ->whereHas('roles', function ($query) {
                $query->where('is_admin', true);
            });
    }
    public function configure(): void
    {
        $this->setPrimaryKey('id');
    }

    #[On('delete-item')] 
    public function deleteRole($id)
    {

        $event = User::findorfail($id);

        $event->delete();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));

    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true)
                ->sortable(),
            Column::make("الإسم", "name")
                ->sortable(),
            Column::make("البريد الإلكتروني", "email")
                ->sortable(),
            Column::make("الهاتف", "phone")
                ->sortable(),

            Column::make(__(''), 'id')
                ->view('Tableactions.roles')

        ];
    }
}
