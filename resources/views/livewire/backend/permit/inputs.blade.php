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
				@if($is_show_page)
				<li class="breadcrumb-item active" aria-current="page">عرض معلومات التصريح رقم {{$permit->order_number}}</li>
				@else
				<li class="breadcrumb-item active" aria-current="page">إنشاء تصريح جديد</li>
				@endif
			</ol>
			<div class="links">
				@if (!$permit)
				<button class="btn btn-outline-secondary me-2" wire:click="store(1)">
					حفظ
					@if(empty($draft)) كمسودة @endif
				</button>
					
				@endif
				@if (!$this->is_show_page && auth()->user()->hasRole('User') )
					<button class="btn btn-brand" wire:click="store(2)" wire:loading.attr="disabled">إرسال الطلب</button>				
				@endif
			</div>
		</div>
	</nav>
	@if (auth()->user()->hasRole('SuperAdmin') && $is_show_page)

	<div class="container my-2 d-none">
		<div class="row">
			<div class="col-10">
				<div class="card" style="">
					<div class="row g-0">
						<div class="col-2 p-3 align-items-center">
							@if ($permit->user->owner->image)
							<img src="https://nextlevel.ams3.digitaloceanspaces.com/{{$permit->user->owner->image->path}}" class="w-100">

							@else
							<img src="{{asset('img/default_avatar.png')}}" class="w-100">	
							@endif								
						</div>
						<div class="col-10">
							<div class="card-body">
								<h4>معلومات الشريك</h4>
								<h5 class="card-title">إسم الشريك : {{$permit->user->owner->name}}</h5>
								<ul class="card-text">
									<li>البريد الإلكتروني: {{$permit->user->email}}</li>
									<li>الهاتف: {{$permit->user->phone}}</li> <!-- Make sure phone attribute is available -->
								</ul>								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		
	@endif



	<div class="row" x-data="{errors: @entangle('errors').live,is_show_page: @entangle('is_show_page').live  ,start_date: '', end_date: ''}" x-init="
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
			<div class="{{ $is_show_page ? 'col-9' : 'col-12' }}" wire:ignore>
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
					<x-backend.permit.inputs.step-four />
				</div><!-- نهاية محتوى التاب -->

			</div>
		</div>
		<!-- Rahmani: 👇🏻 ممن هنا d-none شيل update أو create إذا كان الصفحة  -->
		<div class="col-3 event-history {{$is_show_page ? '' : 'd-none'}}">
			<h1>مراحل الطلب</h1>
			<ul class="list-group">
				<!-- Rahmani: م.جمال ، اعرض الهيستوري بشكل عكسي بحيث القديم يكون تحت والجديد يكون فوق -->
				@foreach ($this->histories as $item)
					<li>
						<div>
							<span>
								<small>{{$item->status->name}}</small><br>
								 {{$item->user->name}}
							</span>
							<span class="d-block date">
								{{ $item->created_at->format('Y-m-d') }}<br>
								{{ $item->created_at->format('h:i') }} {{ $item->created_at->format('A') == 'PM' ? 'م' : 'ص' }}
							</span>				
						</div>
						@if ($item->descreption)
							<div class="edit">{{$item->descreption}}</div>
						@endif
					</li>
				@endforeach

			</ul>
		</div>

	</div><!-- /row -->
</div>