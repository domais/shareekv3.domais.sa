<?php

namespace App\Livewire\Backend\DataTable;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Permit;
use App\Models\Status;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Livewire\Attributes\On;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class PermitTable extends DataTableComponent
{
    public $options;

    public function mount()
    {
        $this->options = Status::whereIn('id', [2, 3, 4])->get();
    }



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

    #[On('delete-item')] 
    public function deleteRole($id)
    {

        $permit = Permit::findorfail($id);

        $permit->delete();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));

    }

    public function filters(): array
    {
        return [
            
    
            SelectFilter::make(__('حالة التصريح'))
            ->options($this->options
            ->keyBy('id')
            // add option for all role
            ->map(fn($tag) => __($tag->name))
            ->prepend(__(__('جميع الحالات')), '') 
            ->toArray())
            
            ->filter(function(Builder $builder, string $value) {
                if (auth()->user()->hasRole('SuperAdmin')) {
                    $builder->where('status_id', $value)
                            ->where(function ($query) {
                                $query->where('admin_id', auth()->id())
                                      ->orWhereNull('admin_id');
                            });
                } elseif (auth()->user()->hasRole('User')) {
                    $builder->where('status_id', $value)
                            ->where('user_id', auth()->id());
                }
            }),
    
           
        ];
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

            Column::make(__(''), 'id')
                ->view('Tableactions.permits')
        ];
    }
}
