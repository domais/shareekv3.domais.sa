@extends('mail.layout')

@section('content')

    <p>
        مرحبًا {{$name}}
    </p>

    <p>نود أن نشكرك علي اهتمامك بفعاليات مبادرة الشريك الأدبي

        يسرنا أن نقدم لك تأكيد تسجيلك ونتطلع إلي لقاءك في الفعالية.

        تفاصيل التسجيل:
    </p>

    <img src="{{$image}}" alt="{{$event->name}}" />

    <ul style="text-right">
        <li>اسم الفعالية: <strong>{{$event->name}}</strong></li>
        <li>التاريخ: <strong>{{$event->start_date}}</strong></li>
        <li>المكان: <strong>{{optional($event->user->owner)->name}}, {{optional($event->user->owner)->city}} <a target="_blank" href="https://maps.google.com/?q={{$event->user->owner->lat . ',' . $event->user->owner->lng}}"></a></strong></li>
    </ul>

    <p>
    نتطلع إلى رؤيتك في الفعالية ونتمنى لك تجربة ممتعة ومفيدة.
    </p>

    <a href="{{config('app.url') . '/i/events/' . $event->id}}" class="btn btn-primary">
    تفاصيل الفعالية
    </a>


@endsection
