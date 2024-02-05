@extends('mail.layout')

@section('content')


    <h4>السلام عليكم ورحمة الله وبركاته</h4>
    <h4>الزائر الكريم</h4>


    <p>أ.{{$data['user']['name']}} ، نفيدك بأن حالة طلب الدعم رقم ({{$data['permit']['order_number']}}) بعنوان</p>

    <h3>{{$data['permit']['title']}}</h3>

    <p>قد تحولت حالته إلى</p>

    <h1>مرفوضة </h1>

    <p>
        <strong>السبب:</strong>
        {{$data['reject_reason']}}
    </p>


@endsection
