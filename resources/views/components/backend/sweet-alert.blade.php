
<script>
	function handleAction(id, model, icon, img , title, html , showConfirmButton , showCancelButton ,confirmButtonColor, confirmButtonText , cancelButtonText , time , bar , action , place , actionable , redirect , textarea) {
		console.log(textarea,action)
		Swal.fire({
			title:              (title) ? title:false,
			icon:               (icon) ? icon:false,
			html:               (html) ? html:false,
			imageUrl:           (img) ? window.location.origin+'/img/alert/'+img:false,
			imageWidth:        	300,
			input: 				(textarea) ? 'textarea':false,
			inputPlaceholder: 	'اكتب السبب هنا ...',
			showCancelButton:   (showCancelButton) ? showCancelButton:false,
			showConfirmButton:  (showConfirmButton) ? showConfirmButton:false,
			confirmButtonColor: (confirmButtonColor) ? confirmButtonColor:'#456496',
			cancelButtonColor:  '#ccc',
			cancelButtonText:   (cancelButtonText) ? cancelButtonText:'إلغاء',
			confirmButtonText:  (confirmButtonText) ? confirmButtonText:'موافق',
			timer:              (time) ? time:false,
			timerProgressBar:   (bar) ? bar:false,
		}).then((result,place) => {
			console.log("1");
			if(actionable){
				console.log("2",action);
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



	// حذف التصريح لليوزر
	function Act_UserDeletePermit(id, model) {
		handleAction(
			id, 			// id,         
			model, 			// model, 
			'question', 	// icon , 
			false, 	        // img located => public/img/alert/ 
			'حذف التصريح؟', 
			'سيتم حذف التصريح ولايمكنك التراجع ، هل أنت متأكد؟',
			true, 			// show Confirm Button
			true, 			// show Cancel Button
			'red', 			// confirm Button Color 	default = #456496
			'نعم احذف',     // confirm Button Text 		default = موافق
			false,          // cancel Button Text  		default = إلغاء
			false, 			// timer before auto disaplear
			false, 			// bar
			false, 			// actio
			false, 			// place inside? 
			true, 			// actionable 
			false, 			// redirect
			false, 			// textarea
		);
	
	}
	

	// إبدا دراسة الطلب للآدمن
	function Act_AdminStartStudy(id,model) {
		console.log(id,model);
		handleAction(
			id, 			// id,         
			model, 			// model, 
			'question', 	// icon , 
			false, 	        // img located => public/img/alert/ 
			'بدء دراسة الطلب؟', 
			'بالضغط على (إبدا الدراسة) سيتحول الطلب إلى قائمة (تحت الدراسة) لديك وسيختفي من عند باقي الموظفين ، متأكد؟',
			true, 			// show Confirm Button
			true, 			// show Cancel Button
			false, 			// confirm Button Color 	default = #456496
			'إبدأ الدراسة', 	// confirm Button Text 		default = موافق
			false, 			// cancel Button Text  		default = إلغاء
			false, 			// timer before auto disaplear
			false, 			// bar
			'AssignPermit_Dispatch', 			// action
			true, 			// place inside? 
			true, 			// actionable 
			false, 			// redirect
			false, 			// textarea
		);
	}
	

	// موافقة مبدأية للآدمن
	function IntialApproved(id,model) {
		handleAction(
			id, 			// id,         
			model, 			// model, 
			'question', 	// icon , 
			false, 	        // img located => public/img/alert/ 
			'موافقة مبدأية', 
			'بالضغط على (موافقة مبدأية) سيتم تنبيه الشريك بأنه تمت الموافقة المبدأية على طلب التصريح ، هل أنت متأكد؟',
			true, 			// show Confirm Button
			true, 			// show Cancel Button
			false, 			// confirm Button Color 	default = #456496
			'موافقة مبدأية', 			// confirm Button Text 		default = موافق
			false, 		 // cancel Button Text  		default = إلغاء
			false, 			// use need to take action ?
			false, 			// timer before auto disaplear
			false, 			// bar
			false, 			// actio
			false, 			// place inside? 
			false, 			// actionable 
			false, 			// redirect
			false, 			// textarea
		);
	}
	
	
	// رفض طلب للآدمن
	function Act_AdminRejectPermit(id,model) {
		handleAction(
			id, 			// id,         
			model, 			// model, 
			'question', 	// icon , 
			false, 	        // img located => public/img/alert/ 
			'رفض التصريح', 
			'أنت على وشك رفض التصريح ، لرفض التصريح ، جيب عليك ذكر سبب الرفض في الخانة بالأسف ثم الضغط على (رفض الطلب)',
			true, 			// show Confirm Button
			true, 			// show Cancel Button
			'red', 			// confirm Button Color 	default = #456496
			'رفض الطلب',     // confirm Button Text 		default = موافق
			false,          // cancel Button Text  		default = إلغاء
			false, 			// use need to take action ?
			false, 			// timer before auto disaplear
			false, 			// bar
			false, 			// actio
			false, 			// place inside? 
			false, 			// actionable 
			true, 			// textarea
		);
	}
	
	
	// تشغيل الفعالية للآدمن
	function FinalApprove(id,model) {
		handleAction(
			id, 			// id,         
			model, 			// model, 
			'question', 	// icon , 
			false, 	        // img located => public/img/alert/ 
			'تشغيل المبادرة؟', 
			'بالضغط على (تشغيل) ، سيتحول هذا التصريح إلى مبادرة مجدولة ويستطيع الناسب بدء حجزها ، هل أنت متأكد؟',
			true, 			// show Confirm Button
			true, 			// show Cancel Button
			false, 			// confirm Button Color 	default = #456496
			'تشغيل المبادرة', 	// confirm Button Text 		default = موافق
			false, 			// cancel Button Text  		default = إلغاء
			false, 			// timer before auto disaplear
			false, 			// bar
			false, 			// actio
			false, 			// place inside? 
			false, 			// actionable 
			false, 			// redirect
			false, 			// textarea
		);
	}
	

	// تشغيل بدون تصريح للآدمن
	function Act_ApproveWithoutPirmet(id,model) {
		handleAction(
			id, 			// id,         
			model, 			// model, 
			'question', 	// icon , 
			false, 	        // img located => public/img/alert/ 
			'تشغيل بدون تصريح', 
			'لتشغيل المبادرة بدون تصريح ، يجب عليك ذكر السبب في الأسفل وأنت تتحمل المسؤولية لتبعات هذا القرار',
			true, 			// show Confirm Button
			true, 			// show Cancel Button
			'red', 			// confirm Button Color 	default = #456496
			'تشغيل بدون تصريح',     // confirm Button Text 		default = موافق
			false,          // cancel Button Text  		default = إلغاء
			false, 			// use need to take action ?
			false, 			// timer before auto disaplear
			false, 			// bar
			false, 			// actio
			false, 			// place inside? 
			false, 			// actionable 
			true, 			// textarea
		);
	}
	

	// مشاركة فعالية لجميع المستخدمين
	function Act_ShareEvent(id,model) {
		handleAction(
			id, 			// id,         
			model, 			// model, 
			false, 			// icon , 
			'share.png', 	// img located => public/img/alert/ 
			'مشاركة الفعالية', 
			'انسخ الرابط التالي وقم بمشاركته مع الآخرين<br><input type="text" class="form-control text-center mt-3" dir="ltr" value="{{url('uuu')}}" />',
			false, 			// show Confirm Button
			true, 			// show Cancel Button
			false, 			// confirm Button Color 	default = #456496
			false, 			// confirm Button Text 		default = موافق
			'إغلاق', 		 // cancel Button Text  		default = إلغاء
			false, 			// use need to take action ?
			false, 			// timer before auto disaplear
			false, 			// bar
			false, 			// actio
			false, 			// place inside? 
			false, 			// actionable 
			false, 			// redirect
			false, 			// textarea
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

		Livewire.on('show-partner-details', (event) => {
			Swal.fire({
				title: 'معلومات الشريك',
				html: `<ul>
						<li>المالك: ${event[0].owner}</li>
						<li> عدد التصاريح: ${event[0].permitCounter}</li>
						<li> عدد المبادرات: ${event[0].eventCounter}</li>
					</ul>`,
				icon: 'info',
				showConfirmButton: false,
			});
		})
	})
	</script>