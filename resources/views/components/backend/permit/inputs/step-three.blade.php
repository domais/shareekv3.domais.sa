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
        <div class="col-5">
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
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.name" class="form-control rounded"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">رقم الجوال</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.phone" id="phone" dir="ltr" class="form-control text-end rounded" placeholder="05xxxxxx"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">البريد الإلكتروني</div>
                <div class="col-8"><input type="email" x-bind:disabled="is_show_page" wire:model="speakerForm.email" dir="ltr" class="form-control rounded" autocomplete="email"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">الجنسية</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.nationality" class="form-control rounded" autocomplete="nationality"></div>
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
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.twitter" dir="ltr" class="form-control rounded" autocomplete="twitter"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">رابط انستغرام</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.instagram" dir="ltr" class="form-control rounded" autocomplete="insta"></div>
            </div>


            <div class="row my-2">
                <div class="col-4 d-flex align-items-center">رابط لنكدإن</div>
                <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.linkedin" dir="ltr" class="form-control rounded" autocomplete="lnkedin"></div>
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

        <div class="col-6 pe-4">
            <div class=" row my-2 mx-0">
                <template x-for="(speaker,index) in speakers">
                    <div class="card p-2 mx-1 mb-2">
                        <div class="card-body d-flex justify-space-between align-items-center p-0">
                            <a role="button" class="card-title float-start mb-0 me-auto cursor-pointer text-decoration-none" x-text="speaker.name" @click="openModal(index)" style="color: black; transition: color 0.3s ease; cursor: pointer;" onmouseover="this.style.color='blue';" onmouseout="this.style.color='black';" data-bs-toggle="modal" data-bs-target="#speakerdetails"></a>
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
                            <button class="btn btn-danger float-end" x-bind:disabled="is_show_page" x-on:click="removeSpeaker(index)">×</button>
                        </div>
                    </div>
                </template>
            </div>
        </div>

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
                    <p><strong>الجنسية:</strong> <span x-text="Selectedspeaker.nationality"></span></p>
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