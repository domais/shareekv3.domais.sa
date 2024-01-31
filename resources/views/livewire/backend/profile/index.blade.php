<div class="container mt-5"
x-data="{  errors: @entangle('validationErrors').live  }" x-init="

        if (errors.length > 0) {
                const errorMessage = errors.join('<br>');
                Swal.fire({
                    icon: 'error',
                    title: 'يوجد بيانات ناقصة',
                    showConfirmButton: false,
                    html: errorMessage  // Use 'html' to display formatted text
                });
                errors = []
        }
        $watch('errors', value => {

            if (value.length > 0) {
                const errorMessage = value.join('<br>');
                Swal.fire({
                    icon: 'error',
                    title: 'يوجد بيانات ناقصة',
                    showConfirmButton: false,
                    html: errorMessage  // Use 'html' to display formatted text
                });
                errors = []
            }
        });
    ">
    
    <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                <div class="text-center">
                    @php
                    if (auth()->user()->owner) {
                        if ( auth()->user()->owner->fileable) {
                            $userImage = auth()->user()->owner->fileable->path 
                        ? asset('https://nextlevel.ams3.digitaloceanspaces.com/' . auth()->user()->owner->fileable->path) 
                        : asset('img/default_avatar.png');
                        }
                        else {
                            $userImage = asset('img/default_avatar.png');
                        }
        
                    }
                    else {
                        $userImage = asset('img/default_avatar.png');
                    }

                @endphp
                    <img src="{{ $userImage }}" width="100" class="rounded-circle">
                </div>
                
                <div class="text-center mt-3">
                    <span class="bg-secondary p-1 px-4 rounded text-white">{{$this->user->roles->first()->display_name}}</span>
                    <h5 class="mt-2 mb-0">{{auth()->user()->name}}</h5>
                    @if (auth()->user()->hasRole('User'))
                        <span>
                            {{$this->user->owner->name}}
                        </span>    
                    @endif
                    
                    
                    <div class="px-4 my-5">
                            تاريخ الانضمام: {{ \Carbon\Carbon::parse(auth()->user()->created_at)->diffForHumans() }}<br>
                            البريد الإلكتروني: {{ auth()->user()->email }}<br>
                            الهاتف المحمول: {{ auth()->user()->phone }}
                    </div>
                
                    <div class="buttons">
                        <button class="btn btn-outline-primary px-4"  data-bs-toggle="modal" data-bs-target="#openModalInformation">  تعديل المعلومات الشخصية</button>
                        <button class="btn btn-outline-warning px-4"  data-bs-toggle="modal" data-bs-target="#openModalPassword">تعديل كلمة السر</button>

                    </div>
                </div>  
            </div>   
        </div>
    </div>

    <!-- Modal Information -->
    <div wire:ignore class="modal fade" id="openModalInformation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">تعديل المعلومات الشخصية</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row mt-2">
                    <div class="col-5 d-flex align-items-center">الإسم</div>
                    <div class="col-7"><input type="text" wire:model="name" class="form-control" id="name"></div>
                </div>

                <div class="row mt-2">
                    <div class="col-5 d-flex align-items-center">البريد الإلكتروني</div>
                    <div class="col-7"><input type="email" wire:model="email" class="form-control" id="email"></div>
                </div>

                <div class="row mt-2">
                    <div class="col-5 d-flex align-items-center">رقم الجوال</div>
                    <div class="col-7"><input type="email" wire:model="phone" class="form-control" id="email"></div>
                </div>
            
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">إغلاق</button>
            <button type="button" wire:click="updateInformation" class="btn btn-primary">حفظ</button>
            </div>
        </div>
        </div>
    </div>

        <!-- Modal Change Password -->
        <div wire:ignore class="modal fade" id="openModalPassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">تعديل كلمة السر </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mt-2">
                        <div class="col-5 d-flex align-items-center">كلمة السر الحالية</div>
                        <div class="col-7"><input type="password" wire:model="current_password" class="form-control" id="current_password"></div>
                    </div>
    
                    <div class="row mt-2">
                        <div class="col-5 d-flex align-items-center">كلمة السر الجديدة</div>
                        <div class="col-7"><input type="password" wire:model="password" class="form-control" id="password"></div>
                    </div>
    
                    <div class="row mt-2">
                        <div class="col-5 d-flex align-items-center">تأكيد كلمة السر الجديدة</div>
                        <div class="col-7"><input type="password" wire:model="password_confirmation" class="form-control" id="password_confirmation"></div>
                    </div>
                
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">إغلاق</button>
                <button type="button" wire:click="updatePassword" class="btn btn-primary">حفظ</button>
                </div>
            </div>
            </div>
        </div>
    
</div>
@pushOnce('styles')

<style>
    body{
    background:#eee;
}

.card{
    border:none;

    position:relative;
    overflow:hidden;
    border-radius:8px;
    cursor:pointer;
}

.card:before{
    
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:4px;
    height:100%;
    background-color:#175365;
    transform:scaleY(1);
    transition:all 0.5s;
    transform-origin: bottom
}

.card:after{
    
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:4px;
    height:100%;
    background-color:#ae2a3f;
    transform:scaleY(0);
    transition:all 0.5s;
    transform-origin: bottom
}

.card:hover::after{
    transform:scaleY(1);
}


.fonts{
    font-size:11px;
}

.social-list{
    display:flex;
    list-style:none;
    justify-content:center;
    padding:0;
}

.social-list li{
    padding:10px;
    color:#ae2a3f;
    font-size:19px;
}


.buttons button:nth-child(1){
       border:1px solid #ae2a3f !important;
       color:#ae2a3f;
       height:40px;
}

.buttons button:nth-child(1):hover{
       border:1px solid #ae2a3f !important;
       color:#fff;
       height:40px;
       background-color:#ae2a3f;
}

.buttons button:nth-child(2){
       border:1px solid #dbf12e !important;
       color:#000000;
        height:40px;
}
</style>
    
@endpushOnce