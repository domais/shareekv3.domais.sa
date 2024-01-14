@extends('mail.layout')

@section('content')

<p>
    مرحبًا {{$name}}}
</p>

<p>
    رمز تسجيل الدخول الخاص بك في موقع جسر الثقافة هو
    عزيزي المستخدم،
</p>

<div style="font-size: 2rem; font-weight: bold;letter-spacing: 1rem;">
    {{$code}}
</div>


@endsection
