<div>
    {{-- Survey Details --}}
    <div class="card mb-4">
        <div class="card-body">
            <p class="card-text">رقم الفعالية: <b>{{ optional($survey->event)->order_number ?? '' }}</b></p>
            <p class="card-text">عنوان الفعالية: <b>{{ optional($survey->event)->title ?? '' }}</b></p>
            <p class="card-text">الاسم: <b>{{$survey->surveyable->name}}</b></p>
            <p class="card-text">الهاتف: <b>{{$survey->surveyable->phone}}</b></p>
            <p class="card-text">النوع: <b>{{$survey->type == 'guest' ? 'زائر' : 'متحدث'}}</b></p>
            <p class="card-text">تاريخ الانشاء: <b>{{$survey->created_at->format('Y-m-d')}}</b></p>
            <p class="card-text">تاريخ التقديم: <b>{{$survey->created_at->diffForHumans()}}</b></p>
        </div>
    </div>
    {{-- Display Data question and answer --}}
    <div class="row">
      @if ($survey->data)
          @foreach ($survey->data as $key => $item)
              <div class="col-6 mb-3">
                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title">{{$key}}</h5>
                          @if(is_numeric($item))
                          <input
                          class="rating"
                          name="guest-rate-10"
                          max="5"
                          step="0"
                          style="--stars:5;--value:{{$item}}"
                          type="range"
                          value="{{$item}}" />
                          @else
                          <p class="card-text">{{$item}}</p>
                          @endif
                      </div>
                  </div>
              </div>
          @endforeach
      @else

      <div class="card">
        <div class="card-body">
            <h5 class="card-title">بيان غير معبأ</h5>
            <p class="card-text">لم يتم تعبئة الإستبيان</p>
        </div>
    </div>
            
      @endif
    </div>
</div>


@push('styles')
<style>

.rating {
    --dir: right;
    --fill: #ae2a3f;
    --fillbg: rgba(100, 100, 100, 0.15);
    --heart: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z"/></svg>');
    --star: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"/></svg>');
    --stars: 5;
    --starsize: 2rem;
    --symbol: var(--star);
    --value: 1;
    --w: calc(var(--stars) * var(--starsize));
    --x: calc(100% * (var(--value) / var(--stars)));
    block-size: var(--starsize);
    inline-size: var(--w);
    position: relative;
    touch-action: manipulation;
    -webkit-appearance: none;
  }
  [dir="rtl"] .rating {
    --dir: left;
  }
  .rating::-moz-range-track {
    background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--symbol);
  }
  .rating::-webkit-slider-runnable-track {
    background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
    block-size: 100%;
    mask: repeat left center/var(--starsize) var(--symbol);
    -webkit-mask: repeat left center/var(--starsize) var(--symbol);
  }
  .rating::-moz-range-thumb {
    height: var(--starsize);
    opacity: 0;
    width: var(--starsize);
  }
  .rating::-webkit-slider-thumb {
    height: var(--starsize);
    opacity: 0;
    width: var(--starsize);
    -webkit-appearance: none;
  }
  .rating, .rating-label {
    display: block;
    font-family: ui-sans-serif, system-ui, sans-serif;
  }
  .rating-label {
    margin-block-end: 1rem;
  }

  /* NO JS */
  .rating--nojs::-moz-range-track {
    background: var(--fillbg);
  }
  .rating--nojs::-moz-range-progress {
    background: var(--fill);
  }
</style>
@endpush
