<div class="container" x-data="{  errors: @entangle('validationErrors')  }" x-init="
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
		<a class="btn btn-success float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">إنشاء تذكرة</a>
	</h1>
	<p class="mb-4 clearfix">سيقوم فريقنا بخدمتك من خلال فتح تذكرة دعم فني وسيقوم فريقنا بالرد عليها ويمكنك متابعتها ، هذا النص يحتاج إلى تعديل لكلام أفضل</p>
	<div class="listContainer">



			
		@if(count($this->tickets) > 0)
			@foreach($this->tickets as $ticket)
			<div><a href="">{{$ticket->subject}}</a></div>
			@endforeach
		@else
		<div class="w-100 text-center">
			<img src="{{asset('img/404.png')}}" class="mx-auto" width="400"><br><br>
			لايوجد لديك أي تذاكر حتى الآن
		</div>
		@endif
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
						رقم التصريح 
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
						<input type="file" class="form-control text-center" multiple wire:model="form.files">
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
</div>