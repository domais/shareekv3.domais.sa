<?php

namespace App\Livewire\Backend\DataTable;

use App\Exports\PartnerExcel;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Partner;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Livewire\Attributes\On;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Maatwebsite\Excel\Facades\Excel;
use Rappasoft\LaravelLivewireTables\Views\Columns\ImageColumn;

class PartnerTable extends DataTableComponent
{
    protected $model = Partner::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
        $this->setColumnSelectStatus(false);

    }

    public array $bulkActions = [
        'exportSelected' => 'Excel',
    ];

    public function exportSelected()
    {
        foreach($this->getSelected() as $item)
        {
            $users = $this->getSelected();

            $this->clearSelected();
        
          return Excel::download(new PartnerExcel($users), 'الشركاء.xlsx');
            // These are strings since they came from an HTML element
        }
    }

    #[On('partner-details')] 
    public function PartnerDetails($id)
    {
        $owner = Partner::find($id)->owner;

        $permitCounter = $owner->permits->count();

        $eventCounter = $owner->events->count();

       // dd($owner, $permitCounter, $eventCounter);

        $this->dispatch('show-partner-details',['owner' => $owner->name, 'permitCounter' =>  $permitCounter, 'eventCounter' => $eventCounter]);


        
    }

    public function filters(): array
    {
        return [
            SelectFilter::make(__('الأصناف'))
                ->options([
                    '' => 'الكل',
                    'أ' => 'أ',
                    'ب' => 'ب',
                    'د' => 'د',
                    'ج' => 'ج',
                ])
            
                ->filter(function(Builder $builder, string $value) {
                    $builder->where('class', $value);
                }),   
        ];
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true)
                ->sortable(),

            ImageColumn::make('الشعار')
                ->location(
                    fn($row) => 'https://nextlevel.ams3.digitaloceanspaces.com/rahmaniDjamel/3/image.png'
                )
                ->attributes(fn($row) => [
                    'class' => 'rounded-circle w-25 h-25',
                    'alt' =>  ' Avatar',
                ]),
            Column::make("الإسم", "name")
                ->searchable()
                ->sortable(),

            Column::make("رقم السجل", "CR")
            ->hideIf(true)
                ->searchable()
                ->sortable(),
            Column::make("المدينة", "city")
                ->sortable(),
            Column::make("الصنف", "class")
                ->sortable(),
            Column::make("اسم المسؤول", "owner.name")
            ->format(function($value, $column, $row) {

                return $column->owner->name. '<br>' . $column->owner->phone ;
            })->html()->sortable(),

            Column::make("التصاريح", "owner_id")
            ->format(function($value, $column, $row) {
    
                $counter = $column->owner->permits->count();
                return $counter;
            }),

 
            Column::make("المبادرات", "owner_id")
            ->format(function($value, $column, $row) {
    
                $counter = $column->owner->events->count();
                return $counter;
            }),

            Column::make(__(''), 'id')
            ->view('Tableactions.index')

        ];
    }
}
