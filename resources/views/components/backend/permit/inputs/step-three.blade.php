<div    
class="row"
x-data="{
    speakers: @entangle('speakers').live,
    Selectedspeaker: {},
    removeSpeaker: function(index) {
        this.speakers.splice(index, 1);
    },
    openModal: function(index) {
        this.Selectedspeaker = this.speakers[index];
    }
}"
>
        <div class="{{ $this->is_show_page ? 'd-none':'col-5'}}">
            {{-- <div class="row my-2">
                <div class="col-4 d-flex align-items-center">إختر متحدث موجود من قبل</div>
                <div class="col-8">
                    <select class="js-example-basic-multiple form-control rounded" name="states[]" multiple="multiple">
                        <option value="AL">Alabama</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                
            </div> --}}

            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">الاسم الثلاثي</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.name" class="form-control rounded" autocomplete="name" id="name"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">رقم الجوال</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.phone" id="phone" dir="ltr" class="form-control text-end rounded" placeholder="05xxxxxx"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">البريد الإلكتروني</div>
                <div class="col-8"><input type="email" x-bind:disabled="is_show_page" wire:model="speakerForm.email" dir="ltr" class="form-control rounded" autocomplete="email" id="email"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">مدينة المتحدث</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.nationality" class="form-control rounded" autocomplete="nationality" id="nationality"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">تصنيف المتحدث</div>
                <div class="col-8">
                    <select class="form-control" wire:model="speakerForm.type" x-bind:disabled="is_show_page">
                        <option selected disabled value="">اختر ...</option>
                        <option value="كاتب">كاتب</option>
                        <option value="ناشط ثقافي">ناشط ثقافي</option>
                    </select>
                </div>

            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">رابط تويتر</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.twitter" dir="ltr" class="form-control rounded" autocomplete="twitter" id="twitter"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">رابط انستغرام</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.instagram" dir="ltr" class="form-control rounded" autocomplete="insta" id="insta"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">رابط لنكدإن</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.linkedin" dir="ltr" class="form-control rounded" autocomplete="lnkedin" id="lnkedin"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center"></div>
                <div class="col-8">
                    <button class="btn btn-success w-100" x-bind:disabled="is_show_page" wire:click="addSpeaker">
                        إضافة
                    </button>
                </div>
            </div>
        </div>

        <div class="col-1"></div>
        <div class="{{ $this->is_show_page ? 'col-10':'col-6'}} pe-4">
            <div class=" row my-2 mx-0">
                @if(!$this->is_show_page)
                <template x-for="(speaker,index) in speakers">
                    <div class="card p-2 mx-1 mb-2">
                        <div class="card-body d-flex justify-space-between align-items-center p-0">
                            <a role="button" class="card-title float-start mb-0 me-auto cursor-pointer text-decoration-none me-3" x-text="speaker.name" @click="openModal(index)" style="color: black; transition: color 0.3s ease; cursor: pointer;" data-bs-toggle="modal" data-bs-target="#speakerdetails"></a>
                            @if ( Route::currentRouteName() != 'permit.edit' || auth()->user()->hasRole('SuperAdmin'))
                                <div class="float-end d-flex align-items-center">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input " type="checkbox" role="switch" :id="'flexSwitchCheckDefault' + index + '_1'" x-model="speaker.reward" x-on:change="changeStatus(index, 'reward')">
                                        <label class="form-check-label" :for="'flexSwitchCheckDefault' + index + '_1'">
                                            مكافأة
                                        </label>
                                    </div>
                                    <div class="form-check form-switch mx-3">
                                        <input class="form-check-input " type="checkbox" role="switch" :id="'flexSwitchCheckDefault' + index + '_2'" x-model="speaker.reservations" x-on:change="changeStatus(index, 'reservations')">
                                        <label class="form-check-label" :for="'flexSwitchCheckDefault' + index + '_2'">
                                            حجوزات
                                        </label>
                                    </div>
                                </div>
                            @endif
                            <button class="btn btn-danger float-end" x-bind:disabled="is_show_page" x-on:click="removeSpeaker(index)">×</button>
                        </div>
                    </div>
                </template>
                @else
                <template x-for="(speaker,index) in speakers">
                    <div class="card p-2 mx-2 mb-2">
                        <div class="card-body d-flex justify-content-between align-items-center p-0">
                            <div>
                                <a style="width:200px" class="d-inline-block overflow-hidden card-title float-start mb-0 me-auto cursor-pointer text-decoration-none" x-text="speaker.name" @click="openModal(index)" style="color: black; transition: color 0.3s ease; cursor: pointer;" data-bs-toggle="modal" data-bs-target="#speakerdetails"></a>
                                <span style="width:130px" class="d-inline-block text-center" x-text="speaker.type"></span>
                                <span style="width:100px" class="d-inline-block text-center" x-text="speaker.phone"></span>
                                <a href="https://wa.me/966<!-- Rahmani:put mobile here after cuttent the firest digit (0) -->" target="_tab"><img class="ms-2" src="{{ asset('img/whatsapp.png') }}" height="20"></a>
                            </div>
                                <div class="d-flex align-items-center">
                                    <div class="px-2 border rounded-2 me-3 opacity-50 " :class="speaker.reward ? 'text-success-emphasis bg-success-subtle border-success opacity-100' : 'text-muted bg-light border-muted'">
                                        <x-heroicon-o-banknotes style="width: 21px" class="opacity-50" />
                                        مكافأة
                                    </div>
                                    <div class="px-2 border rounded-2 me-3 opacity-50 " :class="speaker.reservations ? 'text-success-emphasis bg-success-subtle border-success opacity-100' : 'text-muted bg-light border-muted'">
                                        <x-heroicon-o-check-circle style="width: 21px" class="opacity-50" />
                                        حجوزات
                                    </div>
                                </div>
                        </div>
                    </div>
                </template>
                @endif
            </div>
        </div>
        <div class="{{ $this->is_show_page ? 'd-none':'col-1'}}"></div>

        <!-- Modal -->
        <div class="modal fade" id="speakerdetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" x-text="Selectedspeaker.name"></h5>          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>الاسم:</strong> <span x-text="Selectedspeaker.name"></span></p>
                    <p><strong>البريد الإلكتروني:</strong> <span x-text="Selectedspeaker.email"></span></p>
                    <p><strong>رقم الجوال:</strong> <span x-text="Selectedspeaker.phone"></span></p>
                    <p><strong>مدينة المتحدث :</strong> <span x-text="Selectedspeaker.nationality"></span></p>
                    <p><strong>الصفة:</strong> <span x-text="Selectedspeaker.type"></span></p>
                    <p><strong>الحجوزات:</strong> <i :class="{'fas fa-check text-success': Selectedspeaker.reservations, 'fas fa-times text-danger': !Selectedspeaker.reservations}"></i></p>
                    <p><strong>المكافآت:</strong> <i :class="{'fas fa-check text-success': Selectedspeaker.reward, 'fas fa-times text-danger': !Selectedspeaker.reward}"></i></p>
                    <div>
                        <a x-show="Selectedspeaker.twitter" :href="Selectedspeaker.twitter" target="_blank" class="text-twitter"><i class="fab fa-twitter"></i></a>
                        <a x-show="Selectedspeaker.instagram" :href="Selectedspeaker.instagram" target="_blank" class="text-instagram"><i class="fab fa-instagram" style="color: #E1306C;"></i></a>
                        <a x-show="Selectedspeaker.linkedin" :href="Selectedspeaker.linkedin" target="_blank" class="text-linkedin"><i class="fab fa-linkedin" style="color: #0A66C2;"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
</div>
<script>
    window.addEventListener("DOMContentLoaded", function(event) {

        $(window).ready(function() {
            $('.js-example-basic-multiple').select2();
        });
    });


    function changeStatus(index, status) {
            Livewire.dispatch('changeSpeakerStatus', 
            {
                index:index,
                status:status
            });
    }
</script>