<div class="row">

    <div class="col-5">
        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">الاسم الثلاثي</div>
            <div class="col-8"><input type="text" wire:model="speakerForm.name" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">رقم الجوال</div>
            <div class="col-8"><input type="text" wire:model="speakerForm.phone" id="phone" dir="ltr" class="form-control text-end rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">البريد الإلكتروني</div>
            <div class="col-8"><input type="email" wire:model="speakerForm.email" dir="ltr" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">الجنسية</div>
            <div class="col-8"><input type="text" wire:model="speakerForm.nationality" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">تصنيف المتحدث</div>
            <div class="col-8">
                <select class="form-control" wire:model="speakerForm.type">
                    <option selected disabled value="">اختر ...</option>
                    <option value="كاتب">كاتب</option>
                    <option value="شاعر">شاعر</option>
                    <option value="راوي">راوي</option>
                    <option value="ناشط ثقافي">ناشط ثقافي</option>
                </select>
            </div>

        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">رابط تويتر</div>
            <div class="col-8"><input type="text" wire:model="speakerForm.twitter" dir="ltr" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">رابط انستغرام</div>
            <div class="col-8"><input type="text" wire:model="speakerForm.instagram" dir="ltr" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center">رابط لنكدإن</div>
            <div class="col-8"><input type="text" wire:model="speakerForm.linkedin" dir="ltr" class="form-control rounded"></div>
        </div>


        <div class="row my-2">
            <div class="col-4 d-flex align-items-center"></div>
            <div class="col-8">
                <button class="btn btn-success w-100" wire:click="addSpeaker">
                    إضافة
                </button>
            </div>
        </div>
    </div>

    <div class="col-1"></div>
    <div class="col-6">
        <div class=" row my-2">
            @foreach ($this->speakers as $key => $item)

            <div class="card p-2 mx-1 mb-2" style="width: 100%">
                <div class="card-body d-flex justify-space-between align-items-center p-0">
                    <h5 class="card-title float-start mb-0 me-auto">{{$item['name']}}</h5>
                    <button class="btn btn-danger float-end" wire:click="deleteSpeaker({{$key}})">×</button>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>