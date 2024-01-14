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


class PartnerTable extends DataTableComponent
{
    protected $model = Partner::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
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
                ->sortable(),
            Column::make("الإسم", "name")
                ->searchable()
                ->sortable(),
            Column::make("رقم السجل", "CR")
                ->searchable()
                ->sortable(),
            Column::make("المدينة", "city")
                ->sortable(),
            Column::make("الصنف", "class")
                ->sortable(),
            Column::make("إسم المالك", "owner.name")
                ->sortable(),

            Column::make("تاريخ الإضافة", "created_at")
                ->format(function($value, $column, $row) {
                    return Carbon::parse($value)->translatedFormat('l، d F Y');
            })
            ->sortable(),

            Column::make(__(''), 'id')
            ->view('Tableactions.index')

        ];
    }
}
