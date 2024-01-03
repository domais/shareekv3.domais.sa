<?php

namespace App\Livewire\Includes;

use App\Livewire\Actions\Logout;
use Livewire\Component;

class Navbar extends Component
{
    public function logout(Logout $logout): void
    {
        $logout();

        $this->redirect('/login');
    }
    
    public function render()
    {
        return view('livewire.includes.navbar');
    }
}
