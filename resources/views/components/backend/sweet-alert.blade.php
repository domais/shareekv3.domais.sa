
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

	function Act_AdminApprove(id,model)
	{
		Swal.fire({
			title: 'توثيق المبادرة',
			text: 'سيتم الموافقة على المبادرة هل أنت متأكد؟',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: 'green',
			confirmButtonText: 'نعم، وافق',
			cancelButtonText: 'إلغاء',
		}).then((result) => {
			if (result.isConfirmed) {
				// Perform the action associated with the 'Confirm' button here.
				Livewire.dispatch('Act_AdminApprove', {
					id: id,
					model: model,
				})
			}
		});

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

	function Act_AdminStartStudySupport(id,model)
	{
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
			'Act_AdminStartStudySupport', 			// action
			true, 			// place inside?
			true, 			// actionable
			false, 			// redirect
			false, 			// textarea
		);


	}

	function Act_AdminStartStudySupportarchive(id,model)
	{

		handleAction(
			id, 			// id,
			model, 			// model,
			'question', 	// icon ,
			false, 	        // img located => public/img/alert/
			'أرشفة الدعم ؟',
			'بالضغط على (أرشفة ) سيتحول الطلب إلى قائمة (الأرشيف )  وسيختفي ، متأكد؟',
			true, 			// show Confirm Button
			true, 			// show Cancel Button
			false, 			// confirm Button Color 	default = #456496
			'أرشفة', 	// confirm Button Text 		default = موافق
			false, 			// cancel Button Text  		default = إلغاء
			false, 			// timer before auto disaplear
			false, 			// bar
			'Act_AdminStartStudySupportarchive', 			// action
			true, 			// place inside?
			true, 			// actionable
			false, 			// redirect
			false, 			// textarea
		);

	}


	// موافقة مبدأية للآدمن
	function IntialApproved(id, model) {
    Swal.fire({
        title: 'موافقة مبدأية',
        text: 'بالضغط على (موافقة مبدأية) سيتم تنبيه الشريك بأنه تمت الموافقة المبدأية على طلب التصريح ، هل أنت متأكد؟',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#456496',
        confirmButtonText: 'موافقة مبدأية',
        cancelButtonText: 'إلغاء',
    }).then((result) => {
        if (result.isConfirmed) {
            // Handle the action when the user clicks on 'موافقة مبدأية'
			Livewire.dispatch('IntialApproved_Dispatch', {
					id: id,
					model: model,
				})
        }
    });
}


	// رفض طلب للآدمن
	function Act_AdminRejectPermit(id, model) {
		Swal.fire({
			title: 'رفض التصريح',
			text: 'أنت على وشك رفض التصريح ، لرفض التصريح ، جيب عليك ذكر سبب الرفض في الخانة بالأسف ثم الضغط على (رفض الطلب)',
			icon: 'question',
			input: 'textarea',
			inputPlaceholder: 'أدخل سبب الرفض هنا',
			showCancelButton: true,
			confirmButtonText: 'رفض الطلب',
			cancelButtonText: 'إلغاء',
			confirmButtonColor: '#456496',
		}).then((result) => {
			if (result.isConfirmed && result.value) {
				// Perform the action when the user clicks the confirm button
				// You can replace 'RejectPermit_Dispatch' with the actual function you want to call
				//RejectPermit_Dispatch(id, model, result.value);
				Livewire.dispatch('RejectPermit_Dispatch', {
					id: id,
					model: model,
					reason: result.value
				})
			}
		});
	}

	function Act_AdminRejectSupport(id, model) {
		Swal.fire({
			title: 'رفض الدعم',
  			text: "لديك خيارين: إعادة الطلب للشريك للتعديل عليه. أو رفض الطلب نهائياً وتحويله للمؤرشف",
			icon: 'question',
			input: 'textarea',
			inputPlaceholder: 'أدخل سبب الرفض هنا',
			showCancelButton: true,
			confirmButtonText: 'إعادة للتعديل',
			cancelButtonText: 'إلغاء',
			confirmButtonColor: '#FF0000',
			showDenyButton: true, // Add this line
			denyButtonText: 'رفض نهائي', // Add this line
			denyButtonColor: '#FF0000', // Add this line
		}).then((result) => {
			if (result.isConfirmed && result.value) {
				Livewire.dispatch('RejectPermit_Dispatch', {
					id: id,
					model: model,
					reason: result.value
				})
			} else if (result.isDenied) { 
				console.log('DefinitelyDeclineSupport');
				console.log(result.value);
				// Add this condition
				// Perform the action when the user clicks the deny button
				// You can replace 'DefinitelyDeclineSupport' with the actual function you want to call
				Livewire.dispatch('Definitely_Decline_Support', {
					id: id,
					model: model,
					reason: result.value
				})
			}
		});
	}


	// تشغيل الفعالية للآدمن
	function FinalApprove(id,model) {
		console.log(id,model);

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
		console.log(id,model);
		Swal.fire({
			title: 'تشغيل بدون تصريح',
			text: 'لتشغيل المبادرة بدون تصريح ، يجب عليك ذكر السبب في الأسفل وأنت تتحمل المسؤولية لتبعات هذا القرار',
			icon: 'question',
			input: 'textarea',
			showCancelButton: true,
			confirmButtonColor: 'red',
			confirmButtonText: 'تشغيل بدون تصريح',
			cancelButtonText: 'إلغاء',
		}).then((result) => {
			if (result.isConfirmed) {
				// Dispatch the event to Livewire
				Livewire.dispatch('Act_ApproveWithoutPirmet', {id:id, model:model, reason: result.value});
			}
		});
	}

	function Act_Admin_Support(id,model){
		//console.log(id,model);
		Livewire.dispatch('Act_Admin_Support', {id:id, model:model});

	}


	// مشاركة فعالية لجميع المستخدمين
	function Act_ShareEvent(id, model) {
    console.log(id, model);
    var url = 'https://app.myeventksa.com/event/' + id;    handleAction(
        id,             // id,
        model,          // model,
        false,          // icon ,
        'share.png',    // img located => public/img/alert/
        'مشاركة الفعالية',
        'انسخ الرابط التالي وقم بمشاركته مع الآخرين<br><input type="text" class="form-control text-center mt-3" dir="ltr" value="' + url + '" />',
        false,          // show Confirm Button
        true,           // show Cancel Button
        false,          // confirm Button Color    default = #456496
        false,          // confirm Button Text     default = موافق
        'إغلاق',        // cancel Button Text      default = إلغاء
        false,          // use need to take action ?
        false,          // timer before auto disaplear
        false,          // bar
        false,          // actio
        false,          // place inside?
        false,          // actionable
        false,          // redirect
        false,          // textarea
    );
}

		function show_images_urls(id,model)
		{
			Livewire.dispatch('show_images_urls', {id:id, model:model});
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
		Livewire.on('announcement_modal', (event) => {
			var data = event[0];
			Swal.fire({
				title: data.title,
				html: data.text,
				icon: data.icon,
				timerProgressBar: true,
				showConfirmButton: false,
				timer:4000
			}).then((result) => {
                const modal = document.getElementById('announcementModal');
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            })
		})

		Livewire.on('show-partner-details', (event) => {
            console.log(event);
			Swal.fire({
				title: 'معلومات الشريك',
				html: `<ul class="list-unstyled" style="text-align:right">
						<li>اسم الشريك: ${event[0].partner.name}</li>
						<li>المسؤول: ${event[0].partner.owner.name}</li>
						<li>الفئة: ${event[0].partner.class}</li>
						<li> عدد التصاريح: ${event[0].permitCounter}</li>
						<li> عدد المبادرات: ${event[0].eventCounter}</li>
					</ul>`,
				imageUrl: event[0].image,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: 'Custom image',
				showConfirmButton: false,
			})
		})

		Livewire.on('show-announcement-details', (announcement) => {
            console.log(announcement);
			Swal.fire({
				title: 'معلومات الشريك',
				html: `<ul class="list-unstyled" style="text-align:right">
						<li>العنوان: ${announcement[0].title}</li>
						<li>البيان: ${announcement[0].description}</li>
						<li>تاريخ البدء: ${announcement[0].start_at}</li>
						<li>تاريخ الإنتهاء: ${announcement[0].end_at}</li>
						<li>الحالة: ${announcement[0].is_active}</li>
					</ul>`,
				imageUrl: 'https://nextlevel.ams3.digitaloceanspaces.com/rahmaniDjamel/3/image.png',
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: 'Custom image',
				showConfirmButton: false,
			});
		})

		Livewire.on('delete-user', (event) => {
            Swal.fire({
                title: event.title || "تأكيـــد الحذف",
                text: event.text || "حذف هذا العنصر سيؤدي الى حذف العناصر التابعة له",
                icon: event.icon || "warning",
                showCancelButton: true,
                confirmButtonColor: event.confirmButtonColor || "#ef4444",
                cancelButtonColor: "#5eead4",
                confirmButtonText: "تأكيد",
                cancelButtonText: 'إلغاء',
                customClass: {
                    // Add Tailwind CSS classes for styling the modal
                    popup: 'dark:bg-gray-700 dark:text-white border-2 border-green-500 border-dashed ',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    Livewire.dispatch('delete-item',event); // Trigger Livewire method for deletion
                }
            });
        });

			Livewire.on('show-images', (data) => {
				let imagesList = '';
				let downloadButton = '';

				// Create a list of images and the download button if images array is not empty
				if (data[0]['images'].length > 0) {
					data[0]['images'].forEach((image, index) => {
						imagesList += `
							<a href="${window.location.origin}/storage/${image}" target="_blank">
								<img src="${window.location.origin}/storage/${image}" alt="Image ${index + 1}" style="width: 100px; height: 100px; object-fit: cover;">
							</a>
							<br>
						`;
					});

					downloadButton = '<button id="downloadImages" class="btn btn-primary">تحميل الصور</button>';
				}

				// Create a list of video links
				let videoLinks = '';
				data[0]['links'].forEach((link, index) => {
					videoLinks += `<a href="${link}" target="_blank">فيديو ${index + 1}</a><br>`;
				});

				// Show the Swal
				Swal.fire({
					title: data[0]['event'],
					html: `
						${imagesList}
						${videoLinks}
						${downloadButton}
					`,
					showConfirmButton: false,
					didOpen: () => {
						console.log("hello");
						$('#downloadImages').on('click', function() {
							Livewire.dispatch('downloadImages', {images : data[0]['images']});
						});
					},
				});
			});
	})
	</script>
