<?php

namespace App\Exports;

use App\Models\Partner;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PartnerExcel implements FromCollection, WithHeadings
{
    public $partners;

    public function __construct($partners) {
        $this->partners = $partners;
    }

    public function collection()
    {
        return Partner::whereIn('id', $this->partners)
        ->select('status', 'name', 'city', 'lat', 'lng', 'class', 'CR')
        ->get();
    }
    
    public function headings(): array
    {
        return [
            'status',
            'name',
            'city',
            'lat',
            'lng',
            'class',
            'CR'
        ];
    }
}