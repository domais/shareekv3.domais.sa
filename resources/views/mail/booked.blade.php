@extends('mail.layout')

@section('content')

    <h3>
        مرحبًا {{$name}}
    </h3>

    <p>نود أن نشكرك علي اهتمامك بفعاليات مبادرة الشريك الأدبي

        يسرنا أن نقدم لك تأكيد تسجيلك ونتطلع إلي لقاءك في الفعالية.

        تفاصيل التسجيل:
    </p>

    <img src="{{$image}}" alt="{{$event->title}}" width="320">

    <ul style="text-align: right" dir="rtl">
        <li>اسم الفعالية: <strong>{{$event->title}}</strong></li>
        <li>التاريخ: <strong>{{$event->start_date}}</strong></li>
        <li>المكان: <strong>{{optional($event->user->owner)->name}}, {{optional($event->user->owner)->city}} <a target="_blank" href="https://maps.google.com/?q={{$event->user->owner->lat . ',' . $event->user->owner->lng}}">Google map</a></strong></li>
    </ul>

    <p>
    نتطلع إلى رؤيتك في الفعالية ونتمنى لك تجربة ممتعة ومفيدة.
    </p>

    <a href="{{config('app.url') . '/i/events/' . $event->id}}" class="btn btn-primary">
    تفاصيل الفعالية
    </a>


@endsection
