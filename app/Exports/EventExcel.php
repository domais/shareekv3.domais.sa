<?php


namespace App\Exports;

use App\Models\Event;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Support\Facades\Auth;

class EventExcel implements FromCollection, WithHeadings
{
    public function collection()
    {
        $user = Auth::user();
    
        if ($user->hasRole('User')) {
            $permits = Event::where('user_id', $user->id);
        } elseif ($user->hasRole('Adminstrator')) {
            $permits = Event::where('admin_id', $user->id);
        } elseif ($user->hasRole('SuperAdmin')) {
            $permits = Event::query();
        } else {
            $permits = collect();
        }
    
        return $permits->with(['user','eventType','literary','status'])
            ->get()
            ->map(function ($permit) {
                $targetedAudience = '';
                $plcae = '';
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

                switch ($permit->event_location) {
                    case 1:
                        $place = 'داخلية';
                        break;
                    case 2:
                        $place = 'خارجية';
                        break;
                    case 3:
                        $place = 'افتراضي';
                        break;
                    default:
                        $place = 'Not defined';
                }
    
                return [
                    'order_number' => $permit->order_number,
                    'title' => $permit->title,
                    'start_date' => $permit->start_date,
                    'end_date' => $permit->class,
                    'owner_name' => $permit->user->name,
                    'eventType' => $permit->eventType->name,
                    'targeted_audience' => $targetedAudience,
                    'literary' => $permit->literary ? $permit->literary->name : 'غير محدد',
                    'available_seats' => $permit->available_seats,
                    'place' => $place,
                    'status' => $permit->status->name ?? 'غير محدد',
                ];
            });
    }

    public function headings(): array
    {
        return [
            'رقم الفعالية',
            'العنوان',
            'تاريخ البداية',
            'تاريخ النهاية',
            'الشريك',
            'نوع الفعالية',
            'الفئة المستهدفة',
            'نوع الأدبي',
            'المقاعد المتاحة',
            'مقر الاقامة',
            'الحالة'
        ];
    }
}