<!DOCTYPE html>
<html lang="ar" dir="rtl" class="guest">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>الشريك الأدبي</title>

	@vite(['resources/scss/app.scss', 'resources/js/app.js'])


</head>

<body>
	<div class="w-100 px-4 py-5 px-md-5 text-center text-lg-start">
		<div class="container">
			<div class="row gx-lg-6 align-items-center mb-5">
				<div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">

					<img src="{{asset('img/logoDark.png')}}" class="mb-5" width="300" />

					<h1 class="my-5 fs-2 text-light">أهلا بصناع الثقافة والأدب !</h1>

					<p class="mb-4 opacity-70 text-light">
						هنا كلام لطيف ممكن نستغله في تحفيز مستخدمي النظام<br>او اعلانات أو اي شي آخر مثل حكة او مقولة مأثورة والحِكم
					</p>
				</div>

				<div class="col-lg-6 mb-6 mb-lg-0 position-relative">
					<div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
					<div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

					<div class="card bg-glass">
						<div class="card-body px-4 py-4 px-md-5 text-center">
							<form>
								<h3 class="fs-3 fw-bold text-center">دخول الأعضاء</h3>

								<input placeholder="البريد الإلكتروني أو رقم الجوال" autocomplete="username" type="email" class="form-control my-3 text-center">		

								<input placeholder="كلمة المرور" type="text" class="form-control my-3 text-center">

								<button type="submit" class="btn btn-brand mt-4">
									دخول
								</button>
							</form>
							<div class="border-top pt-4 mt-4 d-flex justify-content-between">
								<a href="#" class="text-dark text-decoration-none">نسيت كلمة المرور؟</a>
								<a href="#" class="text-dark text-decoration-none">تسجيل حساب جديد</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="d-flex flex-wrap justify-content-between align-items-center pt-3 mt-4 container text-light" dir="ltr">
			<div class="col-md-4 d-flex align-items-center">
				<span class="mb-3 mb-md-0 text-light">Powered By <a class="text-white text-decoration-none" href="https://domais.sa" target="_tab">Domais LLC</a> © {{date('Y')}}</span>
			</div>

			<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
				<li class="ms-3"><a class="text-light" href="#"><i class="fab fa-twitter"></i></a></li>
				<li class="ms-3"><a class="text-light" href="#"><i class="fab fa-telegram-plane"></i></a></li>
				<li class="ms-3"><a class="text-light" href="#"><i class="fab fa-whatsapp"></i></a></li>
			</ul>
		</footer>

	</div>

	@stack('scripts')

</body>

</html>