<section>
    <div class="content-wrapper"
        x-data="{
            ps: {},
            partnerships: @entangle('partnerships').live,
            removePartnership: function(index) {
                this.partnerships.splice(index, 1);
            },
            openModalPartner: function(index) {
                console.log(this.partnerships[index])
                this.ps = this.partnerships[index];
            }
        }">
        <!-- Modal -->
        <div class="modal fade" id="partnerDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" x-text="ps.name"></h5>          
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>الاسم:</strong> <span x-text="ps.name"></span></p>
                    <p><strong>النوع:</strong> <span x-text="ps.type"></span></p>
                    <p><strong>الوصف:</strong> <span x-text="ps.description"></span></p>
                </div>
            </div>
            </div>
        </div>

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
                                <a role="button" class="card-title float-start mb-0 me-auto" x-text="partnership.name" @click="openModalPartner(index)" style="color: black; transition: color 0.3s ease; cursor: pointer;" onmouseover="this.style.color='blue';" onmouseout="this.style.color='black';" data-bs-toggle="modal" data-bs-target="#partnerDetails"></a>                                <button class="btn btn-danger float-end" x-bind:disabled="is_show_page" x-on:click="removePartnership(index)">×</button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</section>