<div
  x-data="{location: @entangle('form.event_location').live}"
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
				</div>
			</div>
			<div class="row my-3" x-show="location == 2">
				<div class="col-4 d-flex align-items-center">خطاب الموافقة</div>
				<div class="col-8"><input type="file" class="form-control"></div>
			</div>
			<div class="row my-3">
				<div class="col-4 d-flex align-items-center">إحداثيات المكان</div>
				<div class="col-8"><input type="text" id="location" dir="ltr" placeholder="حدد المكان على الخريطة" disabled class="form-control text-start"></div>
			</div>
			<!-- Rahmani: محترم نستخدمو هنا وفي باقي النظام ، امهلني بعض الوقت image cropperانا بدور على -->
			<div class="AdvImg" style="height: 311px" x-show="location == 2">
				<div>
					اضغط هنا لإرفاق صورة للمكان<br><br>
					<small>مقاسها 500×500 بكسل</small>
				</div>
			</div><!-- /AdvImg -->
		</div>
		<div class="col-7">
			<!-- Rahmani: لو حليت مشكلة الخرائد .. فعل السطر التالي -->
			<div class="map" style="height: 500px"></div>
		</div>
	</div>
</div>
<script async defer src="https://maps.googleapis.com/maps/api/js?callback=start&amp;key=AIzaSyA1Nkm7JLvCWyiVaU4lTFbg8wCBFrgtQTo&amp;language=ar&amp;region=SA"></script>
<script>
	let map;
	function start(){
		console.log('Google\'s Map loaded 👍')
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

		var marker = new google.maps.Marker({ position: position, url: 'https://maps.google.com/?q=' + position.lat + ',' + position.lng + '', map });

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

</script>