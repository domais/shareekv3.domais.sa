@extends('mail.layout-app')

@section('content')


    <h4>السلام عليكم ورحمة الله وبركاته</h4>
    <h4>الزائر الكريم</h4>


    <p>أ.{{$data['user']['name']}} ، نفيدك بأن حالة طلبك رقم ({{$data['permit']['order_number']}}) بعنوان</p>

    <h3>{{$data['permit']['title']}}</h3>

    <p>قد تحولت حالته إلى</p>

    <h1>{{$data['status']['name']}}</h1>


@endsection
