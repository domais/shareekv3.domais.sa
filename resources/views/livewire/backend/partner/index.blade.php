<div x-data="{errors: @entangle('ValidationErrors').live}" x-init="
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



	<nav aria-label="breadcrumb" class="my-5">
		<div class="topbar py-3 bg-body-tertiary rounded-3 w-100">
			<ol class="breadcrumb breadcrumb-chevron m-0">
				<li class="breadcrumb-item">
					<a class="link-body-emphasis" href="#">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li class="breadcrumb-item">
					<a class="link-body-emphasis text-decoration-none" href="{{route('partner.index')}}">الشركاء</a>
				</li>
			</ol>
            @if(havePermission(auth()->user(),'partner-create'))
			<div class="links">
                <button type="button" class="btn btn-brand float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    أضف شريك جديد
                </button>
			</div>
            @endif
		</div>
	</nav>




    <div class="container my-3">
        <div class="row">
            <div class="col-12">

                <livewire:backend.data-table.partner-table />

                @if(havePermission(auth()->user(),'partner-create'))
                    <!-- Modal -->
                    <div wire:ignore class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">إضافة شريك</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                    <div class="mb-3">
                                        <input type="text" wire:model="Pform.partner_name" class="form-control text-start" id="partnerName" placeholder="اسم المنشأة / اسم الشريك">
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" wire:model="Uform.name" class="form-control text-start" id="userName" placeholder="الشخص المسؤول" >
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" wire:model="Uform.email" dir="ltr" class="form-control text-start" id="userEmail" placeholder="البريد الإلكتروني">
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
                                        <input type="number" wire:model="Pform.points" dir="ltr" class="form-control text-start" id="partnerPoints" placeholder="كم تبقى من رصيد الدعم؟">
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
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">إغلاق</button>
                                <button type="button" wire:click="save" wire:loading.attr="disabled" class="btn btn-success">حفظ</button>                            </div>
                        </div>
                        </div>
                    </div>
                @endif

            </div>
        </div>
      </div>

</div>

<script>
    function initAutocomplete() {
        const input = document.getElementById('partnerLat');
        const autocomplete = new google.maps.places.Autocomplete(input);

        let service = new google.maps.places.AutocompleteService();
        let pacContainerInitialized = false;

        input.addEventListener('input', () => {
            if (!pacContainerInitialized) {
                setTimeout(() => {
                    const pacContainer = document.querySelector('.pac-container');
                    if (pacContainer) {
                        pacContainer.style.zIndex = '9999';
                        pacContainerInitialized = true;
                    }
                }, 0);
            }

            if (input.value) {
                service.getPlacePredictions({ input: input.value }, (predictions, status) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        console.log(predictions);
                    }
                });
            }
        });

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

    initAutocomplete();
</script>

@pushOnce('scripts')
<script src="https://maps.googleapis.com/maps/api/js?libraries=places&callback=initAutocomplete&key=AIzaSyA1Nkm7JLvCWyiVaU4lTFbg8wCBFrgtQTo&language=ar&region=SA"></script>
@endPushOnce

@pushOnce('styles')
    
<style>
    .pac-container {
        z-index: 1051 !important;
    }
</style>

@endPushOnce
