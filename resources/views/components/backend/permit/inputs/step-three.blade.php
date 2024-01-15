<div    class="row"
        x-data="{
            speakers: @entangle('speakers').live,
            removeSpeaker: function(index) {
                this.speakers.splice(index, 1);
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
            <div class="col-8"><input type="email" x-bind:disabled="is_show_page" wire:model="speakerForm.email" dir="ltr" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">الجنسية</div>
            <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.nationality" class="form-control rounded"></div>
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
            <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.twitter" dir="ltr" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">رابط انستغرام</div>
            <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.instagram" dir="ltr" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">رابط لنكدإن</div>
            <div class="col-8"><input type="text" x-bind:disabled="is_show_page" wire:model="speakerForm.linkedin" dir="ltr" class="form-control rounded"></div>
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
    <div class="col-6 pe-4">
        <div class=" row my-2 mx-0">
            <template x-for="(speaker,index) in speakers">

                <div class="card p-2 mx-1 mb-2">
                    <div class="card-body d-flex justify-space-between align-items-center p-0">
                        <h5 class="card-title float-start mb-0 me-auto" x-text="speaker.name"></h5>
                        <div class="float-end d-flex align-items-center">
                            <div class="form-check form-switch">
                                <input class="form-check-input " type="checkbox" role="switch" :id="'flexSwitchCheckDefault' + index + '_1'" x-model="speaker.reward">
                                <label class="form-check-label" :for="'flexSwitchCheckDefault' + index + '_1'">
                                    مكافأة
                                </label>
                            </div>
                            <div class="form-check form-switch mx-3">
                                <input class="form-check-input " type="checkbox" role="switch" :id="'flexSwitchCheckDefault' + index + '_2'" x-model="speaker.reservations">
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
</div>
<script>
    window.addEventListener("DOMContentLoaded", function(event) {

        $(window).ready(function() {
            $('.js-example-basic-multiple').select2();
        });
    });
</script>