<!DOCTYPE html>
<html dir="rtl">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Mail</title>
	<style>
        *{font-family: Arial, sans-serif !important;}
		body,html{padding: 0;margin: 0;background: #062E3A !important;}
        mark{background-color: #f0fc91;display: inline-block;padding: 3px}
	</style>
</head>
<body>
	<div style="padding:25px 10px;width:calc(100% - 20px);background-color: #062E3A;text-align: center;border-radius: 6px;">
		<a href="https://domais.sa"><img style="max-height: 77px;" src="{{asset('img/logoDark.png')}}" alt="logo"></a>
		<div style="padding: 15px;background-color: #fff;min-width: 290px;max-width:550px;border-radius: 10px;margin:40px auto;text-align: center">

			@yield('content')

		</div>
		<div style="margin: 15px 0; text-align: center;font-size:13px;color:#7c7f85">Domais LLC © {{date('Y')}}</div>
	</div>

	<div style="padding:10px 5px;text-align: center !important" dir="rtl">																				<!-- Rahmani: fix this 👇 email -->
		<span dir="rtl" style="font-size:11px;color:#355d69;font-family:tahoma !important">هذا البريد الإلكتروني يصلك على عنوانك البريدي <a style="color:#355d69">m@domais.sa</a> المسجل لدينا لأنك قمت (او أحد آخر) بالتسجيل في النظام الخاص بنا وكل الرسائل التي ستستلمها منا ستكون رسائل مهمة لها علاقة مباشرة بما قمت بالتسجيل به إما لإعلامك بمستجدات طلبك و/أو نحتاج منك إتخاذ آكشن يخص طلبك لدينا ، نعدك بأننا لن نقوم بإرسال رسائل دعائة أو تروجية أبداً ، ونحترم تماماً خصوصيتك ووقتك ويمكنك في أي وقت إزالة بريدك من قائمتنا في أي وقت.</span>
	</div>
</body>
</html>