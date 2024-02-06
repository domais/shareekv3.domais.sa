<?php

namespace App\Livewire\Backend\DataTable;

use Livewire\Attributes\On;
use App\Models\Survey;
use App\Exports\PartnerExcel;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Columns\DateColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class SurveyTable extends DataTableComponent
{

    public function builder(): Builder
    {
        $query = Survey::query()->select('event_id')->distinct();
    
        if (auth()->user()->hasRole('User')) {
            $query->whereHas('event', function ($q) {
                $q->where('user_id', Auth::id());
            });
        }
    
        return $query;
    }
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
                    'draft' => 'غير معبأ',
                    'submitted' => 'معبأ',
                    'completed' => 'انتهى تاريخه',
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

            Column::make("رقم المبادرة", "event.order_number")
            ->searchable()
            ->format(
                fn($value, $row, Column $column) => '<a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="'.route('survey.show', $row->id).'">'.$value.'</a>'
                )
            ->html()
            ->sortable(),
            
            Column::make("اسم المبادرة", "event.title"),

            Column::make("قام بالتعبئة", "type")
            ->searchable()
            ->sortable()
            ->format(function($value) {
                if ($value == 'guest') {
                    return 'زائر';
                } elseif ($value == 'speaker') {
                    return 'متحدث';
                } else {
                    return $value;
                }
            }),

            

            Column::make("الحالة", "status")
                ->searchable()
                ->sortable()
                ->format(function($value) {
                    if ($value == 'draft') {
                        return 'غير معبأ';
                    } elseif ($value == 'submitted') {
                        return 'معبأ';
                    } elseif ($value == 'completed') {
                        return 'انتهى تاريخه';
                    } else {
                        return $value;
                    }
                }),

            Column::make(__(''), 'id')
                ->view('Tableactions.survey')
        ];
    }
}
