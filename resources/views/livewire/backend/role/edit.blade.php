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
                <input type="text" wire:model="Uform.name" class="form-control text-start" id="userName" placeholder="الإسم" >
            </div>
            <div class="mb-3">
                <input type="email" wire:model="Uform.email" dir="ltr" class="form-control text-start" id="userEmail" placeholder="البريد الإلكتروني">
            </div>
            <div class="mb-3">
                <input type="tel" wire:model="Uform.phone" dir="ltr" class="form-control text-start" id="userPhone" placeholder="رقم الجوال">
            </div>

            <div class="row mx-2">
                @foreach($permissions as $permission)
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" wire:model="selected_permissions" value="{{ $permission->id }}">
                        <label class="form-check-label" for="permission{{ $permission->id }}">
                            {{ $permission->display_name }}
                        </label>
                    </div>
                @endforeach
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