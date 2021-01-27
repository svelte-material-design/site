<script lang="ts">
	import { Text } from "../common/particles/atoms";

	export let value: any;

	let formatted = JSON.stringify(value);
</script>

<span>Default:</span>
{#if !$$slots.default}
	<code class="value">{formatted}</code>
{:else}
	<Text><slot /></Text>
{/if}

<style>
	.value {
		color: #c51916;
	}
</style>
