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
                <small>عبدالله الفوزان</small>
                <!-- Rahmani: هنا يظهر اسم اليوزر إللي أنشأ الطلب -->
            </div>
            <div class="type mb-3">{{$item->literary->name}} > {{$item->literary->parent->name}}</div>
            <div class="number">
                <span>رقم الطلب : {{$item->order_number}}</span>
                <small>{{ $item->created_at->diffForHumans() }}</small>            </div>
            @if ($edit == 1)
            <!-- Domais: this code only for now later will be dynamique -->
                <div class="my-3 alert alert-warning p-2">هنا تظهر ملاحظات المشرف ليقوم الشريك بتعديلها</div>  
            @endif
            <div class="d-flex justify-content-between mt-3">
                @foreach($buttons as $button)
                    <a class="{{ $button['class'] }}" href="{{ isset($button['href']) ? $button['href'] : '#' }}" 
                      @if(isset($button['onclick'])) onclick="{{ $button['onclick'] }}({{ $item->id }})" @endif>
                        {{ $button['title'] }}
                    </a>
                @endforeach
            </div>
        </div><!-- /item -->
            
        @endforeach
    </div><!-- /body -->
</div><!-- /column -->