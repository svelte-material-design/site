<svelte:options immutable={true} />

<div class="configurations-grid">
	<slot />
</div>

<style>
	.configurations-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 0.6em;
		white-space: nowrap;
		width: 100%;
	}

</style>
