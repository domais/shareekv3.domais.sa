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
				{{-- <a class="btn btn-secondary me-2" href="#" role="button">عرض كجدول</a> --}}

				@if (auth()->user()->hasRole('User'))
					<a class="btn btn-brand" href="{{route('permit.create')}}">طلب تصريح</a>
				@endif
			</div>
		</div>
	</nav>

	<div class="kanban">

		<x-backend.kanban-column 
			name="طلبات جديدة"
			count="{{count($requests)}}" 
			:data="$requests"
			:buttons="KanbanButtons('PermitAdminNewOrders')"
		/>



		<x-backend.kanban-column
			name="معاد للتعديل"
			count="{{count($rejectd)}}"
			edit="1"
			:data="$rejectd"
			:buttons="auth()->user()->hasRole('User') ? KanbanButtons('PermitUserReturned') : []  "
			type="rejected"
		/>

		<x-backend.kanban-column
			name="تحت الدراسة" 
			count="{{count($initial_approve)}}" 
			:data="$initial_approve" 
			:buttons="auth()->user()->hasRole('User') ? KanbanButtons('PermitUserReview') : KanbanButtons('PermitAdminReview')  "
		/>

		<x-backend.kanban-column 
			name="{{ auth()->user()->hasRole('User') ? 'موافق عليه مبدأيا' : 'بإنتظار تصريح الهيئة' }}"
			count="{{ count($approved) }}"
			:data="$approved"
			:buttons="auth()->user()->hasRole('User') ? [] : KanbanButtons('PermitAdminAwatingApproval')  "
		/>

	</div>












    <!-- مودال اعتماد تشغيل فعالية -->
    <div wire:ignore class="modal fade" id="Permit-Admin-Final-Approval-Modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">اعتماد الفعالية</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mt-2">
                        <div class="col-3 d-flex align-items-center">رقم التصريح</div>
                        <div class="col-8"><input type="text" wire:model="permitNumber" class="form-control" id="PermitNumber"></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-3 d-flex align-items-center">نسخ التصريح</div>
                        <div class="col-8"><input type="file" wire:model="permitFile" class="form-control" id="PermitPDF"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-success" wire:click="approvePermit">اعتماد</button>
                </div>
            </div>
        </div>
    </div>


</div>