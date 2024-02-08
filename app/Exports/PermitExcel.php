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
    
        return $permits->with(['user','eventType','literary'])
            ->get()
            ->map(function ($permit) {
                $targetedAudience = '';
                switch ($permit->targeted_audience) {
                    case 1:
                        $targetedAudience = 'الأطفال (0-11)';
                        break;
                    case 2:
                        $targetedAudience = 'اليافعين (12-18)';
                        break;
                    case 3:
                        $targetedAudience = 'الكبار (+18)';
                        break;
                    default:
                        $targetedAudience = 'Unknown';
                }
    
                return [
                    'title' => $permit->title,
                    'start_date' => $permit->start_date,
                    'end_date' => $permit->class,
                    'owner_name' => $permit->user->name,
                    'eventType' => $permit->eventType->name,
                    'targeted_audience' => $targetedAudience,
                    'literary' => $permit->literary ? $permit->literary->name : 'غير محدد',
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
            'نوع الفعالية',
            'الفئة المستهدفة',
            'نوع الأدبي'
        ];
    }
}