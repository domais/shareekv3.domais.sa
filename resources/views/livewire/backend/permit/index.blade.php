<div>


	<nav aria-label="breadcrumb" class="my-5">
		<div class="topbar p-3 bg-body-tertiary rounded-3 w-100">
			<ol class="breadcrumb breadcrumb-chevron m-0">
				<li class="breadcrumb-item">
					<a class="link-body-emphasis" href="#">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li class="breadcrumb-item">
					<a class="link-body-emphasis text-decoration-none" href="{{route('permit.index')}}">التصاريح</a>
				</li>
				<li class="breadcrumb-item active" aria-current="page">استعراض كقوائم</li>
			</ol>
			<div class="links">
				<a class="btn btn-secondary me-2" href="#" role="button">عرض كجدول</a>
				<a class="btn btn-brand" href="{{route('permit.create')}}">طلب تصريح</a>
			</div>
		</div>
	</nav>







	<div class="kanban">

		<div class="column">
			<div class="head">
				<div class="fw-bold">مسودة <span>1</span></div>
			</div>
			<div class="body">
				<div class="item">
					<div class="name">
						<div>قراءة كتاب (محاط بالحمقى)</div>
						<small>عبدالله الفوزان</small>
						<!-- Rahmani: هنا يظهر اسم اليوزر إللي أنشأ الطلب -->
					</div>
					<div class="type mb-3">القصص > الخيال العلمي</div>
					<div class="number">
						<span>رقم الطلب : 230075869</span>
						<small>قبل 11 دقيقة</small>
					</div>
					<div class="d-flex justify-content-between mt-3">
						<a class="btn btn-secondary" href="#">إكمال</a>
						<a class="btn btn-outline-danger" onclick="DeletePermit(1)">حذف</a>
					</div>
				</div><!-- /item -->
			</div><!-- /body -->
		</div><!-- /column -->







		<div class="column">
			<div class="head">
				<div class="fw-bold">معاد للتعديل <span class="bg-danger text-light">2</span></div>
			</div>
			<div class="body">
				<div class="item">
					<div class="name">
						<div>قراءة كتاب (محاط بالحمقى)</div>
						<small>عبدالله الفوزان</small>
						<!-- Rahmani: هنا يظهر اسم اليوزر إللي أنشأ الطلب -->
					</div>
					<div class="type mb-3">القصص > الخيال العلمي</div>
					<div class="number">
						<span>رقم الطلب : 230075869</span>
						<small>قبل 11 دقيقة</small>
					</div>
					<div class="my-3 alert alert-warning p-2">هنا تظهر ملاحظات المشرف ليقوم الشريك بتعديلها</div>
					<div class="d-flex justify-content-between mt-3">
						<a class="btn btn-secondary" href="#">تعديل</a>
						<a class="btn btn-outline-danger" onclick="DeletePermit(1)">حذف</a>
					</div>
				</div><!-- /item -->
			</div><!-- /body -->
		</div><!-- /column -->







		<div class="column">
			<div class="head">
				<div class="fw-bold">تحت الدراسة <span>1</span></div>
			</div>
			<div class="body">
				<div class="item">
					<div class="name">
						<div>قراءة كتاب (محاط بالحمقى)</div>
						<small>عبدالله الفوزان</small>
						<!-- Rahmani: هنا يظهر اسم اليوزر إللي أنشأ الطلب -->
					</div>
					<div class="type mb-3">القصص > الخيال العلمي</div>
					<div class="number">
						<span>رقم الطلب : 230075869</span>
						<small>قبل 11 دقيقة</small>
					</div>
				</div><!-- /item -->
			</div><!-- /body -->
		</div><!-- /column -->







		<div class="column">
			<div class="head">
				<div class="fw-bold">موافق عليها مبدأياً  <span>1</span></div>
			</div>
			<div class="body">
				<div class="item">
					<div class="name">
						<div>قراءة كتاب (محاط بالحمقى)</div>
						<small>عبدالله الفوزان</small>
						<!-- Rahmani: هنا يظهر اسم اليوزر إللي أنشأ الطلب -->
					</div>
					<div class="type mb-3">القصص > الخيال العلمي</div>
					<div class="number">
						<span>رقم الطلب : 230075869</span>
						<small>قبل 11 دقيقة</small>
					</div>
				</div><!-- /item -->
			</div><!-- /body -->
		</div><!-- /column -->


	</div>






</div>








<script>
	function DeletePermit(id) {
		Swal.fire({
			title: 'هل أنت متأكد؟',
			icon: 'question',
			html: 'سيتم حذف التصريح ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟',
			showCancelButton: true,
			confirmButtonColor: '#e33e41',
			cancelButtonColor: '#ccc',
			cancelButtonText:'إلغاء',
			confirmButtonText: 'نعم احذف الطلب'
		}).then((result,id) => {
			if (result.isConfirmed) {
						Swal.fire({
							title:'تم حذف الطلب بنجاح',
							text: 'سيتم تحويلك لصفحة التصاريح خلال ثواني',
							icon: "success",
							timerProgressBar: true,
							showConfirmButton: false,
							timer:4000					
						})
						setTimeout(() => {
							// window.location.href = "{{route('permit.index')}}";
							window.location.reload
						},4000)
				// axios.post("https://google.com").then(function (response) {
				// 	// Rahmani : true ارسل الامر للباك إند ولمن تتم العملية رجع
				// 	if(response){

				// 	}else{
				// 		console.log(error);
				// 	}
				// })
				// .catch(function (error) {
				// 	console.log(error);
				// });
			}
		})
	}
</script>