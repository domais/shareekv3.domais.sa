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
				<li class="breadcrumb-item active" aria-current="page">إنشاء تصريح جديد</li>
			</ol>
			<div class="links">
				<a class="btn btn-outline-secondary me-2" href="#" role="button">حفظ كمسودة</a>
				<a class="btn btn-brand" href="{{route('permit.create')}}">إرسال الطلب</a>
			</div>
		</div>
	</nav>


	<div class="row" x-data="{errors: @entangle('errors').live}" x-init="
		$watch('errors', value => {

			if (value.length > 0) {
				const errorMessage = value.join('<br>');
				Swal.fire({
					icon: 'error',
					title: 'خطأ في التحقق',
					showConfirmButton: false,
					html: errorMessage  // Use 'html' to display formatted text
				});
				errors = [];
			}
		});
	">
		<!-- Rahmani: col-9 ماعدا ذلك خليه col-12 👇🏻 خلي هذا update أو create إذا كان الصفحة  -->
		<!-- <div class="col-9"> -->
		<div class="col-12">
			<ul class="nav nav-tabs" id="eventWizard" role="tablist">
				<li class="nav-item" role="presentation">
					<button class="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general-tab-pane" type="button" role="tab" aria-controls="general-tab-pane" aria-selected="true">المعلومات العامة</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="location-tab" data-bs-toggle="tab" data-bs-target="#location-tab-pane" type="button" role="tab" aria-controls="location-tab-pane" aria-selected="false">المكان</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="speakers-tab" data-bs-toggle="tab" data-bs-target="#speakers-tab-pane" type="button" role="tab" aria-controls="speakers-tab-pane" aria-selected="false">المتحدثون</button>
				</li>

				<li class="nav-item" role="presentation">
					<button class="nav-link" id="partnership-tab" data-bs-toggle="tab" data-bs-target="#partnership-tab-pane" type="button" role="tab" aria-controls="partnership-tab-pane" aria-selected="false">الشراكات</button>
				</li>
			</ul>



			<div class="tab-content" id="myTabContent">

				<div class="tab-pane fade show active" id="general-tab-pane" role="tabpanel" aria-labelledby="general-tab" tabindex="0">
					<x-backend.permit.inputs.step-one />
				</div><!-- نهاية محتوى التاب -->

				<div class="tab-pane fade" id="location-tab-pane" role="tabpanel" aria-labelledby="location-tab" tabindex="0">
					<x-backend.permit.inputs.step-two />
				</div><!-- نهاية محتوى التاب -->

				<div class="tab-pane fade" id="speakers-tab-pane" role="tabpanel" aria-labelledby="speakers-tab" tabindex="0">
					<x-backend.permit.inputs.step-three />
				</div><!-- نهاية محتوى التاب -->

				<div class="tab-pane fade" id="partnership-tab-pane" role="tabpanel" aria-labelledby="partnership-tab" tabindex="0">

				</div><!-- نهاية محتوى التاب -->

			</div>
		</div>
		<!-- Rahmani: 👇🏻 ممن هنا d-none شيل update أو create إذا كان الصفحة  -->
		<div class="col-3 event-history d-none">
			<h1>مراحل الطلب</h1>
			<ul class="list-group">
				<!-- Rahmani: م.جمال ، اعرض الهيستوري بشكل عكسي بحيث القديم يكون تحت والجديد يكون فوق -->
				<li>
					<div>
						<span>
							<small>اسم المرحلة</small><br>
							الشريك / الآدمن
						</span>
						<span class="d-block date">2024-12-28<br>12:33PM</span>
					</div>
					<div class="edit">هنا التعديلات لو في تعديلات</div>
				</li>
			</ul>
		</div>
	</div><!-- /row -->
</div>