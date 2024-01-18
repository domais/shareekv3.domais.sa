@extends('mail.layout')

@section('content')

    <p>
        مرحبًا {{$name}}
    </p>

    <p>نود أن نشكرك علي اهتمامك بفعاليات مبادرة الشريك الأدبي

        يسرنا أن نقدم لك تأكيد تسجيلك ونتطلع إلي لقاءك في الفعالية.

        تفاصيل التسجيل:
    </p>

    <p>لقد تم تغيير كلمة المرور الخاصة بك نظرًا لتحديث البيانات والحماية المستمرة</p>

    <img src="{{$event['image']}}" alt="{{$event['name']}}" />

    <ul>
        <li>التاريخ: <strong>{{$event['name']}}</strong></li>
        <li>المكان: <strong>{{$event['date']}}</strong></li>
        <li>اسم الفعالية: <strong>{{$event['partner']}}, {{$event['partner_zone']}} [Google Map]({{$event['location']}})</strong></li>
    </ul>

    <p>
    نتطلع إلى رؤيتك في الفعالية ونتمنى لك تجربة ممتعة ومفيدة.
    </p>

    <a href="https://localhost:8000/events/" >
    تفاصيل الفعالية
    </a>


@endsection
