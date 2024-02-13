<div class="row"
    x-data="{errors: @entangle('ValidationErrors').live}" x-init="
    $watch('errors', value => {

        if (value.length > 0) {
            const errorMessage = value.join('<br>');
            Swal.fire({
                icon: 'error',
                title: 'خطأ في التحقق',
                showConfirmButton: false,
                html: errorMessage  // Use 'html' to display formatted text
            });
            errors = [];
        }
    });
    ">
    <div class="col-md-8 mb-4">
      <div class="card mb-4">
        <div class="card-body">
          <form wire:submit="save">

            <div class="mb-3">
                <input type="text" wire:model="Pform.partner_name" class="form-control text-start" id="partnerName" placeholder="اسم المنشأة / اسم الشريك">
            </div>
            <div class="mb-3">
                <input type="text" wire:model.live="Uform.name" class="form-control text-start" id="userName" placeholder="الشخص المسؤول" >
            </div>
            <div class="mb-3">
                <input type="email" wire:model.live="Uform.email" dir="ltr" class="form-control text-start" id="userEmail" placeholder="البريد الإلكتروني">
            </div>
            <div class="mb-3">
                <input type="tel" wire:model="Uform.phone" dir="ltr" class="form-control text-start" id="userPhone" placeholder="رقم الجوال">
            </div>
            <div class="mb-3">
                <input type="text" wire:model="Pform.city" class="form-control text-start" id="partnerCity" placeholder="المدينة">
            </div>
            <div class="mb-3">
              <input type="text" id="partnerLat" class="form-control text-start" placeholder="ادخل احداثيات المكان .,.">
             </div>

            <div class="mb-3">
              <input type="number" wire:model="Pform.points" dir="ltr" class="form-control text-start" id="partnerPoints" placeholder="كم تبقى من رصيد الدعم؟  يمكنك تركها فارعة ...">
          </div>

            <div class="mb-3">
                <select class="form-select" id="partnerClass" wire:model.live="Pform.class">
                    <option selected value="">إختر الفئة ...</option>
                    <option value="أ">أ</option>
                    <option value="ب">ب</option>
                    <option value="ج">ج</option>
                </select>
            </div>
            <div class="mb-3">
                <input type="file" wire:model="Pform.logo" name="" id="">
            </div>

            <div class="mb-2">
                <button type="submit" class="btn btn-success text-white">
                    تأكيـد
                </button>
                <button type="button" class="btn btn-primary text-white" wire:click="senddata">
                  ارسل بيانات الدخول
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  
    <div class="col-md-4 bg-white h-50">
        <div class="pt-5 team4">
              <div class="row">
                <!-- column  -->
                <div class="col-12 mb-4">
                  <!-- Row -->
                  <div class="row">
                    <div class="col-md-12 d-flex justify-content-center align-items-center">
                            @php
                            $logo = $this->Pform->logo;
                            $logoUrl = $logo 
                                ? (is_string($logo) 
                                    ? asset($logo) 
                                    : (method_exists($logo, 'temporaryUrl') 
                                        ? $logo->temporaryUrl() 
                                        : asset('img/default_avatar.png')))
                                : asset('img/default_avatar.png');
                        @endphp
                        <img src="{{ $logoUrl }}" alt="wrapkit" class="img-fluid rounded-circle w-50" />  
                    </div>              
                    <div class="col-md-12 text-center">
                        <div class="pt-2">
                            <h5 class="mt-4 font-weight-medium mb-0">{{$this->Uform->name}}</h5>
                            <h6 class="subtitle mb-3">{{$this->Pform->partner_name}}</h6>
                            <p>{{$this->Uform->phone}}</p>
                        </div>
                    </div>
                  </div>
                  <!-- Row -->
                </div>
                <!-- column  -->



    
              </div>
            </div>
          </div>
    </div>
  </div>
  
  <script async defer src="https://maps.googleapis.com/maps/api/js?libraries=places&callback=initAutocomplete&key=AIzaSyAat9OI4xdqvO2RjpsvbMx3PE3AoBCVoXo&language=ar&region=SA"></script>

  <script>
    
        function initAutocomplete() {
            const defaultLocation = { lat: {{$this->Pform->lat}}, lng: {{$this->Pform->lng}} }; // Replace with your default location

            const geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'location': defaultLocation }, function(results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        document.getElementById('partnerLat').value = results[0].formatted_address;
                    }
                }
            });

            const autocomplete = new google.maps.places.Autocomplete(
                document.getElementById('partnerLat')
            );

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (place.geometry) {
                    const lat = place.geometry.location.lat();
                    const lng = place.geometry.location.lng();
                    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
                    Livewire.dispatch('setCoordinates', { lat, lng })
                }
            });
        }

</script>


  @pushOnce('styles')

  <style>

@import url(//fonts.googleapis.com/css?family=Montserrat:300,500);
.team4 {
  font-family: "Montserrat", sans-serif;
	color: #8d97ad;
  font-weight: 300;
}

.team4 h1, .team4 h2, .team4 h3, .team4 h4, .team4 h5, .team4 h6 {
  color: #3e4555;
}

.team4 .font-weight-medium {
	font-weight: 500;
}

.team4 h5 {
    line-height: 22px;
    font-size: 18px;
}

.team4 .subtitle {
    color: #8d97ad;
    line-height: 24px;
		font-size: 13px;
}

.team4 ul li a {
  color: #8d97ad;
  padding-right: 15px;
  -webkit-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  transition: 0.1s ease-in;
}

.team4 ul li a:hover {
  -webkit-transform: translate3d(0px, -5px, 0px);
  transform: translate3d(0px, -5px, 0px);
	color: #316ce8;
}

</style>
      
  @endPushOnce