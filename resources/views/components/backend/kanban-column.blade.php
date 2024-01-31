@props(['name' => '','count' => 0 , 'buttons' => [],'edit' => 0,'data' => [],'permission' => 'permit-update','route' => 'permit'])
<div class="column">
    <div class="head">
        <div class="fw-bold">{!! html_entity_decode($name) !!} @if($count > 0)<span>{{$count}}</span>@endif</div>
        @if ($name == 'منتهية وبإنتظار توثيق الشريك')
        <button class="btn btn-danger" onclick="fireSwal()">
            <i class="fas fa-bell"></i>
        </button>
            
        @endif
    </div>
    <div class="body">
        @foreach ($data as $item)
        <div class="item">
            <div class="click" onclick="window.location = '{{route($route . '.show', $item->order_number)}}'">
                <div class="name">
                    <div class="my-2">{{$item->title}}</div>
                    @if (auth()->user()->hasRole('SuperAdmin'))
                     <small class="mt-2">{{$item->user ? $item->user->owner->name : ''}} / {{$item->user->name}}</small>
                    @endif
                </div>
                @if ($item->literary)
                <div class="type mb-3">فعالية @if($item->literary->name != 'NA') <span class="d-inline-block mx-2">في</span> {{$item->literary->parent->name}}@endif</div>

                {{--<div class="type mb-3"> {{$item->literary->parent->name}}   > {{$item->literary->name}}</div> --}}
                @else
                <div class="type mb-3">مساهمة</div>

                @endif
                
                <div class="number">
                    <span>رقم الطلب : {{$item->order_number}}</span>
                    <small>{{ $item->created_at->diffForHumans() }}</small>            
                </div>
                @if ($edit == 1)
                    <div class="my-3 alert alert-warning p-2">
                     {{$item->history->last()->descreption ?? 'لم يحدد السبب'}}    
                    </div>  
                @endif
            </div>
            <div class="d-flex justify-content-between mt-3">
                @if (auth()->user()->hasRole('SuperAdmin'))

                <!-- adminstrator -->
                @if (havePermission(auth()->user(),$permission))
           
                        @foreach($buttons as $button)

                            @if($button['type'] == 'sweetalert')
                                <a class="{{ $button['class'] }}" onclick="{{ $button['onclick'] }}({{ $item->id }}, '{{ get_class($item) }}')">
                                    {!! $button['title'] !!}
                                </a>
                            @endif

                            @if($button['type'] == 'link')
                                <a class="{{ $button['class'] }}" href="{{ isset($button['href']) ? route($button['href'],$item->id) : '#' }}">
                                    {!! $button['title'] !!}
                                </a>
                            @endif

                            @if($button['type'] == 'modal')
                                <a class="{{ $button['class'] }}" wire:click="selected({{$item->id}})" data-bs-toggle="modal" data-bs-target="#{{ $button['modal'] }}">{!! $button['title'] !!}</a>
                            @endif

                            @if($button['type'] == 'switch')
                                <div class="form-check form-switch d-flex align-items-center">
                                    <input class="form-check-input" type="checkbox" role="switch" id="register_{{$item->id}}" checked>
                                    <label class="form-check-label ms-2" for="register_{{$item->id}}">التسجيل</label>
                                </div>
                            @endif
                        @endforeach
                @endif
              

               
                    
                @else
                  <!-- shareek -->
                    @foreach($buttons as $button)

                        @if($button['type'] == 'sweetalert')
                            <a class="{{ $button['class'] }}" onclick="{{ $button['onclick'] }}({{ $item->id }}, '{{ get_class($item) }}')">
                                {!! $button['title'] !!}
                            </a>
                        @endif

                        @if($button['type'] == 'link')
                            <a class="{{ $button['class'] }}" href="{{ isset($button['href']) ? route($button['href'],$item->id) : '#' }}">
                                {!! $button['title'] !!}
                            </a>
                        @endif

                        @if($button['type'] == 'modal')
                            <a class="{{ $button['class'] }}" wire:click="selected({{$item->id}})" data-bs-toggle="modal" data-bs-target="#{{ $button['modal'] }}">{!! $button['title'] !!}</a>
                        @endif

                        @if($button['type'] == 'switch')
                            <div class="form-check form-switch d-flex align-items-center">
                                <input class="form-check-input" type="checkbox" role="switch" id="register_{{$item->id}}" checked>
                                <label class="form-check-label ms-2" for="register_{{$item->id}}">التسجيل</label>
                            </div>
                        @endif

                    @endforeach
                    
                @endif

            </div>
        </div><!-- /item -->
            
        @endforeach
    </div><!-- /body -->
</div><!-- /column -->
<script>
    function fireSwal() {
        Swal.fire({
            'icon': 'success',
            'title': 'تمت العملية بنجاح',
            // 'text': 'تمت العملية بنجاح',
            'timerProgressBar': true,
            'showConfirmButton': false,
            'timer': 4000,
        });
    }
</script>