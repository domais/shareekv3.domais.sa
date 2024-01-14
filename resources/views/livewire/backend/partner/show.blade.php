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
					<a class="link-body-emphasis text-decoration-none" href="{{route('partner.index')}}">الشركاء</a>
				</li>
				<li class="breadcrumb-item active" aria-current="page">{{ $partner->name }} </li>
			</ol>
		</div>
	</nav>



    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger mx-2" wire:click="changeStatus(2)">رفض</button>
        <button type="button" class="btn btn-success" wire:click="changeStatus(1)">قبول</button>
      </div>

    <!--  
        Domais
        user informatiotion : $owner,
        partner information : $partner,
    -->

    <h1>
        {{ $partner->name }}
    </h1>
    <h2>
        {{ $owner->email }}
    </h2>


    @foreach ($tickets as $index => $item)
        <!-- tickets -->
    @endforeach
    <hr class="my-5">
    
    <div class="container py-4">

        @foreach ($permits as $index => $item)
        <!-- permits -->
        @endforeach

        @foreach ($events as $index => $item)
        <!-- events -->
        @endforeach

    </div>
</div>
