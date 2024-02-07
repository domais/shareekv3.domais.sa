<?php

namespace App\Livewire\Backend\DataTable;

use App\Models\Permit;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Support;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class SupportTable extends DataTableComponent
{

public function builder(): Builder
{
    if (auth()->user()->hasRole('SuperAdmin')){
        return Permit::withTrashed()->whereHas('support');
    }
    if (auth()->user()->hasRole('Administrator')) {
        return  Permit::withTrashed()->where(function ($query) {
            $query->where('permits.admin_id', auth()->id())
                  ->orWhereNull('permits.admin_id');
        })->whereHas('support');
    } elseif (auth()->user()->hasRole('User')) {
        return Permit::withTrashed()->where('permits.user_id', auth()->id())->whereHas('support');
    }
    return Permit::withTrashed()->whereHas('support');
}
    public function filters(): array
    {
        return [
            
    
            SelectFilter::make(__('حالة التصريح'))
            ->options([
                '' => 'الكل',
                '11' => 'طلب دعم جديد',
                '12' => 'تحت الدراسة',
                '13' => 'تمت الموافقة',
                '14' => 'مؤرشف',
                '16' => 'محذوف',
            ])
            ->filter(function(Builder $builder, string $value) {
                $builder->whereHas('support', function (Builder $query) use ($value) {
                    $query->where('status_id', $value);
                });
            }),
        ];
    }
    public function configure(): void
    {
        $this->setPrimaryKey('id');

    }

    public function testing($order_number)
    {
        $permit = Permit::where('order_number', $order_number)->first();
        $history = $permit->history()->whereNotNull('support_id')->whereNotNull('descreption')->latest()->first();

        $this->dispatch('reject-reason', [$history->descreption]);
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true)
                ->sortable(),
            Column::make("رقم التصريح", "order_number")
                ->sortable(),
            Column::make("اسم الشريك", "support.permit.user.owner.name")
                ->searchable()
                ->sortable(),

                Column::make("الحالة", "support.status.name")
                ->format(function($value, $column, $row) {
                    if ($value === 'محذوف') {
                        $value = 'مرفوض';
                        return '<a href="#" wire:click="testing(' . $column->order_number . ')" class="btn btn-warning" role="button">' . $value . '</a>';
                    }
            
                    return $value;
                })
                ->html()
                ->sortable(),
                
            Column::make("تاريخ الطلب", "created_at")
                ->format(function($value, $column, $row) {
                    return Carbon::parse($value)->translatedFormat('l، d F Y');
            })
        ];
    }
}
