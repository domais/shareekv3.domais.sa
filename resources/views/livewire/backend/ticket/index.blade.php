<div class="container" x-data="{  
	errors: @entangle('errors').live,
	tickets: @entangle('tickets').live,
	selectedTicket: {},
	openModal: function(index) {
		console.log(this.tickets[index]);
		this.selectedTicket = this.tickets[index];
	},
}" x-init="
	$watch('errors', value => {

		if (value.length > 0) {
			const errorMessage = value.join('<br>');
			Swal.fire({
				icon: 'error',
				title: 'يوجد بيانات ناقصة',
				showConfirmButton: false,
				html: errorMessage  // Use 'html' to display formatted text
			});
			errors = []
		}
	});
">
		
			<h1 class="fs-3 fw-bold mt-4 mb-2">تذاكر الدعم الفني
				@if ($this->user->hasRole('User'))
					<a class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">إنشاء تذكرة</a>
				@endif
			</h1>
	<p class="mb-4 clearfix">سيقوم فريقنا بخدمتك من خلال فتح تذكرة دعم فني وسيقوم  بالرد عليها ويمكنك متابعتها من خلال هذه الصفحة </p>
	<div class="listContainer">




		
			<div class="row g-2 g-lg-3">
				<div class="col-12 col-lg-6">
					@forelse($this->tickets as $index => $ticket)
						<div class="notification-list notification-list--unread">
							<div class="notification-list_content">
								<div class="notification-list_detail">
									<h3 class="fw-bold">
										<a role="button" href="#" @click="openModal({{ $index }})" data-bs-toggle="modal" data-bs-target="#ModalShow">{{ $ticket['subject'] }}</a>
									</h3>
									@if (auth()->user()->hasRole('SuperAdmin'))
										<p class="text-muted">
											{{$ticket['user']['name']}}
										</p>
									@endif
									@if (!empty($ticket['file']))
									
										<p>
											<a href="{{'storage/'.$ticket['file'][0]['path']}}" target="_blank" class="text-decoration-none">عرض المرفقات</a>
										</p>
									@endif
								</div>
							</div>
							<time class="notification-list_date" datetime="">{{\Carbon\Carbon::parse($ticket['created_at'])->diffForHumans()}}</time>
						</div>
					@empty
						<div class="w-100 text-center">
							<img src="{{asset('img/404.png')}}" class="mx-auto" width="400"><br><br>
							لايوجد لديك أي تذاكر حتى الآن
						</div>
					@endforelse
				</div>
                <div class="col-12 col-lg-6">
                {{-- FAQS Inqlucde --}}
                @include('livewire.backend.ticket.faqs')
                </div>
	</div>



    <!-- Modal -->
<div x-data="{open: ''}" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" wire:ignore>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">إنشاء تذكرة دعم فني</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>		
			</div>
			<div class="modal-body">
				<div class="row mb-2">
					<div class="col-3 d-flex align-items-center">
						نوع الطلب <span class="text-danger">*</span>
					</div>
					<div class="col-9">
						<select class="form-select ps-2 rounded" x-model="open" aria-label="type" wire:model.live="form.request_type">
							<option selected disabled value="">اخر ...</option>
							<option value="1">سؤال</option>
							<option value="2">اقتراح</option>
							<option value="3">طلب دعم إضافي</option>
							<option value="4">شكوى</option>
						</select>
					</div>
				</div>
				<div class="row mb-2">
					<div class="col-3 d-flex align-items-center">
						عنوان <span class="text-danger">*</span>
					</div>
					<div class="col-9">
						<input type="text" class="form-control rounded" wire:model="form.subject">
					</div>
				</div>
				<div class="row mb-2">
					<div class="col-3 d-flex align-items-center">
						الموضوع <span class="text-danger">*</span>
					</div>
					<div class="col-9" >
						<textarea class="form-control rounded" wire:model="form.description"></textarea>
					</div>
				</div>
				<div class="row mb-2" x-show="open == 3">
					<div class="col-3 d-flex align-items-center">
						رقم الفعالية 
						<span class="text-danger">*</span>
					</div>
					<div class="col-9">
						<input type="text" inputmode="numeric" class="form-control rounded" wire:model="form.permit_number">
					</div>
				</div>

				<div class="row mb-2 align-items-center">
					<div class="col-3 d-flex align-items-center">
						المرفقات
					</div>
					<div class="col-9">
						<input type="file" class="form-control text-center" wire:model="form.files">
					</div>

				</div>
				<div class="modal-footer">
					<a class="btn btn-light text-danger" data-bs-dismiss="modal" role="button">إلغاء</a>
					<a class="btn btn-success" role="button" wire:click="save">إرسال</a>
				</div>
			</div>
		</div>
	</div>



</div>

<!-- Modal -->
<div x-data="{  isAdmin: {{ auth()->user()->hasRole('SuperAdmin') ? 'true' : 'false' }} }" wire:ignore class="modal fade" id="ModalShow" tabindex="-1" aria-labelledby="ModalShowLabel" aria-hidden="true">
	<div class="modal-dialog">
	  <div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title" id="ModalShowLabel" x-text="selectedTicket.subject"></h5>
			 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			<p><strong>الموضوع:</strong> <span x-text="selectedTicket.subject"></span></p>
			<p><strong>الوصف:</strong> <span x-text="selectedTicket.description"></span></p>
			@if (auth()->user()->hasRole('SuperAdmin'))
			<template x-if="selectedTicket.user">
				<p><strong>المستخدم:</strong> <span x-text="selectedTicket.user.name"></span></p>
			</template>
			@endif
			<div >
				<textarea class="form-control" id="reply" rows="3" x-show="isAdmin && selectedTicket.status == 0" x-model="selectedTicket.reply" placeholder="اكتب ردا"></textarea>
				<p x-show="selectedTicket.status == 1"><strong>الرد:</strong> <span x-text="selectedTicket.reply"></span></p>
			</div>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
		  <button  @click="$dispatch('replyticket', { data: selectedTicket })"  x-show="isAdmin && selectedTicket.status == 0"  type="button" class="btn btn-primary">حفظ</button>
		</div>
	  </div>
	</div>
  </div>
</div>
