<div
x-data="{errors: @entangle('ValidationErrors').live,
        selected_event: @entangle('selected_event').live,
        tawthik: true,
        number_files: @entangle('number_files').live,
        photos: @entangle('photos').live,
        view: 'kanban'
    }" x-init="
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

        $watch('number_files', value => {
            console.log(value);
            tawthik = value === photos.length;
        });
        
        $watch('photos', value => {
           
           
           
            console.log(value.length);
            tawthik = number_files === value.length;
        });
    "
>


    <nav aria-label="breadcrumb" class="my-5">
        <div class="topbar py-3 bg-body-tertiary rounded-3 w-100">
            <ol class="breadcrumb breadcrumb-chevron m-0">
                <li class="breadcrumb-item">
                    <a class="link-body-emphasis" href="#">
                        <i class="fa-solid fa-house"></i>
                    </a>
                </li>
                <li class="breadcrumb-item">
                    <a class="link-body-emphasis text-decoration-none" href="{{route('event.index')}}">المبادرات</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">استعراض كقوائم</li>
            </ol>
            <div class="links">
                {{-- <a class="btn btn-secondary me-2" href="#" role="button">عرض كجدول</a> --}}

                <div class="btn-group" role="group" aria-label="View switcher">
					<button type="button" class="btn btn-outline-secondary me-2" @click="view = (view === 'kanban' ? 'table' : 'kanban')">
						<span x-show="view === 'kanban'">عرض كجدول</span>
						<span x-show="view === 'table'">عرض كقوائم</span>
					</button>
				</div>
                {{-- : make this work as $role == 2 --}}
                @if (auth()->user()->hasRole('User'))
                    <a class="btn btn-brand" href="{{route('permit.create')}}">طلب تصريح</a>
                @endif
            </div>
        </div>
    </nav>

    







    <div class="kanban" x-show="view === 'kanban'">

        <x-backend.kanban-column 
            name="مبادرات مجدولة"
            count="{{count($scheduled)}}" 
            :data="$scheduled"
            route="event"
            :buttons="KanbanButtons('EventShareLink') "

         />

         <x-backend.kanban-column 
            name="مبادرات قائمة"
            count="{{count($active)}}" 
            :data="$active"
            route="event"
            :buttons="KanbanButtons('EventShareLink')"
          />

          <x-backend.kanban-column 
            name="{{ !auth()->user()->hasRole('User') ? 'مبادرات <small>بإنتظار توثيق الشريك</small>' : 'بإنتظارك لتوثيق الفعالية' }}"
            count="{{count($completed)}}" 
            :data="$completed"
            permission="event-update"
            route="event"
            :buttons="auth()->user()->hasRole('User') ? KanbanButtons('EventUserUploadTawtheeq') : KanbanButtons('AskForClose')"

         />

         <x-backend.kanban-column 
            name="{{ !auth()->user()->hasRole('User') ? 'مراجعة التوثيق' : 'المشرف يراجع التوثيق' }}"
            count="{{count($Waiting_for_approval)}}" 
            :data="$Waiting_for_approval"
            permission="event-update"
            route="event"
            :buttons="auth()->user()->hasRole('User') ? [] : KanbanButtons('Approval') "
        />


    </div>

    		<!-- Table view -->
	<div class="table-responsive" x-show="view === 'table'">
		<!-- Your table goes here -->
		<livewire:backend.data-table.event-table />
	</div>



    <!-- مودال رفع توثيق الشريك -->
    <div wire:ignore class="modal fade" id="Event-User-Upload-Tawtheeq-Modal" tabindex="-1" aria-labelledby="tawtheeqLabel" aria-hidden="true">
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

               
                    <div class="Number_of_attendees" x-show="selected_event && selected_event.event_location == 3">
                        <div class="mt-3 row mx-0">
                            <div class="col-3 px-0 d-flex align-items-center">عدد الحضور</div>
                            <div class="col-9">
                                <input 
                                    type="number" 
                                    class="form-control" 
                                    name=""
                                    id="Number_of_attendees"
                                />
                            </div>                        
                        </div>
                    </div>
        

                
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
                <button type="button" class="btn btn-success" onclick="approveEvent()" x-bind:disabled="!tawthik">
                    <span wire:loading.class="d-none">ارسال التوثيق</span>
                    <span wire:loading class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        </div>
    </div>






    <!-- مودال اعتماد تشغيل فعالية -->
    <div wire:ignore class="modal fade" id="FinalApproval" tabindex="-1" aria-labelledby="FinalApprovalLabel" aria-hidden="true">
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
                        <div class="col-3 d-flex align-items-center">ملف التصريح</div>
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

    var files = [];
    var links = [];
 
    document.addEventListener("DOMContentLoaded", function() {
        Dropzone.autoDiscover = false
        new Dropzone('.dropzone',{
            previewsContainer:'.previews',
            addRemoveLinks:true,
            dictRemoveFile:'x',
            thumbnailWidth:130,
            thumbnailHeight:130,
            init: function() {

                this.on('addedfile', function(file) {
                    files.push(file); // Add file to files array
                    console.log('Number of files:', files.length);
                    @this.set('number_files', files.length);

                    @this.uploadMultiple('photos', files, successCallback, errorCallback, progressCallback)

                });
                this.on('queuecomplete', function() {
       
                });
                this.on('removedfile', function(file) {
                    var index = files.findIndex(f => f.name === file.name);
                    if (index !== -1) {
                        // Remove the file from the files array
                        files.splice(index, 1);
                    }
                    console.log('Number of files:', files.length);
                    @this.set('number_files', files.length);
                    @this.uploadMultiple('photos', files, successCallback, errorCallback, progressCallback)

                });
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

        // Get all URLs
        links = $('.modal .links input[name="link[]"]').map(function() {
            return $(this).val();
        }).get();


    })

    function approveEvent()
    {
        // Get all URLs
        var links = $('input[name="link[]"]').map(function() {
            return $(this).val();
        }).get();

        @this.set('links', links);

        Livewire.dispatch('saveEventImages');

        var attendance = document.getElementById('Number_of_attendees').value;

        @this.set('attendance', attendance);

    }

    // Define the success callback
    var successCallback = function(file, response) {
        /*console.log('File ' + file.name + ' uploaded successfully');
        console.log('Server response:', response);*/
    };

    // Define the error callback
    var errorCallback = function(file, errorMessage, xhr) {
       
        if (xhr) {
            console.log('XHR:', xhr);
        }
    };

    // Define the progress callback
    var progressCallback = function(file, progress, bytesSent) {
        /*console.log('Upload progress for file ' + file.name + ': ' + progress + '%');
        console.log('Bytes sent:', bytesSent);*/
    };


</script>