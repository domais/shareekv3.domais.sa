<?php

namespace App\Livewire\Backend\DataTable;

use Livewire\Attributes\On;
use App\Models\Survey;
use App\Exports\PartnerExcel;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Columns\DateColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class SurveyTable extends DataTableComponent
{
    protected $model = Survey::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
        $this->setColumnSelectStatus(false);
    }

    

    public function filters(): array
    {
        return [
            SelectFilter::make(__('الحالة'))
                ->options([
                    '' => 'الكل',
                    'draft' => 'مسودة',
                    'submitted' => 'تم الإرسال',
                    'completed' => 'تم الإنتهاء',
                ])

                ->filter(function (Builder $builder, string $value) {
                    $builder->where('status', $value);
                }),
        ];
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true)
                ->sortable(),

            // morph if type === guest then user.name else speaker.name
            // Column::make('الحاضر', '')
            //     ->format(function ($value, $column, $row) {
            //         return $row->surveyable->name;
            //     })
            //     ->searchable()
            //     ->sortable(),

            Column::make("رقم الفعالية", "event.order_number")
            ->searchable()
            ->sortable(),

            Column::make("النوع", "type")
                ->searchable()
                ->sortable(),

            Column::make("الحدث", "event.title"),

            Column::make("الحالة", "status")
                ->searchable()
                ->sortable(),

            Column::make(__(''), 'id')
                ->view('Tableactions.survey')
        ];
    }
}
