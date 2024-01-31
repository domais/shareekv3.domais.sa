<div>
	<nav aria-label="breadcrumb" class="my-5">
		<div class="topbar py-3 bg-body-tertiary rounded-3 w-100">
			<ol class="breadcrumb breadcrumb-chevron m-0">
				<li class="breadcrumb-item">
					<a class="link-body-emphasis" href="#">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li class="breadcrumb-item">
					@if (Str::contains(Route::currentRouteName(), 'event'))
						<a class="link-body-emphasis text-decoration-none" href="{{route('event.index')}}">المبادرات</a>
					@elseif (Str::contains(Route::currentRouteName(), 'permit'))
						<a class="link-body-emphasis text-decoration-none" href="{{route('permit.index')}}">التصاريح</a>
					@elseif (Str::contains(Route::currentRouteName(), 'support'))
						<a class="link-body-emphasis text-decoration-none" href="{{route('support.index')}}">دعم الشريك</a>
					@endif
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
	@if ($this->is_show_page &&  $this->permit->from_old_db == 1)

		<div class="row">
			<div class="col-9">
				<div class="alert alert-warning" role="alert">
					تنبيه مهم : تم سحب هذه البيانات من النظام القديم ، قد لاتظهر جميع البيانات بشكل كامل				</div>
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
		<!-- : col-9 ماعدا ذلك خليه col-12 👇🏻 خلي هذا update أو create إذا كان الصفحة  -->
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

					@if ($this->permit && $this->permit->event)

						<li class="nav-item" role="presentation">
							<button class="nav-link" id="guest-tab" data-bs-toggle="tab" data-bs-target="#guest-tab-pane" type="button" role="tab" aria-controls="guest-tab-pane" aria-selected="false">قائمة الحضور</button>
						</li>
					@endif
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

				@if ($this->permit && $this->permit->event)

				<div class="tab-pane fade" id="guest-tab-pane" role="tabpanel" aria-labelledby="guest-tab" tabindex="0">
					<x-backend.permit.inputs.step-five />
				</div><!-- نهاية محتوى التاب -->
					
				@endif

			</div>
		</div>
		<!-- : 👇🏻 ممن هنا d-none شيل update أو create إذا كان الصفحة  -->
		<div class="col-3 event-history {{$is_show_page ? '' : 'd-none'}}">
			<h1>مراحل الطلب</h1>
			<ul class="list-group">
				<!-- : م.جمال ، اعرض الهيستوري بشكل عكسي بحيث القديم يكون تحت والجديد يكون فوق -->
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
