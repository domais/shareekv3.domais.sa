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
    
    <div class="container my-3">
        <div class="row">
            <div class="col-12">
            <!-- Button trigger modal -->
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    أضف شريك جديد
                </button>


                                <!-- Modal -->
                <div wire:ignore class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">إضافة شريك</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h5>معلومات المالك</h5>
                                <div class="mb-3">
                                    <label for="userName" class="form-label">الإسم الكامل</label>
                                    <input type="text" wire:model="Uform.name" class="form-control" id="userName">
                                </div>
                                <div class="mb-3">
                                    <label for="userEmail" class="form-label">البريد الإلكتروني</label>
                                    <input type="email" wire:model="Uform.email" class="form-control" id="userEmail">
                                </div>
                                <div class="mb-3">
                                    <label for="userPhone" class="form-label">رقم الهاتف</label>
                                    <input type="tel" wire:model="Uform.phone" class="form-control" id="userPhone">
                                </div>
                        
                                <h5>معلومات الشريك</h5>
                                <div class="mb-3">
                                    <label for="partnerName" class="form-label">إسم</label>
                                    <input type="text" wire:model="Pform.partner_name" class="form-control" id="partnerName">
                                </div>
                                <div class="mb-3">
                                    <label for="partnerCity" class="form-label">المدينة</label>
                                    <input type="text" wire:model="Pform.city" class="form-control" id="partnerCity">
                                </div>
                                <div class="mb-3">
                                    <label for="partnerLat" class="form-label">lat</label>
                                    <input type="number" wire:model="Pform.lat" step="any" class="form-control" id="partnerLat">
                                </div>
                                <div class="mb-3">
                                    <label for="partnerLng" class="form-label">lng</label>
                                    <input type="number" step="any" wire:model="Pform.lng" class="form-control" id="partnerLng">
                                </div>
                                <div class="mb-3">
                                    <label for="partnerClass" class="form-label">القسم</label>
                                    <select class="form-select" id="partnerClass" wire:model.live="Pform.class">
                                        <option selected>إختر</option>
                                        <option value="أ">أ</option>
                                        <option value="ب">ب</option>
                                        <option value="ج">ج</option>
                                        <option value="د">د</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="partnerCR" class="form-label">السجل التجاري</label>
                                    <input type="number" wire:model="Pform.CR" class="form-control" id="partnerCR">
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                            <button type="button" wire:click="save"  class="btn btn-success">حفظ</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

    <livewire:backend.data-table.partner-table />
</div>
