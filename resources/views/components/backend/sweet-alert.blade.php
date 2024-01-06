
<script>
function DeletePermit(id, model) {
		var dataId = id;
		var modelClassName = model;
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
				id: dataId,
				model: modelClassName
			})
			}
		})
	}

function AssignTome(id,model) {
		var dataId = id;
		var modelClassName = model;
		Swal.fire({
			title: 'هل أنت متأكد؟',
			icon: 'question',
			html: 'سيتم إرفاق التصريح إليك  ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟',
			showCancelButton: true,
			confirmButtonColor: '#5de868',
			cancelButtonColor: '#ccc',
			cancelButtonText:'إلغاء',
			confirmButtonText: 'نعم ارفق الطلب'
		}).then((result,id) => {
			if (result.isConfirmed) {
				Livewire.dispatch('AssignPermit_Dispatch', {
				place: 'inside', // or outside
				id: dataId,
			})
			}
		})
	
}

function RejectPermit(id,model) {
		var dataId = id;
		var modelClassName = model;
		Swal.fire({
			title: 'هل أنت متأكد؟',
			icon: 'question',
			html: 'سيتم إعادة التصريح إلى المستخدم ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟',
			showCancelButton: true,
			confirmButtonColor: '#e33e41',
			cancelButtonColor: '#ccc',
			cancelButtonText:'إلغاء',
			confirmButtonText: 'نعم إعادة الطلب'
		}).then((result,id) => {
			if (result.isConfirmed) {
				Livewire.dispatch('RejectPermit_Dispatch', {
				place: 'inside', // or outside
				id: dataId,
			})
			}
		})
	
}

function IntialApproved(id,model) {
		var dataId = id;
		var modelClassName = model;
		Swal.fire({
			title: 'هل أنت متأكد؟',
			icon: 'question',
			html: 'سيتم قبول التصريح  ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟',
			showCancelButton: true,
			confirmButtonColor: '#5de868',
			cancelButtonColor: '#ccc',
			cancelButtonText:'إلغاء',
			confirmButtonText: 'نعم ارفق الطلب'
		}).then((result,id) => {
			if (result.isConfirmed) {
				Livewire.dispatch('IntialApproved_Dispatch', {
				place: 'inside', // or outside
				id: dataId,
			})
			}
		})
	
}



	// Rahmani: let's disscuss this
	//Domais : Here to change tO BE FOR ALL CRUD OPERATIONS 
    document.addEventListener('livewire:init', () => {
    Livewire.on('DeletePermit_Response', (event) => {
        var data = event[0];
        Swal.fire({
            title: data.title,
            html: data.text,
            icon: data.icon,
            timerProgressBar: true,
            showConfirmButton: false,
            timer:4000					
        })
        setTimeout(() => {
            if(data.place == 'inside')
                window.location.href = "{{route('permit.index')}}";
            else
                window.location.reload()
        },4000)
    })
})
</script>