<?php

namespace App\Livewire\Backend\DataTable;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Permit;
use App\Models\Status;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Livewire\Attributes\On;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateTimeFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class PermitTable extends DataTableComponent
{


    public function filters(): array
    {
        return [
            
    
            SelectFilter::make(__('حالة التصريح'))
            ->options([
                '' => 'الكل',
                '2' => 'طلبات جديدة',
                '3' => 'تحت الدراسة',
                '4' => 'بإنتظار التصريح',
                '8' => 'مؤرشف',
                '16' => 'محذوف',
            ])
            ->filter(function(Builder $builder, string $value) {

                if ($value === '2') {
                    $builder->where('status_id', 2);
                }
                if ($value === '3') {
                    $builder->where('status_id', 3);
                }
                if ($value === '4') {
                    $builder->where('status_id', 4);
                }
                if ($value === '16') {
                    $builder->where('status_id', 16);
                }
                if ($value === '8') {
                    $builder->whereIn('status_id', [5,8]);
                }
            }),

            DateTimeFilter::make('تاريخ البداية')
            ->config([
    
                'pillFormat' => 'd M Y - H:i', // Format for use in Filter Pills
                'placeholder' => 'ادخل تاريخ البداية', // A placeholder value
            ])
            ->filter(function(Builder $builder, string $value) {
                $builder->where('start_date', '>=', $value);
            }),

            DateTimeFilter::make('تاريخ النهاية')
            ->config([
    
                'pillFormat' => 'd M Y - H:i', // Format for use in Filter Pills
                'placeholder' => 'ادخل تاريخ النهاية', // A placeholder value
            ])
            ->filter(function(Builder $builder, string $value) {
                $builder->where('end_date', '<=', $value);
            }),
    
           
        ];
    }



    public function builder(): Builder
    {
        if (auth()->user()->hasRole('SuperAdmin')){
            return Permit::withTrashed()->where('status_id', '!=', 5);
        }
        if (auth()->user()->hasRole('Administrator')) {
            return Permit::withTrashed()->where(function ($query) {
                $query->where('admin_id', auth()->id())
                      ->orWhereNull('admin_id');
            })->where('status_id', '!=', 5)
            ->where('status_id', '!=', 7)
            ->where('status_id', '!=', 5);
        } elseif (auth()->user()->hasRole('User')) {
            return Permit::withTrashed()->where('user_id', auth()->id())
            ->where('status_id', '!=', 5)
            ->where('status_id', '!=', 7)
            ->where('status_id', '!=', 5);
        }
    
        return Permit::withTrashed()->where('status_id', '!=', 5)
        ->where('status_id', '!=', 7)
        ->where('status_id', '!=', 5);
    }

    #[On('delete-item')] 
    public function deleteRole($id)
    {

        $permit = Permit::findorfail($id);

        $permit->status_id = 16;

        $permit->save();

        $permit->delete();

        $this->dispatch('DeletePermit_Response', array_merge(SwalResponse(), ['place' => 'outside']));

    }



    public function configure(): void
    {
        $this->setPrimaryKey('id');


        $this->setColumnSelectStatus(false);

    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true)
                ->sortable(),

            Column::make("user_id", "user_id")
                ->hideIf(true)
                ->sortable(),

                Column::make("رقم التصريح", "order_number")
                ->searchable()
                ->sortable()
                ->format(
                    fn($value, $row, Column $column) => '<a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="'.route('permit.show', $row->order_number).'">'.$row->order_number.'</a>'
                    )
                ->html(),
                Column::make("اسم الشريك", "user.owner.name")
                ->searchable()
                ->sortable(),

            Column::make("العنوان", "title")
                    ->searchable()
                ->sortable(),

            Column::make("الحالة", "status.name")
                ->searchable()
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

            Column::make("محذوف", "status_id")
                ->format(function($value, $column, $row) {
                    if ($value == 16) {
                        return 'نعم';
                    }
                    return 'لا';
                })
                ->sortable(),

            Column::make(__(''), 'id')
                ->view('Tableactions.permits')
        ];
    }
}
