<div>
    {{-- A good traveler has no fixed plans and is not intent upon arriving. --}}

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
    <h3>
        @if ($partner->status == 0)
            <span class="badge bg-warning">غير مفعل</span>
        @endif

        @if ($partner->status == 1)
            <span class="badge bg-success">مفعل</span>
        @endif

        @if ($partner->status == 2)
            <span class="badge bg-danger">مرفوض</span>
        @endif

    </h3>

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
