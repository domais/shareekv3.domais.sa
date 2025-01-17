<?php

namespace App\Livewire\Backend\DataTable;

use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Livewire\Attributes\On;
use Rappasoft\LaravelLivewireTables\Views\Filters\DateTimeFilter;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class EventTable extends DataTableComponent
{
    public function builder(): Builder
    {
        if (auth()->user()->hasRole('SuperAdmin')){
            return Event::withTrashed();
    
        }
    
        if (auth()->user()->hasRole('Administrator')) {
            return Event::withTrashed()->where(function ($query) {
                $query->where('admin_id', auth()->id())
                      ->orWhereNull('admin_id');
            });
        } elseif (auth()->user()->hasRole('User')) {
            return Event::withTrashed()->where('user_id', auth()->id());
        }
    
        return Event::withTrashed();
    }


    public function filters(): array
    {
        return [
            
    
            SelectFilter::make(__('حالة المبادرة'))
            ->options([
                '' => 'الكل',
                '5' => 'مجدولة',
                '6' => 'قائمة',
                '7' => 'بانتظار التوثيق',
                '8' => 'مراجعة المشرف',
                '9' => 'مؤرشف',
                '16' => 'محذوف',
            ])
            ->filter(function(Builder $builder, string $value) {
                $builder->where('status_id',$value);
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


    #[On('delete-item')] 
    public function deleteRole($id)
    {

        $permit = Event::findorfail($id);

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

            Column::make("status", "status_id")
                ->hideIf(true)
                ->sortable(),

            Column::make("user_id", "user_id")
                ->hideIf(true)
                ->sortable(),


            Column::make("رقم التصريح", "order_number")
                ->searchable()
                ->sortable()
                ->format(
                    fn($value, $row, Column $column) => '<a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="'.route('event.show', $row->order_number).'">'.$row->order_number.'</a>'
                )->html(),

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

            Column::make(__('الإجراءات'), 'id')
                ->view('Tableactions.permits')
        ];
    }
}
