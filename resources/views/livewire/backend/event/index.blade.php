<div>


    <nav aria-label="breadcrumb" class="my-5">
        <div class="topbar p-3 bg-body-tertiary rounded-3 w-100">
            <ol class="breadcrumb breadcrumb-chevron m-0">
                <li class="breadcrumb-item">
                    <a class="link-body-emphasis" href="#">
                        <i class="fa-solid fa-house"></i>
                    </a>
                </li>
                <li class="breadcrumb-item">
                    <a class="link-body-emphasis text-decoration-none" href="{{route('event.index')}}">الفعاليات</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">استعراض كقوائم</li>
            </ol>
            <div class="links">
                <a class="btn btn-secondary me-2" href="#" role="button">عرض كجدول</a>

                {{-- Rahmani: make this work as $role == 2 --}}
                @if (auth()->user()->hasRole('User'))
                    <a class="btn btn-brand" href="{{route('permit.create')}}">طلب تصريح</a>
                @endif
            </div>
        </div>
    </nav>







    <div class="kanban">

        <x-backend.kanban-column 
            name="مجدولة"
            count="{{count($scheduled)}}" 
            :data="$scheduled"
            :buttons="KanbanButtons('EventShareLink') "

         />

         <x-backend.kanban-column 
            name="قائمة"
            count="{{count($active)}}" 
            :data="$active"
            :buttons="KanbanButtons('EventShareLink')"
          />

          <x-backend.kanban-column 
            name="{{ !auth()->user()->hasRole('User') ? 'منتهية وبإنتظار توثيق الشريك' : 'بإنتظارك لتوثيق الفعالية' }}"
            count="{{count($completed)}}" 
            :data="$completed"
            :buttons="auth()->user()->hasRole('User') ? KanbanButtons('EventUserUploadTawtheeq') : KanbanButtons('AskForClose')"

         />

         <x-backend.kanban-column 
            name="{{ !auth()->user()->hasRole('User') ? 'مراجعة التوثيق' : 'المشرف يراجع التوثيق' }}"
            count="{{count($Waiting_for_approval)}}" 
            :data="$Waiting_for_approval"
            :buttons="auth()->user()->hasRole('User') ? [] : KanbanButtons('Approval') "
        />


    </div>



    <!-- مودال رفع توثيق الشريك -->
    <div class="modal fade" id="Event-User-Upload-Tawtheeq-Modal" tabindex="-1" aria-labelledby="tawtheeqLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="tawtheeqLabel">رفع ملفات توثيق المبادرة</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <form action="/file-upload" class="dropzone">
                    <div class="dropzone-previews previews"></div>
                </form>
                
                <div class="links">
                    <div class="mt-3 row mx-0">
                        <div class="col-3 px-0 d-flex align-items-center">رابط الفيديو : </div>
                        <div class="col-8"><input type="text" class="form-control" name="link[]" /></div>
                        <div class="col-1 px-0 text-end"><button class="btn btn-secondary AddLink">+</button></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">إلغاء</button>
                <button type="button" class="btn btn-success">ارسال التوثيق</button>
            </div>
        </div>
        </div>
    </div>






    <!-- مودال اعتماد تشغيل فعالية -->
    <div class="modal fade" id="FinalApproval" tabindex="-1" aria-labelledby="FinalApprovalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="FinalApprovalLabel">اعتماد الفعالية</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mt-2">
                        <div class="col-3 d-flex align-items-center">رقم التصريح</div>
                        <div class="col-8"><input type="text" class="form-control" id="PermitNumber"></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-3 d-flex align-items-center">نسخ التصريح</div>
                        <div class="col-8"><input type="file" class="form-control" id="PermitPDF"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-success" onclick="ApprovPermet(1)">اعتماد</button>
                </div>
            </div>
        </div>
    </div>



</div>








<script>

    document.addEventListener("DOMContentLoaded", function() {
        Dropzone.autoDiscover = false
        new Dropzone('.dropzone',{
            previewsContainer:'.previews',
            addRemoveLinks:true,
            dictRemoveFile:'x',
            thumbnailWidth:130,
            thumbnailHeight:130,
            removedfile: function(file) {
               // Rahmani: add Ajax to remove image from server 
                file.previewElement.remove()
                console.log('Delete this file',file)
            }
        })
        $('.AddLink').on('click',()=>{
            var i = $('.modal .links .row').length;
            ++i
            var NewRow = '<div id="LinkRow_'+i+'" class="mt-3 row mx-0 mt-3"><div class="col-3 px-0 d-flex align-items-center">رابط الفيديو '+i+' : </div><div class="col-8"><input type="text" class="form-control" name="link[]" /></div><div class="col-1 px-0 text-end"><button class="btn btn-outline-danger RemoveLink" data-id="LinkRow_'+i+'">×</button></div></div>'
            $('.modal .links').append(NewRow)
        })
        $(document).on('click','.RemoveLink', function(){
            $(this).parent().parent().remove()
        })
    })

</script>