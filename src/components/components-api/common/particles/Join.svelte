<script lang="ts">
	export let values: string[];
	export let separator: string;
</script>

<span class="join">
	{#each values as value, index}
		<slot {value} />
		{#if index < values.length - 1}<span>{separator}</span>{/if}
	{/each}
</span>

<style>
	.join {
		display: inline-flex;
		white-space: break-spaces;
	}
</style>
