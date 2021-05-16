<svelte:options immutable={true} />

<div class="configuration">
	<slot />
</div>

<style>
	.configuration {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

</style>
