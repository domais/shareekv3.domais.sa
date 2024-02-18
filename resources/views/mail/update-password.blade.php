@extends('mail.layout')

@section('content')

    <p>
        مرحبًا {{$name}}
    </p>

    <p>لقد تم تغيير كلمة المرور الخاصة بك نظرًا لتحديث البيانات والحماية المستمرة</p>

    <h3>البريد الإلكتروني الخاص بك هو
        <mark>{{$email}}</mark>
    </h3>

    <h3>كلمة المرور الجديدة هي
        <mark>{{$password}}</mark>
    </h3>

    <button>
        <a href="{{route('login')}}">تسجيل الدخول</a>
    </button>


@endsection
