@props(['name' => '','count' => 0 , 'buttons' => [],'edit' => 0,'data' => []])
<div class="column">
    <div class="head">
        <div class="fw-bold">{{$name}} <span>{{$count}}</span></div>
    </div>
    <div class="body">
        @foreach ($data as $item)
        <div class="item">
            <div class="name">
                <div>{{$item->title}}</div>
                <small>{{$item->user->name}}</small>
            </div>
            <div class="type mb-3">{{$item->literary->parent->name}} > {{$item->literary->name}}</div>
            <div class="number">
                <span>رقم الطلب : {{$item->order_number}}</span>
                <small>{{ $item->created_at->diffForHumans() }}</small>            
            </div>
            @if ($edit == 1)
            <!-- Domais: this code only for now later will be dynamique -->
                <div class="my-3 alert alert-warning p-2">هنا تظهر ملاحظات المشرف ليقوم الشريك بتعديلها</div>  
            @endif
            <div class="d-flex justify-content-between mt-3">
                @foreach($buttons as $button)
                    <a class="{{ $button['class'] }}" href="{{ isset($button['href']) ? route($button['href'],$item->id) : '#' }}" 
                      @if(isset($button['onclick'])) onclick="{{ $button['onclick'] }}({{ $item->id }})" @endif>
                        {{ $button['title'] }}
                    </a>
                @endforeach
            </div>
        </div><!-- /item -->
            
        @endforeach
    </div><!-- /body -->
</div><!-- /column -->