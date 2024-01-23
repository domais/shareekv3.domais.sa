<div
  x-data="{location: @entangle('form.event_location').live,lat: @entangle('form.lat').live,lng: @entangle('form.lng').live}"
  x-init="$watch('location',
   value => {
	 if (value == 1)
	 updateMarkerPosition(lat, lng);
	 })"
>

	<div class="row">
		<div class="col-5">
			<div class="row my-3">
				<div class="col-4 align-items-center">
					مقر إقامة المبادرة
				</div>
				<div class="col-8">
					<select class="form-control" x-bind:disabled="is_show_page" x-model="location" wire:model.live="form.event_location">
						<option selected disabled value="">اختر ...</option>
						<option value="1">داخلية</option>
						<option value="2">خارجية</option>

					</select>

					<input type="text" id="search-location" class="form-control rounded text-left mt-3" placeholder="بحث عن منطقة">
					
				</div>
			</div>
			<div class="row my-3" x-show="location == 2">
				<div class="col-4 d-flex align-items-center">خطاب الموافقة</div>
				@if ($this->permit  && $this->permit->event_location == 2 && $this->is_show_page)
					<div class="col-8"><a href="{{asset('storage/'.$this->permit->fileable->where('use','approval_letter')->first()->path)}}" target="_blank" class="btn btn-primary">عرض الملف</a></div>
				@else
				<div class="col-8"><input type="file" wire:model="form.approval_file" class="form-control"></div>
				@endif
			</div>
			<div class="row my-3" x-show="location == 2">
				<div class="col-4 d-flex align-items-center">إحداثيات المكان</div>
				<div class="col-8"><input type="text" id="location" dir="ltr" placeholder="حدد المكان على الخريطة" disabled class="form-control text-start"></div>
			</div>
			<input type="file"  x-bind:disabled="is_show_page"  class="style image mx-auto mb-3" id="LocImg_input" x-show="location == 2">
			<div class="DropArea" style="height: 311px" x-show="location == 2">
				@if ($this->permit  && $this->permit->event_location == 2 && $this->is_show_page)
					<img id="LocImg" wire:model="form.location_image" src="{{asset('storage/'.$this->permit->fileable->where('use','location_image')->first()->path)}}" alt="Picture">
				@else
				 @if ($this->permit  && $this->permit->event_location == 2 && !$this->is_show_page)
				 	<img id="LocImg" wire:model="form.location_image" src="{{asset('storage/'.$this->permit->fileable->where('use','location_image')->first()->path)}}" alt="Picture">
				 @else
				 <img id="LocImg" wire:model="form.location_image" src="{{asset('img/pexel.png')}}" alt="Picture">

				 @endif
				@endif
			</div><!-- /DropArea -->
		</div>
		<div class="col-7">
			<!-- Rahmani: لو حليت مشكلة الخرائد .. فعل السطر التالي -->
			<div class="map" style="height: 562px"></div>
		</div>
	</div>
</div>
<style>
input[type=file]#LocImg_input::before {
	content: 'اضغط هنا لأختيار صورة المكان'
}
</style>
<script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places&callback=start&key=AIzaSyA1Nkm7JLvCWyiVaU4lTFbg8wCBFrgtQTo&language=ar&region=SA"></script>
<script>
	let map;
	let marker; // Declare marker variable outside the function

	function start(){
		console.log('Google\'s Map loaded 👍')
		var input = document.getElementById('search-location');
		var autocomplete = new google.maps.places.Autocomplete(input);

		// Add event listener for selecting location from autocomplete
		autocomplete.addListener('place_changed', function() {
			var place = autocomplete.getPlace();
			if (!place.geometry) {
				// User entered the name of a Place that was not suggested and
				// pressed the Enter key, or the Place Details request failed.
				window.alert("No details available for input: '" + place.name + "'");
				return;
			}

			// If the place has a geometry, then present it on a map.
			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(17);  // Why 17? Because it looks good.
			}

			// Move the marker to the place where the user has selected
			marker.setPosition(place.geometry.location);

			// Update the input fields with the selected place's latitude and longitude
			updateInput(place.geometry.location.lat(), place.geometry.location.lng());
		});
	}

	
	function initMap() {
    var position = { lat: {{$this->form->lat ?? 21.4969389}}, lng: {{$this->form->lng ?? 39.2271579}} };
    var myOptions = {
        zoom: 17,
        streetViewControl: false,
        center: position
    };
    map = new google.maps.Map(document.querySelector(".map"), myOptions);

    map.setOptions({ styles: [{ featureType: "landscape", stylers: [{ visibility: "off" }], }, { featureType: "poi", stylers: [{ visibility: "off" }] }, { featureType: "landscape", stylers: [{ visibility: "off" }] }] });

    marker = new google.maps.Marker({ position: position, url: 'https://maps.google.com/?q=' + position.lat + ',' + position.lng + '', map });

    google.maps.event.addListener(marker, 'click', function () {
        window.open(this.url, '_tab')
    });

    google.maps.event.addListener(map, 'drag', function () {
        marker.setPosition(map.getCenter())
    });

    // Add a "drag end" event handler
    google.maps.event.addListener(map, 'zoom_changed', function () {
        marker.setPosition(map.getCenter());
    });

    google.maps.event.addListener(map, 'dragend', function () {
        let lat = map.getCenter().lat()
        let lng = map.getCenter().lng()
        updateInput(lat, lng)
    });

    // Add a "click" event listener to the map
    google.maps.event.addListener(map, 'click', function(event) {
        let clickedLocation = event.latLng;
        marker.setPosition(clickedLocation);
        updateInput(clickedLocation.lat(), clickedLocation.lng());
    });
}

	function updateMarkerPosition(lat, lng) 
	{
		var newPosition = new google.maps.LatLng(lat, lng);
		marker.setPosition(newPosition);
		map.setCenter(newPosition);
	}


	function updateInput(lat, lng) {
		// Rahmani: هنا تاخد اللوكيشن إللي حدده المستخدم
		//Domais : done thnx
		Livewire.dispatch('updateLocation', {lat:lat, lng:lng})
		console.log(lat, lng);
		document.getElementById("location").value = lat + ' , ' + lng
	}

	// Fix map problem
	setTimeout(()=> {
		$('#location-tab').on('click',function(){
			initMap()
		});
	}, 1000);







	window.addEventListener('DOMContentLoaded', function() {




		$("#LocImg_input").on('change', (e)=> {

		var image = document.querySelector('#LocImg');
		var fileType = e.target.files[0].type;

		if(window.cropper2){
			window.cropper2.destroy()
		}

		window.cropper2 = new Cropper(image, {
			viewMode: 3,
			dragMode: 'move',
			autoCropArea: 1,
			restore: false,
			modal: false,
			guides: false,
			highlight: false,
			cropBoxMovable: false,
			cropBoxResizable: false,
			toggleDragModeOnDblclick: false,
			ready: function () {
				// This will be called when the cropper is ready
				var canvas = window.cropper2.getCroppedCanvas();
				canvas.toBlob(function(blob) {
					var file = new File([blob], "image.png", {type: fileType});
					// Upload a file
					@this.upload('form.location_image', file, (uploadedFilename) => {
						console.log(uploadedFilename);
						// Success callback...
					/*  Swal.fire({
							icon: 'success',
							title: 'تم تحميل الصورة بنجاح',
							text: null,
							showConfirmButton: false,
							timer: 1500
						});*/
					}, () => {
						// Error callback...
						Swal.fire({
							icon: 'error',
							title: 'خطأ',
							text: 'حدث خطأ أثناء التحميل',
							showConfirmButton: false,

						});
					}, (event) => {
						// Progress callback...
						// event.detail.progress contains a number between 1 and 100 as the upload progresses
						console.log(event.detail.progress);

					})
				});
			}
		});

		window.cropper2.replace(URL.createObjectURL(e.target.files[0]))

		});


});

</script>