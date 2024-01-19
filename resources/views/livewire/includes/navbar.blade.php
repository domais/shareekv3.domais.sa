<header class="p-3 border-bottom">
	<div class="container">
		<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

			<a href="{{url('/')}}" class="logo d-flex align-items-center mb-2 mb-lg-0 link-light text-decoration-none"></a>

			<ul class="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				{{-- <li class="nav-item"><a href="#" class="nav-link px-2 link-light">الرئيسية</a></li> --}}

				<li class="nav-item">
					<a href="{{route('event.index')}}" class="nav-link px-2 link-light {{ is_active('event.index') ? 'active' : '' }}">المبادرات</a>
					{{-- <span class="badge text-bg-danger rounded-pill">1</span> --}}
				</li>

				<li class="nav-item">
					<a href="{{route('permit.index')}}" class="nav-link px-2 link-light {{ is_active('permit.index') ? 'active' : '' }}">التصاريح</a>
					{{-- <span class="badge text-bg-danger rounded-pill">3</span> --}}
				</li>

				@role('SuperAdmin')
					<li class="nav-item">
						<a href="{{route('partner.index')}}" class="nav-link px-2 link-light {{ is_active('partner.index') ? 'active' : '' }}">الشركاء</a>
					</li>
				@endrole	

				<li class="nav-item"><a href="{{route('support.index')}}" class="nav-link px-2 link-light {{ is_active('support.index') ? 'active' : '' }}">دعم الشريك</a></li> 


				<li class="nav-item"><a href="{{route('ticket.index')}}" class="nav-link px-2 link-light">المساعدة</a></li>

				{{-- <li class="nav-item"><a href="#" class="nav-link px-2 link-light">الإعدادات</a></li> --}}
			</ul>


			<div class="dropdown text-end  d-flex flex-row-reverse align-items-center user-info">
				<a class="d-flex align-items-center link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="{{asset('img/default_avatar.png')}}" alt="mdo" width="50" class="rounded-circle">
				</a>
				<div class="user-info">
					 {{auth()->user()->name}}
					<br>
					<sapn class="user-role">
						@if (auth()->user()->hasRole('User'))
						  	{{auth()->user()->owner->name}}
						@else
							{{auth()->user()->roles[0]->name}}
						@endif
					</span>
				</div>
				<ul class="dropdown-menu text-small">
					 <li><a class="dropdown-item" href="{{route('profile.index')}}">ملفي الشخصي</a></li>
					 @role('SuperAdmin')
						<li>
							<a class="dropdown-item" href="{{route('adminstrator.index')}}">
								الصلاحيات والمستخدمين 
							</a>
						</li>
					@endrole

					 <li><hr class="dropdown-divider"></li> 
					<li><button class="dropdown-item text-danger" wire:click="logout">تسجيل الخروج</button></li>

				</ul>
			</div>
		</div>
	</div>
</header>