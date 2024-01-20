<div class="container my-3" x-data="{errors: @entangle('ValidationErrors').live}" x-init="
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
					<a class="link-body-emphasis text-decoration-none" href="{{route('adminstrator.index')}}">الصلاحيات و الأدوار</a>
				</li>
			</ol>
			<div class="links">
                <button type="button" class="btn btn-brand float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    أضف إداري 
                </button>
			</div>
		</div>
	</nav>


    <div class="row">
        <div class="col-12">
            <livewire:backend.data-table.role-table />
        </div>
    </div>


                    <!-- Modal -->
                    <div wire:ignore class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">إضافة إداري جديد</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                    <div class="mb-3">
                                        <input type="text" wire:model="Uform.name" class="form-control text-start" id="userName" placeholder="الإسم" >
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" wire:model="Uform.email" dir="ltr" class="form-control text-start" id="userEmail" placeholder="البريد الإلكتروني">
                                    </div>
                                    <div class="mb-3">
                                        <input type="tel" wire:model="Uform.phone" dir="ltr" class="form-control text-start" id="userPhone" placeholder="رقم الجوال">
                                    </div>

                                    <div class="row">
                                        @foreach($permissions as $index => $permission)
                                            <div class="col-6">
                                                <div class="mb-3 form-check">
                                                    <input type="checkbox" class="form-check-input" id="permission-{{ $permission->id }}" wire:model="selectedPermissions.{{ $permission->id }}">
                                                    <label class="form-check-label" for="permission-{{ $permission->id }}">{{ $permission->display_name }}</label>
                                                </div>
                                            </div>
                                            @if (($index + 1) % 2 == 0)
                                                </div><div class="row">
                                            @endif
                                        @endforeach
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