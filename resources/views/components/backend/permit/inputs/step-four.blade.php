<section>
    <div class="content-wrapper"
        x-data="{
            partnerships: @entangle('partnerships').live,
            removePartnership: function(index) {
                this.partnerships.splice(index, 1);
            }
        }"     
    >
        <div class="row">
            <div class="col-6">
                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">إسم الجهة</div>
                    <div class="col-9"><input type="text" x-bind:disabled="is_show_page" wire:model="partnershipForm.name" class="form-control rounded"></div>
                </div>

                
                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">نوع الجهة</div>
                    <div class="col-9">
                        <select class="form-control" wire:model="partnershipForm.type" x-bind:disabled="is_show_page">
                            <option value="نادي ثقافي">نادي ثقافي</option>       
                            <option value="جمعية">جمعية</option>         
                            <option value="قطاع خاص">قطاع خاص</option>      
                            <option value="قطاع حكومي">قطاع حكومي</option>     
                        </select>
                    </div>

                </div>

                
                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">أثر /منفعة الشراكة</div>
                    <div class="col-9">
                        <textarea class="form-control" x-bind:disabled="is_show_page"  wire:model="partnershipForm.description" id="description" rows="3"></textarea>

                    </div>
                </div>

                
                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center"></div>
                    <div class="col-9">
                        <button class="btn btn-success w-100" wire:click="addPartnership">
                            إضافة
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="col-5">
                <div class=" row my-3">
                    <template x-for="(partnership,index) in partnerships">

                        <div class="card p-2 mx-1 mb-2" style="width: 100%">
                            <div class="card-body d-flex justify-space-between align-items-center p-0">
                                <h5 class="card-title float-start mb-0 me-auto" x-text="partnership.name"></h5>
                                <button class="btn btn-danger float-end" x-bind:disabled="is_show_page" x-on:click="removePartnership(index)">×</button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</section>