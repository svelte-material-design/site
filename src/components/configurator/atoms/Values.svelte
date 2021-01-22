<script lang="ts">
	export let value: any;
</script>

{JSON.stringify(value)}
<!-- {#if typeof value === "string"}
	"{value}"
{:else if Array.isArray(value)}
	[{#each value as valueItem, index}
		<svelte:self value={valueItem} />{#if index < value.length - 1}, {/if}
	{/each}]
{:else}
	{value}
{/if} -->
