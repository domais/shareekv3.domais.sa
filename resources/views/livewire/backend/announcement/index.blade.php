<div x-data="{errors: @entangle('ValidationErrors').live}" x-init="
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



	<nav aria-label="breadcrumb" class="my-5">
		<div class="topbar py-3 bg-body-tertiary rounded-3 w-100">
			<ol class="breadcrumb breadcrumb-chevron m-0">
				<li class="breadcrumb-item">
					<a class="link-body-emphasis" href="#">
						<i class="fa-solid fa-house"></i>
					</a>
				</li>
				<li class="breadcrumb-item">
					<a class="link-body-emphasis text-decoration-none" href="{{route('announcement.index')}}">التعميمات</a>
				</li>
			</ol>
			<div class="links">
                @role('SuperAdmin')
                <button type="button" class="btn btn-brand float-end" data-bs-toggle="modal" data-bs-target="#announcementModal">
                    <i class="fa-solid fa-plus"></i>
                    إضافة تعميم
                </button>
                @endrole
			</div>
		</div>
	</nav>

    <div class="container my-3">
        <div class="row">
            <div class="col-12">
                @role('SuperAdmin')
                <livewire:backend.data-table.announcement-table />

                <!-- Modal -->
                <div wire:ignore class="modal fade" id="announcementModal" tabindex="-1" aria-labelledby="announcementModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="announcementModalLabel">إضافة تعيميم</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    {{-- <input type="hidden" wire:model.defer="form.timezone" name="timezone" id="timezone"> --}}
                                    <input type="text"
                                    wire:model="form.title"
                                    class="form-control text-start" id="title" placeholder="عنوان التعميم" />
                                </div>
                                <div class="mb-3">
                                    <textarea
                                    wire:model="form.description"
                                    class="form-control text-start" id="description" placeholder="ادخل وصف التعميم"
                                    rows="3"
                                    ></textarea>
                                </div>
                                <div class="mb-3">
                                    <input type="datetime-local"
                                    wire:model="form.start_at"
                                    class="form-control text-start" id="start_at" placeholder="تاريخ البداية" />
                                </div>
                                <div class="mb-3">
                                    <input type="datetime-local"
                                    wire:model="form.end_at"
                                    class="form-control text-start" id="end_at" placeholder="تاريخ النهاية" />
                                </div>
                                <div class="mb-3">
                                    <select class="form-select" id="is_active" wire:model="form.is_active">
                                        <option selected value="">إختر الحالة ...</option>
                                        <option value="1">مفعل</option>
                                        <option value="0">غير مفعل</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">إغلاق</button>
                                <button type="button" wire:click="save"
                                onclick="@this.form.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone"
                                class="btn btn-success">حفظ</button>
                            </div>
                        </div>
                    </div>
                </div>
                @endrole

                @role('User')
                <div class="notification-ui_dd-content">
                @foreach ($announcements as $announcement)
                    <div class="notification-list notification-list--unread">
                        <div class="notification-list_content">
                            <div class="notification-list_detail">
                                <h3 class="fw-bold">{{$announcement->title}}</h3>
                                <p class="text-muted">{{$announcement->description}}</p>
                            </div>
                        </div>
                        <time class="notification-list_date" datetime="{{$announcement->start_at}}">{{$announcement->start_at->diffForHumans()}}</time>
                    </div>
                @endforeach
                </div>
                @endrole

            </div>
        </div>
    </div>
</div>
