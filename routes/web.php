<?php

use App\Mail\UpdatePasswordMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\SurveyController;
use App\Models\Survey;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect('/i');
});

// Survey Guest, Speaker /survey/guest/{token} /survey/speaker/{token}
Route::get('/survey/{type}/{token}', [SurveyController::class, 'index'])->name('survey');
Route::get('/survey/completed', [SurveyController::class, 'completed'])->name('survey.completed');

// guest.survey
Route::post('/survey/guest/{token}', [SurveyController::class, 'guest'])->name('guest.survey');
Route::post('/survey/speaker/{token}', [SurveyController::class, 'speaker'])->name('speaker.survey');

Route::namespace('App\Livewire\Backend')->middleware('auth')->group(function () {

    Route::namespace('Permit')->prefix('permit')->as('permit.')->middleware('checkpassword')->group(function () {

        Route::get('/', Index::class)->name('index');

        Route::get('/create', Inputs::class)->name('create')->middleware('role:User');

        Route::get('/draft/{draft}', Inputs::class)->name('draft');

        Route::get('/edit/{permit}', Inputs::class)->name('edit');

        Route::get('/show/{permit}', Inputs::class)->name('show');
    });

    Route::namespace('Partner')->prefix('partner')->middleware('role:SuperAdmin')->middleware('checkpassword')->as('partner.')->group(function () {

        Route::get('/', Index::class)->name('index');

        Route::get('/{partner}', Show::class)->name('show');
    });

    Route::namespace('Event')->prefix('event')->middleware('checkpassword')->as('event.')->group(function () {

        Route::get('/', Index::class)->name('index');

        Route::get('/show/{permit}', Show::class)->name('show');

    });

    Route::namespace('Ticket')->prefix('ticket')->middleware('checkpassword')->as('ticket.')->group(function () {

        Route::get('/', Index::class)->name('index');
    });

    Route::namespace('Support')->prefix('support')->middleware('checkpassword')->as('support.')->group(function () {

        Route::get('/', Index::class)->name('index');

        Route::get('/show/{permit}', Show::class)->name('show');
    });

    Route::namespace('Announcement')->prefix('announcement')->middleware('checkpassword')->as('announcement.')->group(function () {

        Route::get('/', Index::class)->name('index');
    });

    Route::namespace('Profile')->prefix('profile')->as('profile.')->group(function () {

        Route::get('/', Index::class)->name('index');
    });

    Route::namespace('Survey')->prefix('survey')->middleware('checkpassword')->as('survey.')->group(function () {

        Route::get('/', Index::class)->name('index');
        Route::get('/{survey}', Show::class)->name('show');
    });

    Route::namespace('Role')->prefix('adminstrators')->middleware('checkpassword')->middleware('checkPermission:role-index')->as('adminstrator.')->group(function () {

        Route::get('/', Index::class)->name('index');
        Route::get('/{user}', Edit::class)->name('edit');
    });
});


Route::get('mail', function () {
    $permit = App\Models\Permit::findorfail(1);
    $data = [
        'permit' => $permit,
        'status' => $permit->status,
        'user' => $permit->user,
    ];
    Mail::to('m@domais.sa')->send(new App\Mail\ChangeStatus($data));
    return (new App\Mail\ChangeStatus($data))->render();
});


require __DIR__ . '/auth.php';


Route::get('/test', function () {

    // delete any job name migrate-guests
    // $job = \DB::table('jobs')->where('queue', 'migrate-guests')->delete();
    // $jobFail = \DB::table('failed_jobs')->delete();

    // delete users create from 5h ago force delete it
    // 2024-01-16 00:52:15
    // dd(\Carbon\Carbon::now()->subHours(4)->format('Y-m-d H:i:s'));
    // $users = \DB::table('users')->where(
    //     'source',
    //     'firebase-guests'
    // )->get();
    // dd($users);
    // $users->each(function ($user) {
    //     $user->forceDelete();
    // });
    // $json = file_get_contents(public_path('firebase_data/EventGuests.json'));
    // $data = json_decode($json);

    // collect($data)->chunk(100)->map(function ($chunk) {
    //     $service = new \App\Services\MigrateFromFirebaseService();
    //     $service->guests($chunk);
    // });

    return Survey::first()->surveyable->name;

    // $user = \App\Models\User::where('email', 'gm.xerk@gmail.com')->first();

    // $token = md5(uniqid(rand(), true));

    // $user->surveys()->create([
    //     'token' => $token,
    //     'expire_at' => \Carbon\Carbon::now()->addDays(7),
    //     'event_id' => 1,
    //     'type' => 'speaker'
    // ]);

    // $event = \App\Models\Event::find(1);

    // // Send Survey Mail
    // Mail::to($user)->send(new \App\Mail\SurveyMail($token, $event, $user, 'speaker'));
});
