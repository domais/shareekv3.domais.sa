
<section 
 x-data="{
    event_type_id: @entangle('form.event_type_id').live,
    type: @entangle('form.category_id').live,
    literary_id: @entangle('form.literary_id').live,
    Litrary_childes: @entangle('Litrary_childes').live,
 }"
>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-7">
                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">نوع المبادرة</div>
                    <div class="col-9">
                        <select class="form-control rounded" wire:model.live="form.event_type_id" x-model="event_type_id">
                            <option selected  disabled value="">اختر ...</option>
                            @foreach (settings('event_type') as $item)
                               <option value="{{$item->id}}">{{$item->name}} </option>                                
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="row my-3">

                    <div class="col-3 d-flex align-items-center">
                        <span  x-text="event_type_id == 1 ? 'نوع الفعالية' : 'نوع المساهمة' "></span>
                    </div>
                    <div class="col-9">
                        <select class="form-control"  x-model="type" wire:model.live="form.category_id">
                            <option selected disabled value="">اختر ...</option>
                            <option value="محاضرة">محاضرة</option>
                            <option value="ورشة عمل">ورشة عمل</option>
                            <option value="حلقة نقاشية">حلقة نقاشية</option>
                            <option value="جلسة حوارية">جلسة حوارية</option>
                            <option value="أمسية شعرية">أمسية شعرية</option>
                            <option value="7">أخرى</option>
                        </select>
                    </div>
                </div>

                <div class="row my-3" x-show="type == 7">

                    <div class="col-3 d-flex align-items-center">
                        الرجاء كتابة النوع  
                    </div>
                    <div class="col-9">
                       <input type="text" class="form-control rounded" wire:model.live="form.other" >
                    </div>

                </div>

                

                
                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">الفئة المستهدفة</div>
                    <div class="col-9">
                        <div >
                        <select class="form-control rounded" wire:model.live="form.targeted_audience">
                                <option selected disabled  value="">اختر ...</option>
                                <option value="1">الأطفال (0-11)</option>
                                <option value="2">اليافعين (12-18)</option>
                                <option value="3">الكبار (+18)</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">نوع الأدب</div>
                    <div class="col-9">
                        <select class="form-control rounded" wire:model.live="form.literary_id">
                            <option selected disabled value="">اختر ...</option>
                            @foreach (settings('Literary_parent') as  $item)
                               <option value="{{$item->id}}">{{$item->name}} </option>                                
                            @endforeach
                        </select>
                    </div>
                </div>

                
                <div class="row my-3" x-show="literary_id">
                    <div class="col-3 d-flex align-items-center">نوع الفرعي للأدب</div>
                    <div class="col-9">
                        <div >
                        <select class="form-control rounded" wire:model.live="form.litrary_children_id">
                                <option selected disabled value="">اختر ...</option>
                                <template x-for="item in Litrary_childes" :key="item.id">
                                    <option x-bind:value="item.id" x-text="item.name"></option>
                                </template>
                            </select>
                        </div>
                    </div>
                </div>
                

                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">عنوان المبادرة</div>
                    <div class="col-9"><input type="text" class="form-control rounded" wire:model="form.title"></div>
                </div>
                <div class="row my-4" >
                    <div class="col-3 d-flex align-items-center">وصف المبادرة</div>
                    <div class="col-9 h-75" wire:ignore>
                        <div id="editor" wire:ignore style="height: 120px;background-color: #fff;">
                        </div>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">تاريخ البداية</div>
                    <div class="col-9"><input type="text" value="" class="form-control rounded" id="start_date" wire:model.live="form.start_date"></div>
                </div>
                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">تاريخ النهاية</div>
                    <div class="col-9"><input type="text"  class="form-control rounded" id="end_date" wire:model.live="form.end_date"></div>
                </div>
     
                <div class="row my-3">
                    <div class="col-3 d-flex align-items-center">عدد الحضور</div>
                    <div class="col-9"><input type="number" min="1" step="1" class="form-control rounded text-left" wire:model="form.attendees_number"></div>
                </div>
            </div>
            <div class="col-5">
                
                <div class="row my-3">
                    <div class="col-12">
                        <label for="test" class="dropzone1 w-100">
                            <div class="dropzone1">
                                اضغط هنا لإرفاق صورة الإعلان<br><br>
                                <small>اختر صورة طولية مقاسها 500×500 بكسل</small>
                                <img id="preview" class="mt-3 rounded mx-auto" width="100%">
                            </div>
                            <input type="file" class="dropzone1" id="test" wire:model="form.image"  onchange="document.getElementById('preview').src = window.URL.createObjectURL(this.files[0])">
                        </label>
                    </div>
                    <!-- <div class="col-9"><input type="file" class="form-control rounded"  onchange="document.getElementById('preview').src = window.URL.createObjectURL(this.files[0])"></div> -->
                </div>

            </div>
        </div>
    </div>
</section>

<script>
    var fileInput = document.querySelector('input[type=file]');
    var filenameContainer = document.querySelector('#filename');
    var dropzone = document.querySelector('div');



    fileInput.addEventListener('dragenter', function() {
        dropzone.classList.add('dragover');
    });

    fileInput.addEventListener('dragleave', function() {
        dropzone.classList.remove('dragover');
    });
</script>