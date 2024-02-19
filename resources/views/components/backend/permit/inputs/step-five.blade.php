<section>
    <div class="content-wrapper"
        x-data="{
        }">

        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">الاسم</th>
                        <th scope="col">البريد الالكتروني</th>
                        <th scope="col">الجوال</th>
                        <th scope="col">الجنس</th>
                        <th scope="col">الفئة العمرية</th>
                        <th scope="col">النوع</th>
                        <th scope="col">الحالة</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($this->permit->event->guests as $guest)
                        <tr class="mx-2">
                            <td>{{$loop->iteration}}</td>
                            <td>{{$guest->name}}</td>
                            <td>{{$guest->email}}</td>
                            <td>{{$guest->phone}}</td>
                            <td>{{$guest->gender === 'male' ? 'ذكر' : 'انثى'}}</td>
                            <td>{{$guest->getAge()}}</td>
                            <td class="badge {{$guest->pivot->type === 'going' ? 'bg-success' : ($guest->pivot->type === 'interested' ? 'bg-warning' : ($guest->pivot->type === 'maybe' ? 'bg-info' : 'bg-danger'))}}">
                                {{$guest->pivot->type === 'going' ? 'مسجل' : ($guest->pivot->type === 'interested' ? 'مهتم' : ($guest->pivot->type === 'maybe' ? 'ربما' : 'ملغي'))}}
                            </td>
                            <td class="badge {{$guest->pivot->status === 'approved' ? 'bg-success' : 'bg-danger'}}">
                                {{$guest->pivot->status === 'approved' ? 'حاضر' : 'لم يحضر بعد'}}
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
