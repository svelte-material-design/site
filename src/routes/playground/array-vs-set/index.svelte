<script lang="ts">
	import Array from "./_Array.svelte";
	import Set from "./_Set.svelte";
</script>

<style>
	.main {
		display: flex;
	}

	.main > div {
		padding: 2em;
	}

	.main > div:not(:last-child) {
		border-right: 1px solid black;
	}
</style>

<svelte:options immutable={true} />

<div class="main">
	<div>
		<Set />
	</div>
	<div>
		<Array />
	</div>
</div>
