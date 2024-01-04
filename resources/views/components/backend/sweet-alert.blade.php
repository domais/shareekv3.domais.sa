
<script>
	function DeletePermit(id) {
		var dataId = id;
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