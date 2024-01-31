<?php
  //lang/ar/validation.php
return [
    'phone' => 'The :attribute field must be a valid number.',

    'accepted' => 'يجب قبول حقل :attribute.',
    'accepted_if' => 'يجب قبول حقل :attribute عندما :other يكون :value.',
    'active_url' => 'حقل :attribute يجب أن يكون عنوان URL صالحًا.',
    'after' => 'حقل :attribute يجب أن يكون تاريخًا بعد :date.',
    'after_or_equal' => 'حقل :attribute يجب أن يكون تاريخًا بعد أو مساويًا لـ :date.',
    'alpha' => 'حقل :attribute يجب أن يحتوي فقط على أحرف.',
    'alpha_dash' => 'حقل :attribute يجب أن يحتوي فقط على أحرف، أرقام، شرطات وشرطات سفلية.',
    'alpha_num' => 'حقل :attribute يجب أن يحتوي فقط على أحرف وأرقام.',
    'array' => 'حقل :attribute يجب أن يكون مصفوفة.',
    'ascii' => 'حقل :attribute يجب أن يحتوي فقط على أحرف ألفبائية وأرقام ورموزًا.',
    'before' => 'حقل :attribute يجب أن يكون تاريخًا قبل :date.',
    'before_or_equal' => 'حقل :attribute يجب أن يكون تاريخًا قبل أو مساويًا لـ :date.',
    'between' => [
        'array' => 'حقل :attribute يجب أن يحتوي على عدد بين :min و :max من العناصر.',
        'file' => 'حقل :attribute يجب أن يكون حجم الملف بين :min و :max كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن يكون القيمة بين :min و :max.',
        'string' => 'حقل :attribute يجب أن يكون عدد الأحرف بين :min و :max.',
    ],
    'boolean' => 'حقل :attribute يجب أن يكون إما صحيحًا أو خاطئًا.',
    'can' => 'حقل :attribute يحتوي على قيمة غير مصرح بها.',
    'confirmed' => 'تأكيد حقل :attribute لا يتطابق.',
    'current_password' => 'كلمة المرور غير صحيحة.',
    'date' => 'حقل :attribute يجب أن يكون تاريخًا صالحًا.',
    'date_equals' => 'حقل :attribute يجب أن يكون تاريخًا مساويًا لـ :date.',
    'date_format' => 'حقل :attribute يجب أن يتطابق مع التنسيق :format.',
    'decimal' => 'حقل :attribute يجب أن يحتوي على :decimal أماكن عشرية.',
    'declined' => 'حقل :attribute يجب أن يكون مرفوضًا.',
    'declined_if' => 'حقل :attribute يجب أن يكون مرفوضًا عندما :other يكون :value.',
    'different' => 'حقل :attribute و :other يجب أن يكونان مختلفين.',
    'digits' => 'حقل :attribute يجب أن يحتوي على :digits أرقام.',
    'digits_between' => 'حقل :attribute يجب أن يحتوي على عدد من الأرقام بين :min و :max.',
    'dimensions' => 'حقل :attribute يحتوي على أبعاد صورة غير صالحة.',
    'distinct' => 'حقل :attribute يحتوي على قيمة مكررة.',
    'doesnt_end_with' => 'حقل :attribute يجب أن لا ينتهي بأحد القيم التالية: :values.',
    'doesnt_start_with' => 'حقل :attribute يجب أن لا يبدأ بأحد القيم التالية: :values.',
    'email' => 'حقل :attribute يجب أن يكون عنوان بريد إلكتروني صالح.',
    'ends_with' => 'حقل :attribute يجب أن ينتهي بأحد القيم التالية: :values.',
    'enum' => 'القيمة المختارة لـ :attribute غير صالحة.',
    'exists' => 'القيمة المختارة لـ :attribute غير صالحة.',
    'file' => 'حقل :attribute يجب أن يكون ملفًا.',
    'filled' => 'حقل :attribute يجب أن يحتوي على قيمة.',
    'gt' => [
        'array' => 'حقل :attribute يجب أن يحتوي على أكثر من :value عنصرًا.',
        'file' => 'حقل :attribute يجب أن يكون حجم الملف أكبر من :value كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن تكون القيمة أكبر من :value.',
        'string' => 'حقل :attribute يجب أن تكون عدد الأحرف أكبر من :value.',
    ],
    'gte' => [
        'array' => 'حقل :attribute يجب أن يحتوي على :value عنصرًا أو أكثر.',
        'file' => 'حقل :attribute يجب أن يكون حجم الملف أكبر من أو مساويًا لـ :value كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن تكون القيمة أكبر من أو مساوية لـ :value.',
        'string' => 'حقل :attribute يجب أن تكون عدد الأحرف أكبر من أو مساويًا لـ :value.',
    ],
    'image' => 'حقل :attribute يجب أن يكون صورة.',
    'in' => 'القيمة المختارة لـ :attribute غير صالحة.',
    'in_array' => 'حقل :attribute يجب أن يكون موجودًا في :other.',
    'integer' => 'حقل :attribute يجب أن يكون عددًا صحيحًا.',
    'ip' => 'حقل :attribute يجب أن يكون عنوان IP صالحًا.',
    'ipv4' => 'حقل :attribute يجب أن يكون عنوان IPv4 صالحًا.',
    'ipv6' => 'حقل :attribute يجب أن يكون عنوان IPv6 صالحًا.',
    'json' => 'حقل :attribute يجب أن يكون سلسلة JSON صالحة.',
    'lowercase' => 'حقل :attribute يجب أن تكون الأحرف في صيغة صغيرة.',
    'lt' => [
        'array' => 'حقل :attribute يجب أن يحتوي على أقل من :value عنصرًا.',
        'file' => 'حقل :attribute يجب أن يكون حجم الملف أقل من :value كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن تكون القيمة أقل من :value.',
        'string' => 'حقل :attribute يجب أن تكون عدد الأحرف أقل من :value.',
    ],
    'lte' => [
        'array' => 'حقل :attribute يجب أن لا يحتوي على أكثر من :value عنصرًا.',
        'file' => 'حقل :attribute يجب أن يكون حجم الملف أقل من أو مساويًا لـ :value كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن تكون القيمة أقل من أو مساوية لـ :value.',
        'string' => 'حقل :attribute يجب أن تكون عدد الأحرف أقل من أو مساويًا لـ :value.',
    ],
    'mac_address' => 'حقل :attribute يجب أن يكون عنوان MAC صالحًا.',
    'max' => [
        'array' => 'حقل :attribute يجب أن لا يحتوي على أكثر من :max عنصر.',
        'file' => 'حقل :attribute يجب أن لا يتجاوز حجم الملف :max كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن لا تتجاوز القيمة :max.',
        'string' => 'حقل :attribute يجب أن لا يتجاوز عدد الأحرف :max.',
    ],
    'max_digits' => 'حقل :attribute يجب أن لا يحتوي على أكثر من :max أرقام.',
    'mimes' => 'حقل :attribute يجب أن يكون ملفًا من النوع: :values.',
    'mimetypes' => 'حقل :attribute يجب أن يكون ملفًا من النوع: :values.',
    'min' => [
        'array' => 'حقل :attribute يجب أن يحتوي على الأقل على :min عنصر.',
        'file' => 'حقل :attribute يجب أن يكون حجم الملف على الأقل :min كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن تكون القيمة على الأقل :min.',
        'string' => 'حقل :attribute يجب أن يكون عدد الأحرف على الأقل :min.',
    ],
    'min_digits' => 'حقل :attribute يجب أن يحتوي على الأقل على :min أرقام.',
    'missing' => 'حقل :attribute يجب أن يكون مفقودًا.',
    'missing_if' => 'حقل :attribute يجب أن يكون مفقودًا عندما :other يكون :value.',
    'missing_unless' => 'حقل :attribute يجب أن يكون مفقودًا ما لم :other يكون :value.',
    'missing_with' => 'حقل :attribute يجب أن يكون مفقودًا عندما تكون القيمة :values موجودة.',
    'missing_with_all' => 'حقل :attribute يجب أن يكون مفقودًا عندما تكون القيم :values موجودة.',
    'multiple_of' => 'حقل :attribute يجب أن يكون مضاعفًا للقيمة :value.',
    'not_in' => 'القيمة المختارة لـ :attribute غير صالحة.',
    'not_regex' => 'صيغة حقل :attribute غير صالحة.',
    'numeric' => 'حقل :attribute يجب أن يكون عددًا.',
    'password' => [
        'letters' => 'حقل :attribute يجب أن يحتوي على حرف واحد على الأقل.',
        'mixed' => 'حقل :attribute يجب أن يحتوي على حرف كبير وحرف صغير على الأقل.',
        'numbers' => 'حقل :attribute يجب أن يحتوي على رقم واحد على الأقل.',
        'symbols' => 'حقل :attribute يجب أن يحتوي على رمز واحد على الأقل.',
        'uncompromised' => 'القيمة :attribute المعطاة قد ظهرت في تسريب بيانات. الرجاء اختيار قيمة مختلفة لـ :attribute.',
    ],
    'present' => 'حقل :attribute يجب أن يكون موجودًا.',
    'prohibited' => 'حقل :attribute ممنوع.',
    'prohibited_if' => 'حقل :attribute ممنوع عندما يكون :other هو :value.',
    'prohibited_unless' => 'حقل :attribute ممنوع ما لم :other يكون في :values.',
    'prohibits' => 'حقل :attribute يمنع :other من الوجود.',
    'regex' => 'صيغة حقل :attribute غير صالحة.',
    'required' => 'حقل :attribute مطلوب.',
    'required_array_keys' => 'حقل :attribute يجب أن يحتوي على مفاتيح للقيم التالية: :values.',
    'required_if' => 'حقل :attribute مطلوب عندما :other يكون :value.',
    'required_if_accepted' => 'حقل :attribute مطلوب عندما :other يكون مقبولًا.',
    'required_unless' => 'حقل :attribute مطلوب ما لم :other يكون في :values.',
    'required_with' => 'حقل :attribute مطلوب عندما تكون القيمة :values موجودة.',
    'required_with_all' => 'حقل :attribute مطلوب عندما تكون القيم :values موجودة.',
    'required_without' => 'حقل :attribute مطلوب عندما تكون القيمة :values غير موجودة.',
    'required_without_all' => 'حقل :attribute مطلوب عندما تكون جميع القيم :values غير موجودة.',
    'same' => 'حقل :attribute يجب أن يتطابق مع :other.',
    'size' => [
        'array' => 'حقل :attribute يجب أن يحتوي على :size عنصرًا.',
        'file' => 'حقل :attribute يجب أن يكون حجم الملف :size كيلوبايت.',
        'numeric' => 'حقل :attribute يجب أن تكون القيمة :size.',
        'string' => 'حقل :attribute يجب أن يكون عدد الأحرف :size.',
    ],
    'starts_with' => 'حقل :attribute يجب أن يبدأ بأحد القيم التالية: :values.',
    'string' => 'حقل :attribute يجب أن يكون نصًا.',
    'timezone' => 'حقل :attribute يجب أن يكون منطقة زمنية صالحة.',
    'unique' => 'قيمة :attribute مستخدمة بالفعل.',
    'uploaded' => 'فشل في تحميل حقل :attribute.',
    'uppercase' => 'حقل :attribute يجب أن تكون الأحرف في صيغة كبيرة.',
    'url' => 'حقل :attribute يجب أن يكون عنوان URL صالحًا.',
    'ulid' => 'حقل :attribute يجب أن يكون ULID صالحًا.',
    'uuid' => 'حقل :attribute يجب أن يكون UUID صالحًا.',
    'attributes' => [
        'name' => 'الاسم',
        'email' => 'البريد الإلكتروني',
        'phone' => 'رقم الجوال',
        'role' => 'الدور',
        'permissions' => 'الصلاحيات',
        'password' => 'كلمة السر',
        'password_new' => 'كلمة السر الجديدة',
        'title' => 'العنوان',
        'nationality' => 'الجنسية',
        'type' => 'التصنيف',
        'event_type_id' => 'نوع المبادرة',
        'event_location' => 'مقر إقامة المبادرة',
        'literary_id' => 'التصنيف الأدبي',
        'description' => 'الوصف',
        'start_date' => 'تاريخ البداية',
        'end_date' => 'تاريخ النهاية',
        'available_seats' => 'المقاعد المتاحة',
        'lat' => 'خط العرض',
        'lng' => 'خط الطول',
        'approval_file' => 'ملف الموافقة',
        'location_image' => 'صورة الموقع',
        'image_adv' => 'صورة الإعلان',
        'coordinates' => 'الإحداثيات',
        'logo' => 'الشعار',
        'reply' => 'الرد',
        'permitNumber' => 'رقم التصريح',
        'permitFile' => 'ملف التصريح',
        'links.*' => 'الروابط'
    ],
    'custom' => [
        'approval_file' => [
            'required_if' => 'حقل ملف الموافقة مطلوب عندما يكون موقع الحدث  خارجي.',
        ],
        'location_image' => [
            'required_if' => 'حقل صورة الموقع مطلوب عندما يكون موقع الحدث  خارجي.',
        ],
    ],
];
