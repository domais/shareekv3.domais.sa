@extends('mail.layout')

@section('content')

<p>
    مرحباً بك مجدداً
</p>
<p>      
    كلمة المرور الجديدة الخاصة بك هي  
    <br>

    <strong>
        {{$password}}    
    </strong>
    <br>
    <p> 
        نرجو منك تغييرها بعد الدخول لحسابك مباشرة.
        شكراً لك!
        <p>
            فريق الشريك الأدبي
        </p>
    </p>

</p>



@endsection
