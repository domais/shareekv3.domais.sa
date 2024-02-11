<?php

namespace App\Exports;

use App\Models\Partner;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PartnerExcel implements FromCollection, WithHeadings
{

    public function __construct() {
        
    }

    public function collection()
    {
        return Partner::with(['owner', 'owner.permits'])
            ->get()
            ->map(function ($partner) {
                return [
                    'name' => $partner->name,
                    'city' => $partner->city,
                    'class' => $partner->class,
                    'points' => $partner->points,
                    'owner_name' => $partner->owner->name,
                    'permits_count' => $partner->owner->permits->count(),
                    'events_count' => $partner->owner->events->count(),
                ];
            });
    }
    
    public function headings(): array
    {
        return [
            'اسم الشريك',
            'المدينة',
            'الفئة',
            'الدعم المتبقي',
            'اسم المسؤول',
            'عدد التصاريح',
            'عدد الفعاليات',
        ];
    }
}