<?php


namespace App\Exports;

use App\Models\Permit;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Support\Facades\Auth;

class PermitExcel implements FromCollection, WithHeadings
{
    public function collection()
    {
        $user = Auth::user();

        if ($user->hasRole('User')) {
            $permits = Permit::where('user_id', $user->id);
        } elseif ($user->hasRole('Adminstrator')) {
            $permits = Permit::where('admin_id', $user->id);
        } elseif ($user->hasRole('SuperAdmin')) {
            $permits = Permit::query();
        } else {
            return collect();
        }

        return $permits->with(['user'])
            ->get()
            ->map(function ($permit) {
                return [
                    'title' => $permit->title,
                    'start_date' => $permit->start_date,
                    'end_date' => $permit->class,
                    'owner_name' => $permit->user->name,
                ];
            });
    }

    public function headings(): array
    {
        return [
            'العنوان',
            'تاريخ البداية',
            'تاريخ النهاية',
            'الشريك',
        ];
    }
}