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
					<a class="link-body-emphasis text-decoration-none" href="{{route('permit.index')}}">
						{{$text_bread_crumb === "permit" ? 'التصاريح' : ($text_bread_crumb === "support" ? 'الدعم' : 'المبادرات')}}					</a>
				</li>

				@if($is_show_page)
				<li class="breadcrumb-item active" aria-current="page">عرض معلومات

					{{$text_bread_crumb === "permit" ? 'التصريح' : ($text_bread_crumb === "support" ? 'الدعم' : 'المبادرة')}}					</a>

					 رقم {{$permit->order_number}}</li>
				@else

				<li class="breadcrumb-item active" aria-current="page">
					@if ($this->permit)
					تعديل معلومات التصريح رقم {{$this->permit->order_number}}

					@else
					إنشاء تصريح جديد
					@endif
				</li>

				@endif
			</ol>
			<div class="links">
				@if (!$permit)
				<button class="btn btn-outline-secondary me-2" wire:click="store(1)">
					حفظ
					@if(empty($draft)) كمسودة @endif
				</button>

				@endif
				@if ($this->is_show_page && auth()->user()->hasRole('SuperAdmin') )

				<a class="btn btn-warning"
							data-bs-toggle="modal"
							data-bs-target="#assign-Admin-Modal">
							إسناد لموظف آخر
						</a>

				@endif

				@if (!$this->is_show_page && auth()->user()->hasRole('SuperAdmin') )
					<button class="btn btn-secondary" wire:click="updatePermit" wire:loading.attr="disabled">إرسال الطلب</button>
				@endif
				@if ($this->is_show_page && auth()->user()->hasRole('SuperAdmin') && $this->permit->status_id < 5)
				<a class="link-body-emphasis text-decoration-none" href="{{route('permit.edit',['order_number' => $this->permit->order_number])}}">
					التعديل الشامل
				</a>

				@endif


				@if (!$this->is_show_page && auth()->user()->hasRole('User') )
					<button class="btn btn-secondary" wire:click="store(2)" wire:loading.attr="disabled">إرسال الطلب</button>
				@endif
				@if ($this->is_show_page && $this->permit && $this->permit->status_id < 5 && (auth()->user()->hasRole(['SuperAdmin']) || (havePermission(auth()->user(),'permit-update'))))
				   @if ($this->permit->status_id == 2)
						<button class="btn btn-secondary" onclick="Act_AdminStartStudy({{$this->permit->id}},'Permit')"
							wire:loading.attr="disabled">إبدأ الدراسة
						</button>
				   @endif
				   @if ($this->permit->status_id == 3)
						<button class="btn btn-secondary" onclick="IntialApproved({{$this->permit->id}},'Permit')"
							wire:loading.attr="disabled">
							موافقة أولية
						</button>
						<button class="btn btn-brand" onclick="Act_AdminRejectPermit({{$this->permit->id}},'Permit')"
							wire:loading.attr="disabled">
							رفض
						</button>
				   @endif
				   @if ($this->permit->status_id == 4)
						<a class="btn btn-warning"
							data-bs-toggle="modal"
							data-bs-target="#Permit-Admin-Final-Approval-Modal">تشغيل</a>
						<button class="btn btn-secondary" onclick="Act_ApproveWithoutPirmet({{$this->permit->id}},'Permit')"
						wire:loading.attr="disabled">
							تشغيل بدون تصريح
						</button>
				   @endif
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


	@if (!$this->is_show_page && $this->permit && $this->permit->status_id == 10)
		<div class="alert alert-warning" role="alert">
			<strong>
				 الملاحظات الإدارية
			</strong>
			<br>
			{{$this->permit->history->last()->descreption}}
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
					@if ($is_show_page)
						@if (count($this->speakers) != 0)
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="speakers-tab" data-bs-toggle="tab" data-bs-target="#speakers-tab-pane" type="button" role="tab" aria-controls="speakers-tab-pane" aria-selected="false">المتحدثون</button>
							</li>
						@endif
					@else
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="speakers-tab" data-bs-toggle="tab" data-bs-target="#speakers-tab-pane" type="button" role="tab" aria-controls="speakers-tab-pane" aria-selected="false">المتحدثون</button>
						</li>
					@endif
					@if ($is_show_page)
						@if (count($this->partnerships) != 0)
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="partnership-tab" data-bs-toggle="tab" data-bs-target="#partnership-tab-pane" type="button" role="tab" aria-controls="partnership-tab-pane" aria-selected="false">الشراكات</button>
							</li>
							@endif
					@else
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="partnership-tab" data-bs-toggle="tab" data-bs-target="#partnership-tab-pane" type="button" role="tab" aria-controls="partnership-tab-pane" aria-selected="false">الشراكات</button>
						</li>
					@endif

					@if ($this->permit && $this->permit->event && $this->permit->event->status_id >= 5)

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

				@if ($this->permit && $this->permit->event && $this->permit->event->status_id >= 5)

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
				@if ($this->histories)


				@foreach ($this->histories->reverse() as $item)
					<li>
						<div>
							<span>
								<small>{{$item->status->name}}</small><br>
								 {{$item->user->name}}
								 @if ($item->user->hasRole('User'))
									 / {{$item->user->owner->name}}
								 @endif
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
				@endif

			</ul>
		</div>

		    <!-- مودال اعتماد تشغيل فعالية -->
			<div wire:ignore class="modal fade" id="Permit-Admin-Final-Approval-Modal" tabindex="-1">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5">تشغيل</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<div class="row mt-2">
								<div class="col-3 d-flex align-items-center">رقم التصريح</div>
								<div class="col-8"><input type="text" wire:model="permitNumber" class="form-control" id="PermitNumber"></div>
							</div>
							<div class="row mt-4">
								<div class="col-3 d-flex align-items-center">ملف التصريح</div>
								<div class="col-8"><input type="file" wire:model="permitFile" class="form-control" id="PermitPDF" accept="image/png, image/jpeg, image/jpg"></div>                </div>
						<div class="modal-footer">
							<button type="button" class="btn btn-light" data-bs-dismiss="modal">إلغاء</button>
							<button type="button" class="btn btn-success" wire:click="approvePermit" wire:loading.attr="disabled">اعتماد</button>                </div>
					</div>
				</div>
			</div>
		</div>

		@if ($this->is_show_page && auth()->user()->hasRole('SuperAdmin'))

						    <!-- مودال   تعديل الادمين -->
							<div wire:ignore class="modal fade" id="assign-Admin-Modal" tabindex="-1">
								<div class="modal-dialog modal-dialog-centered">
									<div class="modal-content">
										<div class="modal-header">
											<h1 class="modal-title fs-5">تعديل الأدمين</h1>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											<div class="row mt-2">
												<div class="col-3 d-flex align-items-center">إختيار موظف</div>
												<div class="col-8">
													<select class="form-select" id="partnerClass" wire:model.live="newAdmin">
														<option selected disabled value="">إختر ...</option>
														@foreach (settings('admins') as $admin)
															<option value="{{$admin->id}}">{{$admin->name}}</option>
														@endforeach
													</select>
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-light" data-bs-dismiss="modal">إلغاء</button>
												<button type="button" class="btn btn-success" wire:click="changeAdmin" wire:loading.attr="disabled">موافق</button>
											</div>
										</div>
								</div>
							</div>
						</div>

		@endif


	</div><!-- /row -->
</div>
