@extends('mail.layout')

@section('content')

<p>مرحبا</p>
<p> الرمز الخاص بك لإعادة تعيين كلمة السر 
    <strong>
        {{$code}}    
    </strong>
</p>



@endsection
