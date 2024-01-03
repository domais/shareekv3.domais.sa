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
                    <a class="link-body-emphasis text-decoration-none" href="{{route('permit.index')}}">التصاريح</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">استعراض كقوائم</li>
            </ol>
            <div class="links">
                <a class="btn btn-secondary me-2" href="#" role="button">عرض كجدول</a>
            </div>
        </div>
    </nav>







    <div class="kanban">

        <div class="column">
            <div class="head">
                <div class="fw-bold">طلبات جديدة <span class="bg-danger text-light">1</span></div>
            </div>
            <div class="body">
                <div class="item">
                    <div class="name">
                        <div>قراءة كتاب (محاط بالحمقى)</div>
                        <small>مقهى السعادة</small>
                        <!-- Rahmani: هنا يظهر اسم المقهى وليس اسم اليوزر -->
                    </div>
                    <div class="type mb-3">القصص > الخيال العلمي</div>
                    <div class="number">
                        <span>رقم الطلب : 230075869</span>
                        <small>قبل 11 دقيقة</small>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <a class="btn btn-secondary" onclick="AssignToMe(1)">إبدا الدراسة</a>
                    </div>
                </div><!-- /item -->
            </div><!-- /body -->
        </div><!-- /column -->







        <div class="column">
            <div class="head">
                <div class="fw-bold">تحت الدراسة <span>1</span></div>
            </div>
            <div class="body">
                <div class="item">
                    <div class="name">
                        <div>قراءة كتاب (محاط بالحمقى)</div>
                        <small>مقهى السعادة</small>
                        <!-- Rahmani: هنا يظهر اسم المقهى وليس اسم اليوزر -->
                    </div>
                    <div class="type mb-3">القصص > الخيال العلمي</div>
                    <div class="number">
                        <span>رقم الطلب : 230075869</span>
                        <small>قبل 11 دقيقة</small>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <a class="btn btn-secondary" onclick="InitialApproval(1)">موافقة مبدأية</a>
                        <a class="btn btn-outline-danger" onclick="RejectPermit(1)">رفض</a>
                    </div>
                </div><!-- /item -->
            </div><!-- /body -->
        </div><!-- /column -->







        <div class="column">
            <div class="head">
                <div class="fw-bold">معاد للشريك للتعديل <span>1</span></div>
            </div>
            <div class="body">
                <div class="item">
                    <div class="name">
                        <div>قراءة كتاب (محاط بالحمقى)</div>
                        <small>مقهى السعادة</small>
                        <!-- Rahmani: هنا يظهر اسم المقهى وليس اسم اليوزر -->
                    </div>
                    <div class="type mb-3">القصص > الخيال العلمي</div>
                    <div class="number">
                        <span>رقم الطلب : 230075869</span>
                        <small>قبل 11 دقيقة</small>
                    </div>
                </div><!-- /item -->
            </div><!-- /body -->
        </div><!-- /column -->







        <div class="column">
            <div class="head">
                <div class="fw-bold">بإنتظار إصدار تصريح الهيئة <span>1</span></div>
            </div>
            <div class="body">
                <div class="item">
                    <div class="name">
                        <div>قراءة كتاب (محاط بالحمقى)</div>
                        <small>مقهى السعادة</small>
                        <!-- Rahmani: هنا يظهر اسم المقهى وليس اسم اليوزر -->
                    </div>
                    <div class="type mb-3">القصص > الخيال العلمي</div>
                    <div class="number">
                        <span>رقم الطلب : 230075869</span>
                        <small>قبل 11 دقيقة</small>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <!-- <a class="btn btn-warning" onclick="ApprovPermet(1)">تشغيل</a> -->
                        <a class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#approve">تشغيل</a>
                        <a class="btn btn-outline-secondary btn-sm d-flex align-items-center" onclick="ApproveWithoutPirmet(1)">تشغيل بدون تصريح</a>
                    </div>
                </div><!-- /item -->
            </div><!-- /body -->
        </div><!-- /column -->


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