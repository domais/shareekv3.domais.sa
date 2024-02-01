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
        foreach ($this->getSelected() as $item) {
            $users = $this->getSelected();

            $this->clearSelected();

            return Excel::download(new PartnerExcel($users), 'الشركاء.xlsx');
            // These are strings since they came from an HTML element
        }
    }

    #[On('partner-details')]
    public function PartnerDetails($id)
    {
        $partner = Partner::find($id);

        //dd($partner->fileable->path);

        $imagePath = $partner->fileable ? 'https://nextlevel.ams3.digitaloceanspaces.com/' . $partner->fileable->path : null;

        $image = $imagePath ? $imagePath : asset('img/default_avatar.png');


        $permitCounter = $partner->owner->permits->count();

        $eventCounter = $partner->owner->events->count();

        $this->dispatch('show-partner-details', ['image' => $image,'partner' => $partner, 'permitCounter' =>  $permitCounter, 'eventCounter' => $eventCounter]);
    }

    public function filters(): array
    {
        return [
            SelectFilter::make(__('الأصناف'))
                ->options([
                    '' => 'الكل',
                    'أ' => 'أ',
                    'ب' => 'ب',
                    'ج' => 'ج',
                ])

                ->filter(function (Builder $builder, string $value) {
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

                // Rahmani: انا اخفيتها مؤقتا ولي رجعة لها

            // ImageColumn::make('الشعار')
            // ->location(
            //     fn ($row) => $row->fileable ? 'https://nextlevel.ams3.digitaloceanspaces.com/' . $row->fileable->path : asset('img/default_avatar.png')
            //     )
            // ->attributes(fn ($row) => [
            //     'class' => 'rounded-circle w-25 h-25',
            // ]),


            // Column::make("الشعار", "owner.name")
            // ->format(function ($value, $column, $row) {

            //     $img = $column->fileable ? 'https://nextlevel.ams3.digitaloceanspaces.com/' . $column->fileable->path : asset('img/default_avatar.png');

            //     return '<img src="'.$img.'" class="rounded-circle w-25 h-25">';

            // })->html(),

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
            Column::make("المسؤول", "owner.name")
                ->format(function ($value, $column, $row) {

                    return $column->owner->name . '<br><a href="tel:'.$column->owner->phone.'" class="text-decoration-none">0' . $column->owner->phone . '</a><a href="https://wa.me/966'.$column->owner->phone.'" target="_tab"><img class="ms-2" src="'.asset('img/whatsapp.png').'" height="20"></a>';
                })->html()->sortable(),

            Column::make("التصاريح", "owner_id")
                ->format(function ($value, $column, $row) {

                    $counter = $column->owner->permits->count();
                    return '<div class="text-center">'.$counter.'</div>';
                })->html()->sortable(),


            Column::make("المبادرات", "owner_id")
                ->format(function ($value, $column, $row) {

                    $counter = $column->owner->events->count();
                    return $counter;
                })
                ->attributes(fn($row) => [
                    'class' => 'text-center',
                ])->sortable(),

                Column::make("دعم الشريك", "points")
                    ->format(function ($value, $column, $row) {
                        $points = 0;
                        switch ($column->class) {
                            case 'أ':
                                $points = 20 - $value;
                                break;
                            case 'ب':
                                $points = 12 - $value;
                                break;
                            case 'ج':
                                $points = 8 - $value;
                                break;
                        }
                        return $points;
                    })->sortable(),

            Column::make(__(''), 'id')
                ->view('Tableactions.index')

        ];
    }
}
