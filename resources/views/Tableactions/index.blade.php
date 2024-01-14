<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

    <div class="btn-group mx-2" role="group" aria-label="Third group">
      <button type="button" class="btn btn-light" wire:click="$dispatch('partner-details', { id: {{$row->id}}})">
        <x-heroicon-o-eye style="width: 28px" />
    </button>
    </div>


      <div class="btn-group mx-2" role="group" aria-label="Third group">
        <a href="{{route('partner.show',$row->id)}}" type="button" class="btn btn-light">
            <x-heroicon-o-document-text style="width: 28px" />
        </a>
      </div>

  </div>