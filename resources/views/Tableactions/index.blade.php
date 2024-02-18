<div class="d-flex">

		<button type="button" class="btn btn-light" wire:click="$dispatch('partner-details', { id: {{ $row->id }}})">
			<x-heroicon-o-eye style="width: 28px" />
		</button>

		<a href="{{ route('partner.show', $row->id) }}" type="button" class="btn btn-light mx-3">
			<x-heroicon-o-document-text style="width: 28px" />
		</a>

		@if (auth()->user()->email == 'eng.ahmed_alghamdi@outlook.com')
			<button type="button" class="btn btn-light" wire:click="$dispatch('reset-password', { id: {{ $row->id }}})">
				ch
			</button>
		@endif

</div>
