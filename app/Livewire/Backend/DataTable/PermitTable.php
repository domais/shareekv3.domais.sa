<?php

namespace App\Livewire\Backend\DataTable;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Permit;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;


class PermitTable extends DataTableComponent
{

    public function builder(): Builder
    {
        if (auth()->user()->hasRole('SuperAdmin') || auth()->user()->hasRole('Administrator')) {
            return Permit::query()->where(function ($query) {
                $query->where('admin_id', auth()->id())
                      ->orWhereNull('admin_id');
            });
        } elseif (auth()->user()->hasRole('User')) {
            return Permit::query()->where('user_id', auth()->id());
        }
    
        return Permit::query();
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
            Column::make("اسم المستخدم", "user.name")
                ->sortable(),

            Column::make("العنوان", "title")
                ->sortable(),

            Column::make("تاريخ البداية", "start_date")
                    ->format(function($value, $column, $row) {
                        return Carbon::parse($value)->translatedFormat('l، d F Y');
                })
                ->sortable(),
            Column::make("تاريخ النهاية", "end_date")
                ->format(function($value, $column, $row) {
                        return Carbon::parse($value)->translatedFormat('l، d F Y');
                })
                ->sortable(),
        ];
    }
}
