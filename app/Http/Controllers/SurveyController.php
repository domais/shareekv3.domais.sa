<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    private $guestRates = [
        'event_hear' => 'من اين سمعت عن الفعالية؟',
        'guest_rate_1' => 'إلمام المتحدث بالمجال أثري الموضوع المطروح بشكل جيد؟',
        'guest_rate_2' => 'أسلوب طرح المتحدث جاذباً؟',
        'guest_rate_3' => 'مدى مناسبة تهيئة المكان لإقامة الفعالية؟',
        'guest_rate_4' => 'ما مدى حرص المتحدث على تفعيل النقاش والحوار مع الجمهور؟',
        'guest_rate_5' => 'هل هذه هي المرة الأولى التي تحضر فيها فعالية في هذا المقهى؟',
        'guest_rate_6' => 'مدى رضاك عن أداء الشريك أثناء الفعالية؟',
        'guest_rate_7' => 'ما مدى رضاك عن البرنامج؟',
        'guest_rate_8' => 'مدى ملاءمة موعد الفعالية؟',
        'guest_rate_9' => 'مدى مناسبة مدة الفعالية؟',
        'guest_rate_10' => 'التزام المقهى بالوقت المحدد لإقامة الفعالية؟',
        'notes' => 'ملاحظات'
    ];

    private $speakerRates = [
        'attend_count' => 'هل كان الحضور بالعدد المتوقع؟ ',
        'speaker_rate_1' => 'ما مدى رضاك عن تفاعل الحضور؟ ',
        'speaker_rate_2' => 'ما تقييمك لمستوى تنظيم المكان لإقامة الفعالية؟',
        'speaker_rate_3' => 'ما تقييمك لمستوى تنسيق وتواصل الشريك معكم؟',
        'speaker_rate_4' => 'ما تقييمك لمستوى استقبال الشريك لك؟',
        'notes' => 'ملاحظات'
    ];

    /**
     * Verify the survey token and expired token
     * if invalid token return to already submitted page
     * if expired token return to expired page
     */
    public function index(Request $request, $type, $token)
    {
        $survey = Survey::where('token', $token)
            ->first();

        $validate = $this->validateSurvey($survey, $type);
        if ($validate) {
            return $validate;
        }

        return view('survey.index', compact('survey'));
    }


    public function guest(Request $request, $token)
    {
        $validated =  $request->validate([
            'event_hear' => 'required',
            'guest-rate-1' => 'required|in:1,2,3,4,5',
            'guest-rate-2' => 'required|in:1,2,3,4,5',
            'guest-rate-3' => 'required|in:1,2,3,4,5',
            'guest-rate-4' => 'required|in:1,2,3,4,5',
            'guest-rate-5' => 'required|in:1,2,3,4,5',
            'guest-rate-6' => 'required|in:1,2,3,4,5',
            'guest-rate-7' => 'required|in:1,2,3,4,5',
            'guest-rate-8' => 'required|in:1,2,3,4,5',
            'guest-rate-9' => 'required|in:1,2,3,4,5',
            'guest-rate-10' => 'required',
            'notes' => 'nullable',
        ], [
            'event_hear.required' => 'من فضلك قم بإختيار كيف سمعت عن الفعالية',
            'guest-rate-1.required' => 'هذا الحقل مطلوب',
            'guest-rate-2.required' => 'هذا الحقل مطلوب',
            'guest-rate-3.required' => 'هذا الحقل مطلوب',
            'guest-rate-4.required' => 'هذا الحقل مطلوب',
            'guest-rate-5.required' => 'هذا الحقل مطلوب',
            'guest-rate-6.required' => 'هذا الحقل مطلوب',
            'guest-rate-7.required' => 'هذا الحقل مطلوب',
            'guest-rate-8.required' => 'هذا الحقل مطلوب',
            'guest-rate-9.required' => 'هذا الحقل مطلوب',
            'guest-rate-10.required' => 'هذا الحقل مطلوب',
            'guest-rate-1.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-2.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-3.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-4.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-5.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-6.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-7.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-8.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-9.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'guest-rate-10.in' => 'يجب أن يكون الحقل بين 1 و 5',
        ]);

        $survey = Survey::where('token', $token)
            ->first();

        $validate = $this->validateSurvey($survey, 'guest');
        if ($validate) {
            return $validate;
        }

        $newData = [
            $this->guestRates['event_hear'] => [
                'value' => $validated['event_hear'],
                'type' => 'text'
            ],
            $this->guestRates['guest_rate_1'] => [
                'value' => $validated['guest-rate-1'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_2'] => [
                'value' => $validated['guest-rate-2'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_3'] => [
                'value' => $validated['guest-rate-3'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_4'] => [
                'value' => $validated['guest-rate-4'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_5'] => [
                'value' => $validated['guest-rate-5'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_6'] => [
                'value' => $validated['guest-rate-6'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_7'] => [
                'value' => $validated['guest-rate-7'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_8'] => [
                'value' => $validated['guest-rate-8'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_9'] => [
                'value' => $validated['guest-rate-9'],
                'type' => 'star'
            ],
            $this->guestRates['guest_rate_10'] => [
                'value' => $validated['guest-rate-10'],
                'type' => 'star'
            ],
            $this->guestRates['notes'] => [
                'notes' => $validated['notes'],
                'type' => 'text'
            ],
        ];

        $survey->update([
            'status' => 'submitted',
            'data' => $newData,
        ]);

        return view('survey.completed');
    }


    public function speaker(Request $request, $token)
    {
        $validated =  $request->validate([
            'attend_count' => 'required|in:1,0',
            'speaker-rate-1' => 'required|in:1,2,3,4,5',
            'speaker-rate-2' => 'required|in:1,2,3,4,5',
            'speaker-rate-3' => 'required|in:1,2,3,4,5',
            'speaker-rate-4' => 'required|in:1,2,3,4,5',
            'notes' => 'nullable'
        ], [
            'attend_count.required' => 'هذا الحقل مطلوب',
            'speaker-rate-1.required' => 'هذا الحقل مطلوب',
            'speaker-rate-2.required' => 'هذا الحقل مطلوب',
            'speaker-rate-3.required' => 'هذا الحقل مطلوب',
            'speaker-rate-4.required' => 'هذا الحقل مطلوب',
            'speaker-rate-1.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'speaker-rate-2.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'speaker-rate-3.in' => 'يجب أن يكون الحقل بين 1 و 5',
            'speaker-rate-4.in' => 'يجب أن يكون الحقل بين 1 و 5',
        ]);

        $survey = Survey::where('token', $token)
            ->first();

        $validate = $this->validateSurvey($survey, 'speaker');
        if ($validate) {
            return $validate;
        }

        $newData = [
            $this->speakerRates['attend_count'] => [
                'value' => $validated['attend_count'],
                'type' => 'boolean'
            ],
            $this->speakerRates['speaker_rate_1'] => [
                'value' => $validated['speaker-rate-1'],
                'type' => 'star'
            ],
            $this->speakerRates['speaker_rate_2'] => [
                'value' => $validated['speaker-rate-2'],
                'type' => 'star'
            ],
            $this->speakerRates['speaker_rate_3'] => [
                'value' => $validated['speaker-rate-3'],
                'type' => 'star'
            ],
            $this->speakerRates['speaker_rate_4'] => [
                'value' => $validated['speaker-rate-4'],
                'type' => 'star'
            ],
            $this->speakerRates['notes'] => [
                'value' => $validated['notes'],
                'type' => 'text'
            ]
        ];

        $survey->update([
            'status' => 'submitted',
            'data' => $newData,
        ]);

        return view('survey.completed');
    }

    private function validateSurvey($survey, $type)
    {

        if (!$survey) {
            return view('survey.error')->with([
                'title' => 'خطأ في رابط الاستبيان',
                'message' => 'لا يمكنك الوصول إلى هذا الاستبيان، من فضلك تأكد من الرابط الصحيح'
            ]);
        }

        if ($type !== $survey->type) {
            return view('survey.error')->with([
                'title' => 'خطأ في نوع الاستبيان',
                'message' => 'لا يمكنك الوصول إلى هذا الاستبيان، من فضلك تأكد من الرابط الصحيح'
            ]);
        }

        if ($survey->status === 'submitted') {
            return view('survey.error')->with([
                'title' => 'أنت بالفعل ملأت الاستبيان',
                'message' => 'لقد قمت بملأ الاستبيان من قبل، شكراً لك على وقتك'
            ]);
        }

        if ($survey->expire_at < now()) {
            return view('survey.error')->with([
                'title' => 'انتهت صلاحية الاستبيان',
                'message' => 'لقد انتهت صلاحية الاستبيان، شكراً لك على وقتك'
            ]);
        }
        return 0;
    }
}
