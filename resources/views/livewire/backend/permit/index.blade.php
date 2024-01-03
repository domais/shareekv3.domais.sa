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
		<x-backend.kanban-column 
		name="مسودة"
		count="1" 
		:data="$drafts"
		:buttons="[
			['title' => 'إكمال', 'href' => '#','class' => 'btn btn-secondary'],
			['title' => 'حذف', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-danger']
		]"
		/>

		<x-backend.kanban-column name="معاد للتعديل" count="1" edit="1"
		:buttons="[
			['title' => 'تعديل', 'href' => '#','class' => 'btn btn-secondary'],
			['title' => 'حذف', 'onclick' => 'DeletePermit', 'class' => 'btn btn-outline-danger']
		]"
		/>
		<x-backend.kanban-column name="تحت الدراسة" count="1" />
		<x-backend.kanban-column name="موافق عليه مبدأيا" count="1" />

	</div>






</div>








<script>
	function DeletePermit(id) {
		
		Swal.fire({
			title: 'هل أنت متأكد؟',
			icon: 'question',
			html: 'سيتم حذف التصريح ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟',
			showCancelButton: true,
			confirmButtonColor: '#e33e41',
			cancelButtonColor: '#ccc',
			cancelButtonText:'إلغاء',
			confirmButtonText: 'نعم احذف الطلب'
		}).then((result,id) => {
			// Domais [OK 👍]: please update this code to dispatch event to livewire component only.
			if (result.isConfirmed) {
				Livewire.dispatch('DeletePermit_Dispatch', {
				place: 'inside', // or outside
				id: id,
			})
			}
		})
	}



	// Rahmani: let's disscuss this
	document.addEventListener('livewire:init', () => {
		Livewire.on('DeletePermit_Response', (event) => {
			Swal.fire({
				title: event.title,
				html: event.text,
				icon: event.icon,
				timerProgressBar: true,
				showConfirmButton: false,
				timer:4000					
			})
			setTimeout((event) => {
				if(event.place == 'inside')
					window.location.href = "{{route('permit.index')}}";
				else
					window.location.reload
			},4000)
		})
	})
</script>