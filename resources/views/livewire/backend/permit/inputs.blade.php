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

	<div class="col-9"
		x-data="{errors: @entangle('errors').live}"
		x-init="
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
		"
	>

		<ul class="nav nav-tabs" id="eventWizard" role="tablist">
			<li class="nav-item" role="presentation">
				<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">المعلومات العامة</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">المكان</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">المتحدثون</button>
			</li>
			
			<li class="nav-item" role="presentation">
				<button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">الشراكات</button>
			</li>
		</ul>
		


		<div class="tab-content" id="myTabContent">
	
			<div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
				<x-backend.permit.inputs.step-one />
			</div><!-- نهاية محتوى التاب -->
			
			<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
			</div><!-- نهاية محتوى التاب -->

			<div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0" >
				<x-backend.permit.inputs.step-three />
			</div><!-- نهاية محتوى التاب -->
				<div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
				</div><!-- نهاية محتوى التاب -->


		</div> 



	</div>



</div>
