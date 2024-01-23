@extends('survey.layouts.app')

@section('content')
{{-- @if ($errors->any())
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <ul class="list-disc">
        {{dd($errors)}}
            @foreach ($errors->all() as $error)
                <li class="text-sm">{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif --}}
@if(request()->type == 'guest')
@include('survey.guest')
@else
@include('survey.speaker')
@endif

@endsection


@push('scripts')
<script>
const icon = document.querySelectorAll('#events-example [data-te-rating-icon-ref]');
console.log(icon)
icon.forEach((el) => {
  el.addEventListener('onHover.te.rating', (e) => {
    console.log('onHover', e);
  });
  el.addEventListener('onSelect.te.rating', (e) => {
    console.log('onSelect', e);
  });
})
</script>
@endpush

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
