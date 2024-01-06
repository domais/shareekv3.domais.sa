
<script>
function handleAction(id, model, title, html, confirmButtonColor, confirmButtonText, action) {
    Swal.fire({
        title: title,
        icon: 'question',
        html: html,
        showCancelButton: true,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: '#ccc',
        cancelButtonText:'إلغاء',
        confirmButtonText: confirmButtonText
    }).then((result) => {
        if (result.isConfirmed) {
            Livewire.dispatch(action, {
                place: 'inside', // or outside
                id: id,
                model: model
            })
        }
    })
}

function DeletePermit(id, model) {
    handleAction(id, model, 'هل أنت متأكد؟', 'سيتم حذف التصريح ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟', '#e33e41', 'نعم احذف الطلب', 'DeletePermit_Dispatch');
}

function AssignTome(id,model) {
		var modelClassName = model;
		handleAction(id, modelClassName, 'هل أنت متأكد؟', 'سيتم إرفاق التصريح إليك  ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟', '#e33e41', 'إرفاق', 'AssignPermit_Dispatch');
}

function RejectPermit(id,model) {
		var modelClassName = model;
		handleAction(id, modelClassName, 'هل أنت متأكد؟', 'سيتم إعادة التصريح إلى المستخدم  ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟', '#e33e41', 'إعادة الطلب', 'RejectPermit_Dispatch');
}

function IntialApproved(id,model) {
		var modelClassName = model;
		handleAction(id, modelClassName, 'هل أنت متأكد؟', 'يتم قبول التصريح  ولايمكنك التراجع عن هذه الخطوة ، هل أنت متأكد؟', '#e33e41', 'موافقة مبدأية', 'IntialApproved_Dispatch');
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