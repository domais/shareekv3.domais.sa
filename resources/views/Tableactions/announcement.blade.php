<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

    <div class="btn-group mx-2" role="group" aria-label="Third group">
      <button type="button" class="btn btn-light" wire:click="$dispatch('delete-user', { id: {{$row->id}}})">
        <x-heroicon-o-trash style="width: 28px" />
    </button>
    </div>
  </div>