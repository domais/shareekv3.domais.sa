@extends('survey.layouts.page')
@section('content')
  <div class="text-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm py-4">
        <img class="mx-auto h-24 w-auto" src="{{asset('img/logoLight.png')}}" alt="logo">
    </div>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        لقد انتهت صلاحية الاستبيان
    </h1>
    <p class="mt-6 text-base leading-7 text-gray-600">
        لقد انتهت صلاحية الاستبيان، شكراً لك على وقتك
    </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="/" class="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800">Go back home</a>
    </div>
  </div>
</main>
@endsection
