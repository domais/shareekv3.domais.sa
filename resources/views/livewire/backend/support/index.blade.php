<div x-data="{view: 'kanban'}">


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

				<div class="btn-group" role="group" aria-label="View switcher">
					<button type="button" class="btn btn-outline-secondary" @click="view = (view === 'kanban' ? 'table' : 'kanban')">
						<span x-show="view === 'kanban'">عرض كجدول</span>
						<span x-show="view === 'table'">عرض كقوائم</span>
					</button>
				</div>
			</div>
		</div>
	</nav>

	<div class="kanban"  x-show="view === 'kanban'">

		<x-backend.kanban-column 
			name="طلبات جديدة"
			count="{{count($requests)}}" 
			:data="$requests"
			route="support"
			:buttons="auth()->user()->hasRole('User') ? [] : KanbanButtons('PermitAdminNewSupport')  "
		/>


        
		<x-backend.kanban-column
			name="معاد للتعديل"
			count="{{count($rejectd)}}"
			edit="1"
			:data="$rejectd"
			route="support"
			:buttons="auth()->user()->hasRole('User') ? KanbanButtons('PermitUserReturned') : []  "
			type="rejected"
		/>

		<x-backend.kanban-column
			name="تحت الدراسة" 
			count="{{count($initial_approve)}}" 
			:data="$initial_approve" 
			route="support"

			:buttons="auth()->user()->hasRole('User') ? [] : KanbanButtons('PermitAdminNewSupportUnderStudy')  "
		/>

		<x-backend.kanban-column 
			name="الحالة النهائية"
			count="{{ count($approved) }}"
			:data="$approved"
			route="support"
			:buttons="auth()->user()->hasRole('User') ? KanbanButtons('archiveSupport') :  [] "
		/>
	</div>

			<!-- Table view -->
			<div class="table-responsive" x-show="view === 'table'">
				<!-- Your table goes here -->
				<livewire:backend.data-table.support-table />
			</div>







</div>