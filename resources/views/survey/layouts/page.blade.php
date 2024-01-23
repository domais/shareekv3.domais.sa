<!DOCTYPE html>
<html lang="ar" dir="rtl" class="h-full">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>الشريك الأدبي</title>
	@vite(['resources/scss/tailwind.scss', 'resources/js/app.js'])
    @stack('styles')
</head>

<body class="h-full">
<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">

        @yield('content')
        </div>
	@stack('scripts')
</body>

</html>
