@extends('mail.layout')

@section('content')



    <p>أ.{{$data['user']['name']}} ، نفيدك بأن حالة طلبك رقم ({{$data['permit']['order_number']}}) بعنوان</p>

    <h3>{{$data['permit']['title']}}</h3>

    <p>قد تحولت حالته إلى</p>

    <h1>{{$data['status']['name']}}</h1>


@endsection