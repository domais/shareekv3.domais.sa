@props(['name' => '','count' => 0 , 'buttons' => [],'edit' => 0,'data' => []])
<div class="column">
    <div class="head">
        <div class="fw-bold">{{$name}} <span>{{$count}}</span></div>
    </div>
    <div class="body">
        @foreach ($data as $item)
        <div class="item">
            <div class="click" onclick="window.location = '{{route('permit.show',$item->id)}}'">
                <div class="name">
                    <div>{{$item->title}}</div>
                    <small>{{$item->user->name}}</small>
                    {{-- Rahmani: if admin => show caffee name / else hide --}}
                </div>
                @if ($item->literary)
                <div class="type mb-3">{{$item->literary->parent->name}} > {{$item->literary->name}}</div>
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
            </div>
        </div><!-- /item -->
            
        @endforeach
    </div><!-- /body -->
</div><!-- /column -->