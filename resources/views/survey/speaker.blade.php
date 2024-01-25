<form class="p-8 shadow rounded-lg bg-white"
     action="{{route('speaker.survey', ['token' => $survey->token])}}"
     method="POST">
{{ csrf_field() }}
<div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">
        استبيان المتحدث
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
      برجاء الإجابة عن الأسئلة التالية لمساعدتنا في تقديم تجربة أفضل في المستقبل.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">هل كان الحضور بالعدد المتوقع؟</label>
          <div class="mt-2">
            <select id="attend_count" name="attend_count" autocomplete="attend_count" class="block w-full shadow-sm sm:text-sm focus:ring-red-700 focus:border-red-700 border-gray-300 rounded-md">
                <option value="" disabled selected>اختر</option>
              <option value="1" {{old('attend_count') == '1' ? 'selected' : ''}}>نعم</option>
              <option value="0" {{old('attend_count') == '0' ? 'selected' : ''}}>لا</option>
            </select>
          </div>
            @error('attend_count')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">هل كان الحضور بالعدد المتوقع؟</label>
          <div class="mt-2">
                <input
                    class="rating"
                    name="speaker-rate-1"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('speaker-rate-1') ?? 0}}"
                    type="range"
                    value="{{ old('speaker-rate-1') ?? 0 }}"
                    >
            </div>
            @error('speaker-rate-1')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">ما تقييمك لمستوى تنظيم المكان لإقامة الفعالية؟</label>
          <div class="mt-2">
                <input
                    class="rating"
                    name="speaker-rate-2"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('speaker-rate-2') ?? 0}}"
                    type="range"
                    value="{{ old('speaker-rate-2') ?? 0 }}"
                    >
            </div>
            @error('speaker-rate-2')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">ما تقييمك لمستوى تنسيق وتواصل الشريك معكم؟</label>
          <div class="mt-2">
                <input
                    class="rating"
                    name="speaker-rate-3"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('speaker-rate-3') ?? 0}}"
                    type="range"
                    value="{{ old('speaker-rate-3') ?? 0 }}"
                    >
            </div>
            @error('speaker-rate-3')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">ما تقييمك لمستوى استقبال الشريك لك؟</label>
          <div class="mt-2">
                <input
                    class="rating"
                    name="speaker-rate-4"
                    max="5"
                    oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
                    step="0"
                    style="--stars:5;--value:{{old('speaker-rate-4') ?? 0}}"
                    type="range"
                    value="{{ old('speaker-rate-4') ?? 0 }}"
                    >
            </div>
            @error('speaker-rate-4')
                <p class="mt-2 text-sm text-red-600" id="email-error">{{ $message }}</p>
            @enderror
        </div>


        <div class="col-span-full">
          <label for="notes" class="block text-sm font-medium leading-6 text-gray-900">فريق الشريك الأدبي يسعد باستقبال ملاحظاتكم أو اقتراحاتكم لتطوير الفعاليات القادمة<label>
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
