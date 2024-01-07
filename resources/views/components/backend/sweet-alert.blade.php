
<script>
function handleAction(id, model, icon, img , title, html , showConfirmButton , showCancelButton ,confirmButtonColor, confirmButtonText , cancelButtonText , time , bar , action , place , actionable , redirect) {
console.log(window.location.origin+'/img/alert/')
    Swal.fire({
        title:              (title) ? title:false,
        icon:               (icon) ? icon:false,
        html:               (html) ? html:false,
        imageUrl:           (img) ? window.location.origin+'/img/alert/'+img:false,
        imageWidth:        	300,
        showCancelButton:   (showCancelButton) ? showCancelButton:false,
        showConfirmButton:  (showConfirmButton) ? showConfirmButton:false,
        confirmButtonColor: (confirmButtonColor) ? confirmButtonColor:'#3085d6',
        cancelButtonColor:  '#ccc',
        cancelButtonText:   (cancelButtonText) ? cancelButtonText:'إلغاء',
        confirmButtonText:  (confirmButtonText) ? confirmButtonText:'موافق',
        timer:              (time) ? time:false,
        timerProgressBar:   (bar) ? bar:false,
    }).then((result,place) => {
        if(actionable){
            if (result.isConfirmed) {
                Livewire.dispatch(action, {
                    place: (place) ? place:'outside', 			// inside or outside
					redirect : (redirect) ? redirect:'self',	// redirect to another URL or refresh current url
                    id: id,
                    model: model
                })
            }
        }

    })
}

function DeletePermit(id, model) {
    handleAction( );

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

function ShareEvent(id,model) {
		handleAction(
		id, 			// id,         
		model, 			// model, 
		false, 			// icon , 
		'share.png', 	// img located => public/img/alert/ 
		'هنا العنوان', 
		'هنا نص الرسالة التي تظهر للمستخدم ويقبل وسم html',
		false, 			// show Confirm Button
		true, 			// show Cancel Button
		false, 			// confirm Button Color 	default = #3085d6
		false, 			// confirm Button Text 		default = موافق
		false, 			// cancel Button Text  		default = إلغاء
		false, 			// use need to take action ?
		false, 			// timer before auto disaplear
		false, 			// bar
		false, 			// actio
		false, 			// place inside? 
		false, 			// actionable 
		false, 			// redirect
    );
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