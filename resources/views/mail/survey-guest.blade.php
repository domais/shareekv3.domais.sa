@extends('mail.layout')

@section('content')

    <h4>السلام عليكم ورحمة الله وبركاته</h4>
    <h4>الزائر الكريم</h4>

{{-- <h3>عزيزنا {{$user['name']}}</h3>

<p>
    نأمل أن تكون قد استمتعت بفعالية ({{ $event['title'] }}) التي أُقيمت في ({{$partner['name']}})،
    نقدر اهتمامك بالفعاليات الثقافية والأدبية.
</p>

<p>
    يهمنا سماع آرائك حول الفعالية.
    يرجى النقر على الرابط أدناه لملء الاستبيان:
</p>

<p>
    <a href="{{env('APP_URL')}}/survey/guest/{{$token}}"
    >
    اضغط هنا للدخول للاستبيان</a>
</p>

<p>
    آراؤك مهمة بالنسبة لنا، وستساعدنا في تقديم تجارب أفضل في المستقبل.
</p>

<p>
    مع التحية
</p> --}}

{{-- شكراً لزيارتكم الفعالية الثقافية، نتمنى أنكم حظيتم بتجربة ثرية ووقت ماتع.

انطلاقا من حرصنا على جودة تجربتكم، نأمل منكم تعبئة الاستبيان التالي:

[رابط الاستبيان]

مع خالص الشكر والتقدير --}}

<p>
    شكراً لزيارتكم الفعالية الثقافية، نتمنى أنكم حظيتم بتجربة ثرية ووقت ماتع.
</p>

<p>
    انطلاقا من حرصنا على جودة تجربتكم، نأمل منكم تعبئة الاستبيان التالي:
</p>

<p>
    <a href="{{env('APP_URL')}}/survey/guest/{{$token}}"
    >
    اضغط هنا للدخول للاستبيان</a>
</p>

<p>
    مع خالص الشكر والتقدير
</p>

@endsection
