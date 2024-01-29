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
                        <th scope="col">الفئة العمرية</th>
                        <th scope="col">النوع</th>
                        <th scope="col">الحلية</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($this->permit->event->guests as $guest)
                        <tr class="mx-2">
                            <th scope="row">{{$loop->iteration}}</th>
                            <td>{{$guest->name}}</td>
                            <td>{{$guest->email}}</td>
                            <td>{{$guest->phone}}</td>
                            <td>{{$guest->age}}</td>
                            <td>{{$guest->getAge()}}
                            {{-- Pivot filed type --}}
                            {{-- 'going', 'interested', 'maybe', 'cancelled' --}}
                            <td>{{$guest->pivot->type === 'going' ? 'حاضر' : ($guest->pivot->type === 'interested' ? 'مهتم' : ($guest->pivot->type === 'maybe' ? 'ربما' : 'ملغي'))}}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
