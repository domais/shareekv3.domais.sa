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
                @if (2 == 2)
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
            :buttons="KanbanButtons('shareEvent') "

         />

         <x-backend.kanban-column 
            name="قائمة"
            count="{{count($active)}}" 
            :data="$active"
            :buttons="KanbanButtons('shareEvent')"
          />

          <x-backend.kanban-column 
            name="{{ !auth()->user()->hasRole('User') ? 'بإنتظار توثيق الشريك ' : 'بإنتظار توثيق الفعالية' }}"
            count="{{count($completed)}}" 
            :data="$completed"
            :buttons="auth()->user()->hasRole('User') ? KanbanButtons('AssignFiles') : KanbanButtons('AskForClose')  "

         />

         <x-backend.kanban-column 
            name="{{ !auth()->user()->hasRole('User') ? 'مراجعة التوثيق' : 'المشرف يراجع التوثيق' }}"
            count="{{count($Waiting_for_approval)}}" 
            :data="$Waiting_for_approval"
            :buttons="auth()->user()->hasRole('User') ? [] : KanbanButtons('Approval') "
        />


    </div>



    {{-- i'm testing, if things are OK then i'll install it as a package --}}
    <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />


    <!-- مودال رفع توثيق الشريك -->
    <div class="modal fade" id="tawtheeq" tabindex="-1" aria-labelledby="tawtheeqLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="tawtheeqLabel">رفع ملفات توثيق الفعالية</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <form action="/file-upload" class="dropzone" id="my-awesome-dropzone">
                
                </form>
                
                <div class="mt-3">رابط الفيديو 1 : <a href="https://youtu.be/HPHMZfUs_98" target="_blank">https://youtu.be/HPHMZfUs_98</a></div>
                <div class="mt-3">رابط الفيديو 2 : <a href="https://youtu.be/HPHMZfUs_98" target="_blank">https://youtu.be/HPHMZfUs_98</a></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">إلغاء</button>
                <button type="button" class="btn btn-success">اعتماد الفعالية</button>
            </div>
        </div>
        </div>
    </div>






    <!-- مودال اعتماد تشغيل فعالية -->
    <div class="modal fade" id="approve" tabindex="-1" aria-labelledby="approveLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="approveLabel">اعتماد الفعالية</h1>
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
    // إبدا الدراسة
    function AssignToMe(id) {
        Swal.fire({
            html: 'بالضغط على (إبدأ معالجة الطلب) سيختفي هذا الطلب من عند باقي المستخدمين وستكون انت المسؤول عن إتمامه ، هل انت متأكد؟',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#ccc",
            cancelButtonText: 'إلغاء',
            confirmButtonText: "إبدأ معالجة الطلب"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    // title: "",
                    html: "سيتم تحويلك للطلب لدراسته",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000
                });
                setTimeout(() => {
                    // window.location.href = "{{route('permit.index')}}";
                }, 3000)
            }
        });
    }





    // موافقة مبدأية
    function InitialApproval(id) {
        var EventId = id;
        Swal.fire({
            html: "بالضغط على (موافق) سيتم إعلام الشريك بالموافقة المبدأية على الطلب ، لايمكن التراجع عن هذه الخطوة ، هل انت متأكد؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ccc',
            cancelButtonText: 'إلغاء',
            confirmButtonText: "موافق"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'تمت العملية',
                    html: 'قام النظام بإبلاغ الشريك بالموافقة المبدأية',
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 6000
                });
            }
        });

    }



    // رفض الطلب
    function RejectPermit(id) {
        Swal.fire({
            html: 'الرجاء توضيح سبب الرفض حتى يقوم الشريك<br>بتعديل المطلوب وإرساله لك مرة أخرى',
            icon: 'info',
            input: 'textarea',
            inputPlaceholder: 'اكتب هنا سبب الرفض',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ccc',
            cancelButtonText: 'إلغاء',
            confirmButtonText: 'إعادة للشريك'
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                var descreption = result.value;
                Swal.fire({
                    title: 'تمت العملية',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }


    // تشغيل الفعالية
    function ApprovPermet(id) {
        Swal.fire({
            title: 'تأكيد تشغيل فعالية',
            icon: 'question',
            html: 'سيتم تنبيه الشريك بالموافقة النهائية وتشغيل المبادرة ، هل أنت متأكد؟',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ccc',
            cancelButtonText: 'إلغاء',
            confirmButtonText: 'نعم ، شغل المبادرة'
        }).then((result) => {
            if (result.isConfirmed) {
                // انا وصلت هنا
                $('#approve').hide();
                console.log(
                    document.getElementById('PermitNumber'),
                    document.getElementById('PermitPDF')
                )
                Swal.fire({
                    title:'تم تشغيل المبادرة',
                    html: 'قام النظام آليا بجدولة المبادرة مع إبلاغ الشريك بذلك',
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 6000
                });
            }
        });

    }


    //  تشغيل بدون تصريح


    function ApproveWithoutPirmet(id) {
        Swal.fire({
            html: 'يجب عليك توضيح سبب تشغيل الفعالية بدون تصريح<br>وتأكد أنك تتحمل مسؤولية ذلك أمام الجهات الرسمية',
            icon: 'warning',
            input: 'textarea',
            inputPlaceholder: 'اكتب السبب هنا',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: '#ccc',
            cancelButtonText: 'إلغاء',
            confirmButtonText: 'تشغيل بدون تصريح'
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                Swal.fire({
                    title: 'تم تشغيل الفعالية بدون تصريح',
                    html: 'قام النظام آليا بجدولة الفعالية مع إبلاغ الشريك بذلك',
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 6000
                })
            }
        })
    }
</script>