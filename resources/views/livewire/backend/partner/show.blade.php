<div>
    {{-- A good traveler has no fixed plans and is not intent upon arriving. --}}

    <!--  
        Domais
        user informatiotion : $owner,
        partner information : $partner,
    -->
    <h1>
        {{ $partner->name }}}
    </h1>
    <h2>
        {{ $owner->email }}
    </h2>

    @foreach ($tickets as $index => $item)
        <!-- tickets -->
    @endforeach
    <hr class="my-5">
    
    <div class="container py-4">

        @foreach ($data as $index => $item)
            
        @if($index % 2 == 0)
       
        <!-- timeline item 1 -->
        <div class="row no-gutters">
            <div class="col-sm"> <!--spacer--> </div>

            <!-- timeline item 1 center dot -->
            <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                <div class="row h-50">
                    <div class="col">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                <h5 class="m-2">
                    <span class="badge rounded-pill bg-light border">&nbsp;</span>
                </h5>
                <div class="row h-50">
                    <div class="col border-end">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
            </div>
            <!-- timeline item 1 event content -->
            <div class="col-sm py-2">
                <div class="card">
                    <div class="card-body">
                        <div class="float-end text-muted small">{{ \Carbon\Carbon::parse($item['created_at'])->diffForHumans() }}</div>   
                        <h4 class="card-title text-muted">{{ $item['title'] }}</h4>
                        <p class="card-text">{!! $item['description'] !!}</p>
                    </div>
                </div>
            </div>
        </div>
        @else
        <!--/row-->
        <!-- timeline item 2 -->
        <div class="row no-gutters">
            <div class="col-sm py-2">
                <div class="card border-success shadow">
                    <div class="card-body">
                        <div class="float-end text-muted small">{{ \Carbon\Carbon::parse($item['created_at'])->diffForHumans() }}</div>   
                        <h4 class="card-title text-muted">{{ $item['title'] }}</h4>
                        <p class="card-text">{!! $item['description'] !!}</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                <div class="row h-50">
                    <div class="col border-end">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                <h5 class="m-2">
                    <span class="badge rounded-pill bg-success">&nbsp;</span>
                </h5>
                <div class="row h-50">
                    <div class="col border-end">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
            </div>
            <div class="col-sm"> <!--spacer--> </div>
        </div>
        @endif
        <!--/row-->
        @endforeach


    </div>
</div>
