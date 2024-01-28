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
                <input type="text" wire:model="Pform.coordinates" dir="ltr" class="form-control text-start" id="partnerLat" placeholder="ادخل احداثيات المكان 21.345,46.321">
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
            </div>

          </form>
        </div>
      </div>
    </div>
  
    <div class="col-md-4 mb-4">
    </div>
  </div>