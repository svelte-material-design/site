<script lang="ts">
	import { Text, Value } from "../common/particles/atoms";

	export let value: any = undefined;
</script>

<span>Default:</span>
{#if !$$slots.default}
	<Value {value} />
{:else}
	<Text><slot /></Text>
{/if}
