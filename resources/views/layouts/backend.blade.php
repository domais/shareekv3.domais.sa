<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>الشريك الأدبي</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    
</head>
<body class="--light--">
    <!-- Note for Rahmani:
        BODY عشان تخلي النافبار غامق ، لازم يكون الـ 
        light عليه كلاس اسمه 
        لو شلت الـ -- -- راح يتحول إلى التاني
    -->
    @livewire('includes.navbar')











    <div class="container wrapper mt-3">

        <!-- Rahmani: all pages goes here -->
        {{$slot}}

    </div>














    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container" dir="ltr">
        <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-body-secondary">© {{date('Y')}} Domais LLC</span>
        </div>
    
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fab fa-telegram-plane"></i></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fab fa-whatsapp"></i></a></li>
        </ul>
    </footer>


    @stack('scripts')
        
</body>
</html>