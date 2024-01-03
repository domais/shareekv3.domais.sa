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
				<a class="btn btn-secondary me-2" href="#" role="button">عرض كجدول</a>
				<a class="btn btn-brand" href="{{route('permit.create')}}">طلب تصريح</a>
			</div>
		</div>
	</nav>

	<div class="kanban">
		@role('User')
		<x-backend.kanban-column 
			name="مسودة"
			count="{{count($drafts)}}" 
			:data="$drafts"
			:buttons="KanbanButtons('UserDraft')"
		/>
		@endrole

		@permission('permit.read')

		<x-backend.kanban-column 
			name="طلبات جديدة"
			count="{{count($new_orders)}}" 
			:data="$new_orders"
			:buttons="KanbanButtons('AdminAssignToMe')"
		/>
		@endpermission



		<x-backend.kanban-column
		 name="معاد للتعديل"
		  count="{{count($rejected)}}"
		  edit="1"
		  :data="$rejected"
		  :buttons="auth()->user()->hasRole('User') ? KanbanButtons('UserRejected') : []  "
		  />
		<x-backend.kanban-column
			name="تحت الدراسة" 
			count="{{count($pending)}}" 
			:data="$pending" 
			:buttons="auth()->user()->hasRole('User') ? [] : KanbanButtons('AdminIntialApproved')  "
		/>

		<x-backend.kanban-column 
			name="{{ auth()->user()->hasRole('User') ? 'موافق عليه مبدأيا' : 'بإنتظار تصريح الهيئة' }}"
			count="{{ count($approved) }}"
			:data="$approved"
			:buttons="auth()->user()->hasRole('User') ? [] : KanbanButtons('AdminFinalApproved')  "

			/>
	</div>
</div>
