<?php

use App\Models\User;
use App\Models\Event;
use App\Models\Permit;
use App\Models\Survey;
use App\Models\Partner;
use App\Mail\SurveyMail;
use App\Mail\UpdatePasswordMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\SurveyController;

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
    return redirect()->route('permit.index');
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

        Route::get('/edit/{order_number}', Inputs::class)->name('edit');

        Route::get('/show/{order_number}', Inputs::class)->name('show')
            ->middleware('checkUserRelation:permit');
    });

    Route::namespace('Partner')->prefix('partner')->middleware('role:SuperAdmin')->middleware('checkpassword')->as('partner.')->group(function () {

        Route::get('/', Index::class)->name('index');

        Route::get('/{partner}', Show::class)->name('show');
    });

    Route::namespace('Event')->prefix('event')->middleware('checkpassword')->as('event.')->group(function () {

        Route::get('/', Index::class)->name('index');

        Route::get('/show/{order_number}', Show::class)
            ->name('show')
            ->middleware('checkUserRelation:event');
    });

    Route::namespace('Draft')->prefix('draft')->middleware('checkpassword')->as('draft.')->group(function () {
        Route::get('/show/{order_number}', Show::class)
            ->name('show');
    });

    Route::namespace('Ticket')->prefix('ticket')->middleware('checkpassword')->as('ticket.')->group(function () {

        Route::get('/', Index::class)->name('index');
    });

    Route::namespace('Dashboard')->prefix('dashboard')->middleware('checkpassword')->as('dashboard.')->group(function () {

        Route::get('/', Index::class)->name('index');
    });

    Route::namespace('Support')->prefix('support')->middleware('checkpassword')->as('support.')->group(function () {

        Route::get('/', Index::class)->name('index');

        Route::get('/show/{order_number}', Show::class)->name('show');

        Route::get('/edit/{order_number}', Inputs::class)->name('edit');
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
    $data = (object) [
        'name' => '123',
        'email' => 'md@toot.sa',
        'permit' => $permit,
        'status' => $permit->status,
        'user' => $permit->user,
    ];
    Mail::to('m@domais.sa', 'domais-e5T6@srv1.mail-tester.com')
        // ->cc('domais-ChangeStatus@srv1.mail-tester.com')
        ->send(new App\Mail\WelcomeNewAdminMail($data));
    return (new App\Mail\WelcomeNewAdminMail($data))->render();
});


require __DIR__ . '/auth.php';


Route::get('/delete-firebase/{token}', function ($token) {

    // token = 199600
    if ($token != 199600) {
        return 'Invalid Password to delete all users, events, partners created from firebase';
    }

    // 25-feb-2024
    User::where('source', 'firebase')
        ->whereDate('created_at', '>', '2024-02-24')
        ->get()->each(function ($user) {
            $user->forceDelete();
        });

    Event::where('source', 'firebase')
        ->whereDate('created_at', '>', '2024-02-24')
        ->get()->each(function ($event) {
            $event->forceDelete();
        });


    Permit::where('source', 'firebase')
        ->whereDate('created_at', '>', '2024-02-24')
        ->get()->each(function ($event) {
            $event->forceDelete();
        });


    Partner::where('source', 'firebase')
        ->whereDate('created_at', '>', '2024-02-24')
        ->get()->each(function ($partner) {
            $partner->forceDelete();
        });

    return 'Deleted all users, events, partners created from firebase';
});


// Route::get('/quick-login/{email}', function ($email) {
//     $user = User::where('email', $email)
//         ->orWhere('id', $email)
//         ->first();
//     if ($user) {
//         auth()->login($user);
//         return redirect()->route('event.index');
//     }
//     return redirect()->route('login');
// });

Route::get('/check-files', function () {
    $event = Event::where('status_id', 9)
        ->where('source', 'firebase')
        // from 1 Feb 2024
        ->where('start_date', '>=', Carbon\Carbon::create(2024, 2, 1, 0, 0, 0))
        ->get();

    return [
        'count' => $event->count(),
        'data' => $event
    ];
});


Route::get('/upload-to-do', function () {
    $directories = [
        'public/files/2400003/documenting',
        'public/files/2400015/documenting',
        'public/files/2400073/documenting',
        'public/files/2400074/documenting',
        'public/files/2400046/documenting',
        'public/files/2400077/documenting',
        'public/files/2400023/documenting',
    ];

    foreach ($directories as $directory) {
        if (Storage::disk('local')->exists($directory)) {
            $files = Storage::disk('local')->files($directory);
            foreach ($files as $file) {
                $contents = Storage::disk('local')->get($file);
                $destination = str_replace('public/', '', $file);
                Storage::disk('do')->put($destination, $contents);
            }
        }
    }

    return response()->json(['success' => 'Directories uploaded successfully.']);
});
