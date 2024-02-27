<div>


<div class="dashboard mt-5">
  <!-- <div id="chart_4"></div> -->

  <div class="row g-3 mb-3">
    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100 ecommerce-card-min-width">
        <div class="card-header pb-0">
          <h6 class="p-3 pb-0 pe-0 mb-0 d-flex align-items-center">
            إجمالي الفعاليات
          </h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <div class="row">
            <div class="col-5">
              <p class="bigNumber">{{$event_counter}}</p>

            </div>
            <div class="col me-1 p-0">
              <div class="chart h-100" id="chart_1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100 ecommerce-card-min-width">
        <div class="card-header pb-0">
          <h6 class="p-3 pb-0 pe-0 mb-0 d-flex align-items-center">
            المسجلين في الفعاليات
          </h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <div class="row">
            <div class="col-5">
              <p class="bigNumber">{{$guests_counter}}</p>
            </div>
            <div class="col me-1 p-0">
              <div class="chart h-100" id="chart_2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100 ecommerce-card-min-width">
        <div class="card-header pb-0">
          <h6 class="p-3 pb-0 pe-0 mb-0 d-flex align-items-center">
            التصنيفات
          </h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <div class="row">
            <div class="col-5">
                <div class="fs-11 mt-3">
                    @foreach($this->literary_pie->take(3) as $literary)
                        <div class="d-flex flex-between-center mb-1">
                          <div class="me-2">{{ round(($literary->events_count / $event_counter) * 100, 2) }}%</div>
                          <div class="d-flex align-items-center">
                                <span class="dot bg-primary"></span>
                                <span class="fw-semi-bold">{{ $literary->name }}</span>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="col me-1 p-0">
                <div class="chart h-100" id="chart_3"></div>
            </div>
        </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100 ecommerce-card-min-width">
        <div class="card-header pb-0">
          <h6 class="p-3 pb-0 pe-0 mb-0 d-flex align-items-center">
            إجمالي الدعم
          </h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <div class="row">
            <div class="col-7">
              <div class="fs-11 mt-3">
                <div class="d-flex flex-between-center mb-1">
                  <div class="me-2">
                    <span class="badge bg-warning rounded-pill"> </span>
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="dot bg-primary"></span
                    ><span class="fw-semi-bold">حجوزات</span>
                  </div>
                </div>
                <div class="d-flex flex-between-center mb-1">
                  <div class="me-2">
                    <span class="badge bg-info rounded-pill"> </span>
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="dot bg-info"></span
                    ><span class="fw-semi-bold">مكافآت</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col me-1 p-0">
              <div class="chart h-100" id="chart_4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row g-3 mb-3 mt-4">
    <div class="col-6">
      <div class="row">
        <div class="col-md-12 col-xxl-12">
          <div class="card h-md-100 ecommerce-card-min-width">
            <div
              class="card-header pb-0 d-flex align-items-center justify-content-between"
            >
              <h6 class="p-3 pb-0 pe-0 mb-0 d-flex align-items-center">
                أوقات بدء الفعاليات اليوم
              </h6>
            </div>
            <div class="card-body d-flex flex-column justify-content-end">
              <div id="chart_10" style="height: 282px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-6">
      <div class="row">
        <div class="col-md-12 col-xxl-12">
          <div class="card h-lg-100">
            <div class="card-body position-relative d-flex align-items-center">
                <div id="map" style="height: 400px; width: 100%;"></div>
            </div>
        </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-12 col-xxl-12">
          <div class="card h-md-100 ecommerce-card-min-width">
            <div class="card-body d-flex flex-column justify-content-end">
              <div class="row">
                <div class="col-12">
                  <p class="bigNumber text-center py-4">من المقاهي للمجتمع .. نمهد للأدب طريقا</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-3 mt-5">
    <div class="col-12">
      <div class="card h-md-100 ecommerce-card-min-width">
        <div
          class="card-header pb-0 d-flex align-items-center justify-content-between"
        >
          <h6 class="p-3 pb-0 pe-0 mb-0 d-flex align-items-center">
            عدد الفعاليات الشهرية حسب المناطق
          </h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-start">
          <div class="col-12" id="chart_30"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-3 mt-5">
    <div class="col-9">
      <div class="row">
        <div class="col-12">
          <div class="ca0rd h-md-100 ecommerce-card-min-width">
            <div
              class="ca0rd-header pb-0 d-flex align-items-center justify-content-between"
            >
              <h6 class="mb-3 pb-0 pe-0 mb-0 d-flex align-items-center">
                طلبات تحتاج تدخل عاجل لللبقاء ضمن الوقت المعياري
              </h6>
            </div>
            <div class="ca0rd-body d-flex flex-column justify-content-start">
              <div class="col-12">
                @foreach ($urgent_permits as $item)
                <div class="order row">
                    <div class="col-3 partner">
                        @php
                            if ($item->user->owner->fileable) {
                                $ownerImage = $item->user->owner->fileable->path 
                                ? asset('https://nextlevel.ams3.digitaloceanspaces.com/' . $item->user->owner->fileable->path) 
                                : asset('img/default_avatar.png');
                            }
                            else {
                                $ownerImage = asset('img/default_avatar.png');
                            }  
                        @endphp
                        <img alt="" src="{{ $ownerImage }}" />
                        {{$item->user->owner->name}}
                    </div>
                    <div class="col-2 number d-flex align-items-center">
                        {{$item->order_number}}
                    </div>
                    <div class="col-5 title d-flex align-items-center">
                        {{$item->title}}
                    </div>
                    <div class="col-2 badge d-flex align-items-center">
                      <span class="badge text-white {{ \Carbon\Carbon::parse($item->start_date)->diffInDays(\Carbon\Carbon::now()) <= 2 ? 'bg-danger' : 'bg-warning' }} rounded-pill fw-normal">
                          @php
                              $diffInDays = \Carbon\Carbon::parse($item->start_date)->diffInDays(\Carbon\Carbon::now());
                              $diffInHours = \Carbon\Carbon::parse($item->start_date)->diffInHours(\Carbon\Carbon::now());
                          @endphp
                          @if($diffInDays == 0)
                              {{ $diffInHours }} ساعات
                          @else
                              {{ $diffInDays }} أيام
                          @endif
                      </span>
                  </div>
                </div>
            @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="row">
        <div class="col-12">
          <div class="card h-md-100 ecommerce-card-min-width">
            <div
              class="card-header pb-0 d-flex align-items-center justify-content-between"
            >
              <h6
                class="p-3 pb-0 pe-0 mb-0 d-flex align-items-center justify-content-center w-100"
              >
                سرعة إصدار التصريح
              </h6>
            </div>
            <div class="card-body d-flex flex-column justify-content-start">
              <div class="col-12" id="chart_51"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <div class="card h-md-100 ecommerce-card-min-width">
            <div
              class="card-header pb-0 d-flex align-items-center justify-content-between"
            >
              <h6
                class="p-3 pb-0 pe-0 mb-0 d-flex align-items-center justify-content-center w-100"
              >
                سرعة صرف الدعم
              </h6>
            </div>
            <div class="card-body d-flex flex-column justify-content-start">
              <div class="col-12" id="chart_52"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-3 mt-5">
    <div class="col-12">
      <div class="car0d h-md-100 ecommerce-card-min-width">
        <div
          class="car0d-header pb-0 d-flex align-items-center justify-content-between"
        >
          <h6 class="mb-3 pb-0 pe-0 mb-0 d-flex align-items-center">
            أنشط {{ $partners->count() }} شركاء من أصل {{ $partners_counter }}
          </h6>
          <select
            class="mt-3 me-3 px-2 py-1 rounded border-secondary-subtle d-none"
          >
            <option selected>اختر الفترة ...</option>
            <option>آخر 7 أيام</option>
            <option>آخر اسبوعين</option>
            <option>آخر شهر</option>
            <option>آخر 3 أشهر</option>
            <option>آخر 6 أشهر</option>
            <option>آخر سنة</option>
          </select>
        </div>
        <div class="card-body d-flex flex-column justify-content-start">
          <div class="activePartners">
            <div class="scroller">

              @foreach($partners as $partner)

              @php

                if ($partner->fileable) {
                    $partnerImage = $partner->fileable->path 
                    ? asset('https://nextlevel.ams3.digitaloceanspaces.com/' . $partner->fileable->path) 
                    : asset('img/default_avatar.png');
                }
                else {
                    $partnerImage = asset('img/default_avatar.png');
                }  
              @endphp

                <div class="partner">
                  <div class="head">{{$partner->name}}</div>
                  <div class="body">
                    <div style="background-image: url('{{ $partnerImage }}')"></div>
                  </div>
                  <div class="foot">
                    <span><small>الفعاليات</small>{{$partner->owner->events->count()}}</span>
                    <span><small>الحاضرين</small>{{$partner->owner->events->sum(function ($event) { return $event->guests->count(); })}}</span>
                  </div>
                </div>
              @endforeach

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

@pushOnce('scripts')
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<script async defer
    src="https://maps.googleapis.com/maps/api/js?libraries=places&callback=initMap&key=AIzaSyAat9OI4xdqvO2RjpsvbMx3PE3AoBCVoXo&language=ar&region=SA"></script>
    <script>
      function initMap() {
          var mapOptions = {
              zoom: 5,
              center: new google.maps.LatLng(24.7136, 46.6753), // Riyadh coordinates
          };
          var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
          var locations = @json($this->events_maps_locations);
  
          locations.forEach(function(location) {
              var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(location.lat, location.lng),
                  map: map
              });
  
              var infowindow = new google.maps.InfoWindow({
                  content: location.info
              });
  
              marker.addListener('click', function() {
                  infowindow.open(map, marker);
              });
          });
      }
  </script>

<script>
    // if (!localStorage.getItem("token")) {
    //   window.location.href =
    //     "http://localhost/shareekadabi-web.domais.sa/admin/?p=login";
    // }
    Highcharts.chart("chart_1", {
      chart: {
        type: "column",
        zoomType: "x",
        margin: [0, 0, 0, 0],
        events: {
          load: function () {
            const chart = this;
            let xAxisMin = chart.xAxis[0].dataMin,
              xAxisMax = chart.xAxis[0].dataMax,
              yAxisMin = chart.yAxis[0].dataMin,
              yAxisMax = chart.yAxis[0].dataMax;
            chart.update({
              xAxis: { min: xAxisMin, max: xAxisMax },
              yAxis: { min: yAxisMin, max: yAxisMax },
            });
          },
        },
        backgroundColor: null,
        spacingTop: 0,
        spacingRight: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        plotBorderWidth: 0,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
      },
      legend: { enabled: false },
      title: false,
      subtitle: false,
      xAxis: {
        categories: @json(array_column($this->months, 'month')),
        title: false,
        labels: { enabled: false },
        lineWidth: 0,
        tickWidth: 0,
        gridLineWidth: 0,
      },
      yAxis: {
        title: false,
        labels: { enabled: false },
        gridLineColor: "transparent",
      },
      plotOptions: { column: { borderRadius: "50%" } },
      tooltip: {
        formatter: function () {
          return (
            '<div class="text-center" dir="rtl"><span>' +
            this.x +
            "</span><br>" +
            this.y +
            "</div>"
          );
        },
      },
      series: [
        {
          name: "التمويل",
          color: "#ae2a3f80",
          data: @json(array_column($this->months, 'count')),
        },
      ],
    });
  
    Highcharts.chart("chart_2", {
      chart: {
        type: "areaspline",
        zoomType: "x",
        margin: [0, 0, 0, 0],
        events: {
          load: function () {
            const chart = this;
            let xAxisMin = chart.xAxis[0].dataMin,
              xAxisMax = chart.xAxis[0].dataMax,
              yAxisMin = chart.yAxis[0].dataMin,
              yAxisMax = chart.yAxis[0].dataMax;
            chart.update({
              xAxis: { min: xAxisMin, max: xAxisMax },
              yAxis: { min: yAxisMin, max: yAxisMax },
            });
          },
        },
        backgroundColor: null,
        spacingTop: 0,
        spacingRight: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        plotBorderWidth: 0,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
      },
      legend: { enabled: false },
      title: false,
      subtitle: false,
      xAxis: {
        categories: @json(array_column($this->guests_months, 'month')),
        title: false,
        labels: { enabled: false },
        lineWidth: 0,
        tickWidth: 0,
        gridLineWidth: 0,
      },
      yAxis: {
        title: false,
        labels: { enabled: false },
        gridLineColor: "transparent",
      },
      plotOptions: {
        areaspline: {
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#ae2a3f20"],
              [1, "#ae2a3f80"],
            ],
          },
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
          series: {
            groupPadding: 0,
          },
        },
      },
      tooltip: {
        formatter: function () {
          return (
            '<div class="text-center" dir="rtl"><span>' +
            this.x +
            "</span><br>" +
            this.y +
            "</div>"
          );
        },
      },
      series: [
        {
          name: "التمويل",
          color: "#ae2a3f70",
          data: @json(array_column($this->guests_months, 'guests_count')),
        },
      ],
    });
  
    Highcharts.chart("chart_3", {
      chart: {
        type: "pie",
        zoomType: "x",
        margin: [0, 0, 0, 0],
        events: {
          load: function () {
            const chart = this;
            let xAxisMin = chart.xAxis[0].dataMin,
              xAxisMax = chart.xAxis[0].dataMax,
              yAxisMin = chart.yAxis[0].dataMin,
              yAxisMax = chart.yAxis[0].dataMax;
            chart.update({
              xAxis: { min: xAxisMin, max: xAxisMax },
              yAxis: { min: yAxisMin, max: yAxisMax },
            });
          },
        },
        backgroundColor: null,
        spacingTop: 0,
        spacingRight: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        plotBorderWidth: 0,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
      },
      legend: { enabled: false },
      title: false,
      subtitle: false,
      plotOptions: { series: { dataLabels: { enabled: false } } },
      tooltip: {
        useHTML: true,
        formatter: function () {
          return (
            '<div class="text-center" dir="rtl"><span>' +
            this.key +
            " (" +
            this.point.m +
            ")</span><br>" +
            this.y +
            "</div>"
          );
        },
      },
      series: [
          {
              borderRadius: 3,
              data: {!! json_encode($this->literary_pie->map(function ($literary) use ($event_counter) {
                  return [
                      'name' => $literary->name,
                      'y' => $literary->events_count,
                      'm' => round(($literary->events_count / $event_counter) * 100, 2) . '%',
                  ];
              })) !!},
              colors: ["#ae2a3f40", "#ae2a3f70", "#ae2a3f"],
          },
      ],
    });
  
    Highcharts.chart("chart_4", {
      chart: {
        type: "pie",
        zoomType: "x",
        margin: [0, 0, 0, 0],
        events: {
          load: function () {
            const chart = this;
            let xAxisMin = chart.xAxis[0].dataMin,
              xAxisMax = chart.xAxis[0].dataMax,
              yAxisMin = chart.yAxis[0].dataMin,
              yAxisMax = chart.yAxis[0].dataMax;
            chart.update({
              xAxis: { min: xAxisMin, max: xAxisMax },
              yAxis: { min: yAxisMin, max: yAxisMax },
            });
          },
        },
        backgroundColor: null,
        spacingTop: 0,
        spacingRight: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        plotBorderWidth: 0,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        events: {
          render: function () {
            var chart = this,
              sum = 0;
  
            if (chart.textGroup) {
              chart.textGroup.destroy();
              chart.textGroup = undefined;
            }
  
            chart.textGroup = chart.renderer.g("textGroup").add().toFront();
            chart.series[0].data.forEach(function (value) {
              sum += value.y;
            });
  
            var customText = (chart.myCustomText = chart.renderer
              .text("" + "<br>", chart.plotWidth / 2, chart.plotHeight / 2)
              .css({
                fontSize: "16px",
                "text-align": "center",
              })
              .add(chart.textGroup));
            chart.textGroup.translate(-chart.myCustomText.getBBox().width / 2);
          },
        },
      },
      legend: { enabled: false },
      title: false,
      subtitle: false,
      plotOptions: {
        series: { dataLabels: { enabled: false } },
        pie: {
          innerSize: "70%",
        },
      },
      tooltip: {
        useHTML: true,
        formatter: function () {
          return (
            '<div class="text-center" dir="rtl"><span>' +
            this.key +
            "</span><br>" +
            this.y +
            "</div>"
          );
        },
      },
      series: [
        {
          borderRadius: 2,
          data: [
            {
              name: "مكافآت",
              y: {{$reward_counter}},
            },
            {
              name: "حجوزات",
              y: {{$reservation_counter}},
            },
          ],
          colors: ["#0dcaf0","#ffc107"],
        },
      ],
    });
  
    Highcharts.chart("chart_10", {
      chart: {
        type: "column",
        zoomType: "x",
        events: {
          load: function () {
            const chart = this;
            (yAxisMin = chart.yAxis[0].dataMin),
              (yAxisMax = chart.yAxis[0].dataMax);
            chart.update({ yAxis: { min: yAxisMin, max: yAxisMax } });
          },
        },
        backgroundColor: null,
        spacingTop: 0,
        spacingRight: 0,
        spacingLeft: 0,
        plotBorderWidth: 0,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
      },
      legend: { enabled: false },
      title: false,
      subtitle: false,
      xAxis: {
          categories: {!! json_encode(array_map(function($hour) {
              return $hour < 12 ? $hour . ' am' : ($hour == 12 ? $hour . ' pm' : ($hour - 12) . ' pm');
          }, array_keys($events_starts_today))) !!},
          title: true,
          labels: { enabled: true },
          lineWidth: 0,
          tickWidth: 0,
          gridLineWidth: 0,
      },
      yAxis: { title: true, labels: { enabled: true } },
      plotOptions: { column: { borderRadius: "4px" } },
      tooltip: { enabled: false },
      series: [
        {
          color: "#062E3A",
          data: {!! json_encode(array_values($events_starts_today)) !!},
        },
      ],
    });
  
    Highcharts.chart("chart_30", {
          chart: {
              type: "bar",
          },
          title: false,
          subtitle: false,
          xAxis: {
              categories: @json(array_keys($this->cityEventCounts)),
          },
          yAxis: {
              title: {
                  text: "عدد الفعاليات",
              },
          },
          plotOptions: {
              bar: {
                  dataLabels: {
                      enabled: true
                  }
              }
          },
          tooltip: {
              crosshairs: true,
              shared: true,
              useHTML: true,
              borderRadius: 8,
              headerFormat: '<b>{point.key}</b><table dir="rtl" style="width:175px">',
              pointFormat: '<tr><td> </td><td>{point.y}</td><td style="text-align: right;color: {series.color}">{series.name} </td></tr>',
              footerFormat: "</table>",
          },
          series: [{
              name: 'الفعاليات',
              data: @json(array_values($this->cityEventCounts)),
          }],
      });
  
    Highcharts.chart("chart_51", {
      chart: {
        type: "gauge",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: "79%",
      },
  
      title: false,
  
      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ["50%", "75%"],
        size: "110%",
      },
  
      tooltip: { enabled: false },
  
      // the value axis
      yAxis: {
        min: 0,
        max: 40,
        tickPixelInterval: 72,
        tickPosition: "inside",
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
          distance: 20,
          style: {
            fontSize: "14px",
          },
        },
        lineWidth: 0,
        plotBands: [
          {
            from: 0,
            to: 120,
            color: "#55BF3B", // green
            thickness: 20,
          },
          {
            from: 20,
            to: 30,
            color: "#DDDF0D", // yellow
            thickness: 20,
          },
          {
            from: 30,
            to: 40,
            color: "#DF5353", // red
            thickness: 20,
          },
        ],
      },
  
      series: [
        {
          data: [{{$this->permit_speed}}],
          dataLabels: {
            format: "بالمتوسط 30 يوم",
            borderWidth: 0,
            color:
              (Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              "#777777",
            style: {
              fontSize: "15px",
              directtion: "rtl",
            },
          },
          dial: {
            radius: "80%",
            backgroundColor: "gray",
            baseWidth: 12,
            baseLength: "0%",
            rearLength: "0%",
          },
          pivot: {
            backgroundColor: "gray",
            radius: 6,
          },
        },
      ],
    });
  
    Highcharts.chart("chart_52", {
      chart: {
        type: "gauge",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: "79%",
      },
  
      title: false,
  
      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ["50%", "75%"],
        size: "110%",
      },
  
      tooltip: { enabled: false },
  
      // the value axis
      yAxis: {
        min: 0,
        max: 40,
        tickPixelInterval: 72,
        tickPosition: "inside",
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
          distance: 20,
          style: {
            fontSize: "14px",
          },
        },
        lineWidth: 0,
        plotBands: [
          {
            from: 0,
            to: 10,
            color: "#55BF3B", // green
            thickness: 20,
          },
          {
            from: 10,
            to: 15,
            color: "#DDDF0D", // yellow
            thickness: 20,
          },
          {
            from: 15,
            to: 40,
            color: "#DF5353", // red
            thickness: 20,
          },
        ],
      },
  
      series: [
        {
          data: [{{$support_speed}}],
          dataLabels: {
            format: "بالمتوسط 30 يوم",
            borderWidth: 0,
            color:
              (Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              "#777777",
            style: {
              fontSize: "15px",
              directtion: "rtl",
            },
          },
          dial: {
            radius: "80%",
            backgroundColor: "gray",
            baseWidth: 12,
            baseLength: "0%",
            rearLength: "0%",
          },
          pivot: {
            backgroundColor: "gray",
            radius: 6,
          },
        },
      ],
    });
  </script>   
@endPushOnce
