@extends('mail.layout')

@section('content')

    <p>
     شكر {{$name}} علي تسجيلك في ({{ config('app.name') }})،
    </p>

    <div style="font-size: 1rem">
        نتمنى أن تحظى فعالياتنا بإعجابك وتعمّ الفرح والترفيه. يمكنك تسجيل الدخول في المرات القادمة
        باستخدام رقم هاتفك الجوال أو عنوان بريدك الإلكتروني، حيث ستتلقى رقم دخول مؤقت. أهلاً بك في عائلتنا!
    </div>

@endsection