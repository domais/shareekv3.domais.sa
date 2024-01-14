<div class="row" x-data="{
    event_type_id: @entangle('form.event_type_id').live,
    type: @entangle('form.category_id').live,
    literary_id: @entangle('form.literary_id').live,
    Litrary_childes: @entangle('Litrary_childes').live,
}">

    <div class="col-7">
        @if (auth()->user()->hasRole('SuperAdmin'))
            <div class="row my-3">
                <div class="col-3 d-flex align-items-center">الشريك</div>
                <div class="col-9">مقهى النرجس / عبدالله الفوزان</div> <!-- Rahmani: Fix this -->
            </div>
        @endif

        <div class="row my-3">
            <div class="col-3 d-flex align-items-center">نوع المبادرة</div>
            <div class="col-9">
                <select class="form-control rounded" x-bind:disabled="is_show_page" wire:model.live="form.event_type_id"
                    x-model="event_type_id">
                    <option selected disabled value="">اختر ...</option>
                    @foreach (settings('event_type') as $item)
                        <option value="{{ $item->id }}">{{ $item->name }} </option>
                    @endforeach
                </select>
            </div>
        </div>


        <div class="row my-3">

            <div class="col-3 d-flex align-items-center">
                <span x-text="event_type_id == 1 ? 'نوع الفعالية' : 'نوع المساهمة' "></span>
            </div>
            <div class="col-9">
                <select class="form-control" x-bind:disabled="is_show_page" x-model="type"
                    wire:model.live="form.category_id">
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
                <input type="text" x-bind:disabled="is_show_page" class="form-control rounded"
                    wire:model.live="form.other">
            </div>

        </div>


        <div class="row my-3">
            <div class="col-3 d-flex align-items-center">الفئة المستهدفة</div>
            <div class="col-9">
                <div>
                    <select class="form-control rounded" wire:model.live="form.targeted_audience"
                        x-bind:disabled="is_show_page">
                        <option selected disabled value="">اختر ...</option>
                        <option value="1">الأطفال (0-11)</option>
                        <option value="2">اليافعين (12-18)</option>
                        <option value="3">الكبار (+18)</option>
                    </select>
                </div>
            </div>
        </div>


        <div class="row my-3" x-show="event_type_id == 1">
            <div class="col-3 d-flex align-items-center">نوع الأدب</div>
            <div class="col-9">
                <select class="form-control rounded" wire:model.live="form.literary_id" x-bind:disabled="is_show_page">
                    <option selected disabled value="">اختر ...</option>
                    @foreach (settings('Literary_parent') as $item)
                        <option value="{{ $item->id }}">{{ $item->name }} </option>
                    @endforeach
                </select>
            </div>
        </div>


        <div class="row my-3" x-show="literary_id">
            <div class="col-3 d-flex align-items-center">نوع الفرعي للأدب</div>
            <div class="col-9">
                <div>
                    <select class="form-control rounded" wire:model.live="form.litrary_children_id"
                        x-bind:disabled="is_show_page">
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
            <div class="col-9"><input type="text" x-bind:disabled="is_show_page" class="form-control rounded"
                    wire:model="form.title"></div>
        </div>


        <div class="row mt-4">
            <div class="col-3 d-flex align-items-center">وصف المبادرة</div>
            <div class="col-9 h-100" wire:ignore>
                <div id="editor">
                    {!! $this->form->description !!}
                </div>
            </div>
        </div>


    </div><!-- /col-7 -->


    <div class="col-5" x-data="{ start_date: '', end_date: '' }">

        <div class="row my-3">
            <div class="col-3 d-flex align-items-center">عدد الحضور</div>
            <div class="col-9"><input type="number" x-bind:disabled="is_show_page" inputmode="numeric"
                    class="form-control rounded text-left" wire:model="form.available_seats"></div>
        </div>


        <div class="row my-3">
            <div class="col-3 d-flex align-items-center">تاريخ البداية</div>
            <div class="col-9">
                <input type="text" x-bind:disabled="is_show_page" x-model="start_date" class="form-control rounded" autocomplete="off"
                    dir="ltr" id="start_date" wire:model.live="form.start_date">
            </div>
        </div>


        <div class="row my-3">
            <div class="col-3 d-flex align-items-center">تاريخ النهاية</div>
            <div class="col-9">
                <input type="text" x-bind:disabled="is_show_page" x-model="end_date" class="form-control rounded" autocomplete="off"
                    dir="ltr" id="end_date" wire:model.live="form.end_date">
            </div>
        </div>
        <div class="row mt-3 mt-5">
            <div class="col-1"></div>
            <div class="col-11">
                <input type="file" x-bind:disabled="is_show_page" class="style image mx-auto mb-3"
                    id="AdvImg_input">
                @if ($this->permit)
                    <div class="DropArea" style="height: 360px">
                        <img id="AdvImg"
                            src="{{ asset('storage/' . $this->permit->fileable->where('use', 'adv')->first()->path) }}"
                            alt="Picture">
                    </div>
                @else
                    <div class="DropArea" style="height: 360px">
                        <img id="AdvImg" src="{{ asset('img/pexel.png') }}" alt="Picture">
                    </div>
                @endif

            </div>
        </div><!-- /col-5 -->
    </div>
</div>
<style>
    input[type=file]#AdvImg_input::before {
        content: 'اضغط هنا لأختيار صورة الإعلان'
    }
</style>

<script>
    // start of Quill Editor ============================================

    var quillContent = '';

    document.addEventListener("DOMContentLoaded", function(event) {

        $('#start_date, #end_date').datetimepicker({
            i18n: {
                ar: {
                    months: [
                        'جانوري', 'فبراير', 'مارس', 'أبريل',
                        'مايو', 'جون', 'جولاي', 'أغسطس',
                        'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
                    ],
                    days: [
                        "احد", "اثنين", "ثلاثاء", "Mi",
                        "Do", "Fr", "Sa.",
                    ]
                }
            },
            format: 'Y-m-d h:i A',
            step: 30,
            minDate: 0,
            formatTime: 'h:i A',
            todayButton: false,
            defaultDate: new Date(),
            defaultTime: '05:00',
            onClose: function(current_time, $input) {
                var id = $input[0].id;
                var date = new Date(current_time);
                var formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1).toString()
                    .padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0') + ' ' +
                    date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString()
                    .padStart(2, '0');
                // $('#' + id).val(formattedDate);
                Livewire.dispatch('dateUpdated', {
                    'id': id,
                    'formattedDate': formattedDate
                });
            }
        });

        @if ($this->permit)
            $(document).ready(function() {
                var start_date =
                '{{ $this->permit->start_date }}'; // Use the start_date from the permit
                var end_date = '{{ $this->permit->end_date }}'; // Use the start_date from the permit

                console.log(start_date, end_date);

                $('#start_date').datetimepicker({
                    value: '{{ $this->permit->start_date }}',
                    format: 'Y-m-d H:i'
                });


                $('#end_date').datetimepicker({
                    value: '{{ $this->permit->end_date }}',
                    format: 'Y-m-d H:i'
                });


            });
        @endif



        var toolbarOptions = [
            'clean',
            {
                'list': 'ordered'
            },
            {
                'list': 'bullet'
            },
            {
                'background': []
            },
            {
                'color': []
            },
            {
                align: ''
            },
            {
                align: 'center'
            },
            {
                align: 'right'
            },
            'underline',
            'bold',
        ];

        var quill = new Quill('#editor', {
            modules: {
                syntax: false,
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });

        quill.format('direction', 'rtl')
        quill.format('align', 'right')

        quill.on('text-change', function(delta, oldDelta, source) {
            if (source == 'user') {
                quillContent = quill.root.innerHTML
                Livewire.dispatch('editorUpdated', {
                    data: quillContent
                })
            }
        });

    })
    // End of Quill Editor =============================================



    // start of image cropper ==========================================

    // Rahmani: here is the documentation https://github.com/fengyuanchen/cropperjs/blob/main/README.md#getting-started
    // please find out how to grap the output image, I think it can be done with cropper.getImageData() or cropper.getCanvasData() methodes


    window.addEventListener('DOMContentLoaded', function() {

        $("#AdvImg_input").on('change', (e) => {

            var image = document.querySelector('#AdvImg');
            var fileType = e.target.files[0].type;

            if (window.cropper1) {
                window.cropper1.destroy()
            }

            window.cropper1 = new Cropper(image, {
                viewMode: 3,
                dragMode: 'move',
                autoCropArea: 1,
                restore: false,
                modal: false,
                guides: false,
                highlight: false,
                cropBoxMovable: false,
                cropBoxResizable: false,
                toggleDragModeOnDblclick: false,
                ready: function() {
                    // This will be called when the cropper is ready
                    var canvas = window.cropper1.getCroppedCanvas();
                    canvas.toBlob(function(blob) {
                        var file = new File([blob], "image.png", {
                            type: fileType
                        });
                        // Upload a file
                        @this.upload('form.image_adv', file, (uploadedFilename) => {
                            // Success callback...
                            /*  Swal.fire({
                                  icon: 'success',
                                  title: 'تم تحميل الصورة بنجاح',
                                  text: null,
                                  showConfirmButton: false,
                                  timer: 1500
                              });*/
                        }, () => {
                            // Error callback...
                            Swal.fire({
                                icon: 'error',
                                title: 'خطأ',
                                text: 'حدث خطأ أثناء التحميل',
                                showConfirmButton: false,

                            });
                        }, (event) => {
                            // Progress callback...
                            // event.detail.progress contains a number between 1 and 100 as the upload progresses

                        })
                    });
                }
            });

            window.cropper1.replace(URL.createObjectURL(e.target.files[0]))

        });
    });

    // end of image cropper ==========================================
</script>
