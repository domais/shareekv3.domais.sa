<?php

namespace App\Livewire\Backend\DataTable;

use App\Models\Permit;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Support;
use Illuminate\Database\Eloquent\Builder;


class SupportTable extends DataTableComponent
{
    public function builder(): Builder
    {
        if (auth()->user()->hasRole('SuperAdmin')){
            return Permit::query()->whereHas('support');
        }
        if (auth()->user()->hasRole('Administrator')) {
            return  Permit::query()->where(function ($query) {
                $query->where('admin_id', auth()->id())
                      ->orWhereNull('admin_id');
            })->whereHas('support');
        } elseif (auth()->user()->hasRole('User')) {
            return Permit::query()->where('user_id', auth()->id())->whereHas('support');
        }
        return Permit::query()->whereHas('support');
    }
    public function configure(): void
    {
        $this->setPrimaryKey('id');
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true)
                ->sortable(),
            Column::make("رقم التصريح", "order_number")
                ->sortable(),
            Column::make("الحالة", "status.name")
                ->sortable(),
        ];
    }
}
