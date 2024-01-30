<!DOCTYPE html>
<html dir="rtl">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Mail</title>
	<style>
        *{font-family: Arial, sans-serif !important;}
		body,html{padding: 0;margin: 0;background: #ede8e2 !important;}
        mark{background-color: #2f1b6d;display: inline-block;padding: 3px}
	</style>
</head>
<body>
	<div style="padding:25px 10px;width:calc(100% - 20px);background-color: #ede8e2;text-align: center;border-radius: 6px;">
		<a href="{{ url('/') }}"><img style="max-height: 77px;" src="{{asset('img/logoLight-aoGEXfnA.png')}}" alt="logo"></a>
		<div style="padding: 15px;background-color: #fff;min-width: 290px;max-width:550px;border-radius: 10px;margin:40px auto;text-align: center">

			@yield('content')

		</div>
		<div style="margin: 15px 0; text-align: center;font-size:13px;color:#7c7f85">جسر الثقافة © {{date('Y')}}</div>
	</div>

	{{-- <div style="padding:10px 5px;text-align: center !important" dir="rtl">																				<!-- Rahmani: fix this 👇 email -->
		<span dir="rtl" style="font-size:11px;color:#c4b6a4;font-family:tahoma !important">هذا البريد الإلكتروني يصلك على عنوانك البريدي <a style="color:#c4b6a4;text-decoration:none">{{ $data['user']['email'] }}</a> المسجل لدينا لأنك قمت (او أحد آخر) بالتسجيل في النظام الخاص بنا وكل الرسائل التي ستستلمها منا ستكون رسائل مهمة لها علاقة مباشرة بما قمت بالتسجيل به إما لإعلامك بمستجدات طلبك و/أو نحتاج منك إتخاذ آكشن يخص طلبك لدينا ، نعدك بأننا لن نقوم بإرسال رسائل دعائة أو تروجية أبداً ، ونحترم تماماً خصوصيتك ووقتك ويمكنك في أي وقت إزالة بريدك من قائمتنا في أي وقت.</span>
		<span dir="ltr" style="font-size:11px;color:#c4b6a4;font-family:tahoma !important">This email arrived at your email address <a style="color:#c4b6a4;text-decoration:none">{{ $data['user']['email'] }}</a> registered with us because you (or someone else) registered in the system. Our message and all the messages you will receive from us will be important messages that are directly related to what you have registered with, either to inform you of developments in your request and/or we need you to take action regarding your request with us. We promise that we will never send advertising or promotional messages, and we fully respect your privacy and time, and you can at any time. The time to remove your mail from our list is at any time.</span>
	</div> --}}
</body>
</html>
