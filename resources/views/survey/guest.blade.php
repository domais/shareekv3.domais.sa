<form class="p-8 shadow rounded-lg bg-white"
     action="{{route('guest.survey', ['token' => $survey->token])}}"
     method="POST">
{{ csrf_field() }}
<div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
      استبيان الحضور
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
      برجاء الإجابة عن الأسئلة التالية لمساعدتنا في تقديم تجربة أفضل في المستقبل.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">من اين سمعت عن الفعالية؟</label>
          <div class="mt-2">
            <select id="event-hear" name="event_hear" autocomplete="event-hear" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:max-w-xs sm:text-sm sm:leading-6">
                <option value="">برجاء اختيار</option>
                <option value="صديق" {{ old('event_hear') == 'صديق' ? 'selected' : '' }}>صديق</option>
                <option value="ضيف" {{ old('event_hear') == 'ضيف' ? 'selected' : '' }}>ضيف</option>
                <option
                    value="مواقع التواصل" {{ old('event_hear') == 'مواقع التواصل' ? 'selected' : '' }}
                >مواقع التواصل</option>
                <option
                    value="موقع الشريك الأدبي" {{ old('event_hear') == 'موقع الشريك الأدبي' ? 'selected' : '' }}
                >أخرى</option>
            </select>
          </div>
            @error('event_hear')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">إلمام المتحدث بالمجال أثري الموضوع المطروح بشكل جيد؟</label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-1"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-1') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-1') ?? 0 }}"
                    >
                </label>
            </div>
            @error('guest-rate-1')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">أسلوب طرح المتحدث جاذباً؟</label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-2"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-2')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">مدى مناسبة تهيئة المكان لإقامة الفعالية؟</label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-3"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-3')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">ما مدى حرص المتحدث على تفعيل النقاش والحوار مع الجمهور؟</label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-4"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-4')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">هل هذه هي المرة الأولى التي تحضر فيها فعالية في هذا المقهى؟<label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-5"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-5')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">مدى رضاك عن أداء الشريك أثناء الفعالية؟<label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-6"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-6')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">ما مدى رضاك عن البرنامج؟<label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-7"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-7')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">مدى ملاءمة موعد الفعالية؟<label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-8"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-8')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">مدى مناسبة مدة الفعالية؟<label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-9"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-9')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">التزام المقهى بالوقت المحدد لإقامة الفعالية؟<label>
          <div class="mt-2">
                {{-- Radio button from 5 to 1 --}}
                <input
                    class="rating"
                    name="guest-rate-10"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('guest-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('guest-rate-2') ?? 0 }}">
                </label>
            </div>
            @error('guest-rate-10')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="notes" class="block text-sm font-medium leading-6 text-gray-900">ملاحظات أو مقترحات توجهها إلى القائمين على هذه الفعالية؟<label>
          <div class="mt-2">
            <textarea id="about" name="notes" rows="3" class="block w-full shadow-sm sm:text-sm focus:ring-red-700 focus:border-red-700 border-gray-300 rounded-md">
                {{old('notes')}}
            </textarea>
            </div>
            @error('notes')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-between gap-x-6">
    <button type="submit" class="rounded-md bg-red-800 px-3 py-2 text-sm font-semibold w-full text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800">Submit</button>
  </div>
</form>
