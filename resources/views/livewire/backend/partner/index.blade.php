<div x-data="{errors: @entangle('ValidationErrors').live}" x-init="
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



	<nav aria-label="breadcrumb" class="my-5">
		<div class="topbar p-3 bg-body-tertiary rounded-3 w-100">
			<ol class="breadcrumb breadcrumb-chevron m-0">
				<li class="breadcrumb-item">
					<a class="link-body-emphasis" href="#">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li class="breadcrumb-item">
					<a class="link-body-emphasis text-decoration-none" href="{{route('partner.index')}}">الشركاء</a>
				</li>
			</ol>
			<div class="links">
                <button type="button" class="btn btn-brand float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    أضف شريك جديد
                </button>
			</div>
		</div>
	</nav>




    <div class="container my-3">
        <div class="row">
            <div class="col-12">

                <livewire:backend.data-table.partner-table />


                <!-- Modal -->
                <div wire:ignore class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">إضافة شريك</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <div class="mb-3">
                                    <input type="text" wire:model="Pform.partner_name" class="form-control text-start" id="partnerName" placeholder="اسم المنشأة / اسم الشريك">
                                </div>
                                <div class="mb-3">
                                    <input type="text" wire:model="Uform.name" class="form-control text-start" id="userName" placeholder="الشخص المسؤول" >
                                </div>
                                <div class="mb-3">
                                    <input type="email" wire:model="Uform.email" dir="ltr" class="form-control text-start" id="userEmail" placeholder="البريد الإلكتروني">
                                </div>
                                <div class="mb-3">
                                    <input type="tel" wire:model="Uform.phone" dir="ltr" class="form-control text-start" id="userPhone" placeholder="رقم الجوال">
                                </div>
                                <div class="mb-3">
                                    <input type="text" wire:model="Pform.city" class="form-control text-start" id="partnerCity" placeholder="المدينة">
                                </div>
                                <div class="mb-3">
                                    <input type="text" wire:model="Pform.coordinates" dir="ltr" class="form-control text-start" id="partnerLat" placeholder="ادخل احداثيات المكان 21.345,46.321">
                                </div>

                                <div class="mb-3">
                                    <select class="form-select" id="partnerClass" wire:model.live="Pform.class">
                                        <option selected value="">إختر الفئة ...</option>
                                        <option value="أ">أ</option>
                                        <option value="ب">ب</option>
                                        <option value="ج">ج</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <input type="file" wire:model="Pform.logo" name="" id="">

                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">إغلاق</button>
                            <button type="button" wire:click="save"  class="btn btn-success">حفظ</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

</div>
