<?php

namespace App\Livewire\Backend\DataTable;

use Livewire\Attributes\On;
use App\Models\Announcement;
use App\Exports\PartnerExcel;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Columns\DateColumn;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class AnnouncementTable extends DataTableComponent
{
    protected $model = Announcement::class;

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
                    'منشور' => 'منشور',
                    'غير منشور' => 'غير منشور',
                ])

                ->filter(function (Builder $builder, string $value) {
                    $builder->where('is_active', $value);
                }),
        ];
    }

    /**
     * Delete Selected
     */
    #[On('delete-item')]
    public function delete($id)
    {
        $event = Announcement::findorfail($id);

        $event->delete();

        $this->dispatch('announcement_modal', array_merge(SwalResponse(), ['place' => 'outside']));
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->hideIf(true)
                ->sortable(),

            Column::make('الناشر', 'owner.name')
                ->searchable()
                ->sortable(),

            Column::make("العنوان", "title")
                ->searchable()
                ->sortable(),

            Column::make("البيان", "description")
                ->searchable()
                ->sortable(),

            Column::make("تاريخ البدء", "start_at")
                ->format(function ($value, $column, $row) {
                    // 12th of August 1988 09:30:00 AM
                    return $column->start_at->format('d-m-Y h:i:s A');
                })
                ->sortable(),

            Column::make("تاريخ الانتهاء", "end_at")
                ->format(function ($value, $column, $row) {
                    return $column->end_at->format('d-m-Y h:i:s A');
                })
                ->sortable(),

            Column::make("الحالة", "is_active"),


            Column::make(__(''), 'id')
                ->view('Tableactions.announcement')
        ];
    }
}
