<svelte:options immutable={true} />

<script lang="ts">
	import { Option, Options, Input } from "@svelte-material-design/core/select";
	import { SelectConfigurations } from "../types";

	export let configurations: SelectConfigurations;
</script>

<Input />
<Options>
	{#each configurations.items as item}
		<Option value={item.value} disabled={item.disabled}>{item.label}</Option>
	{/each}
</Options>
