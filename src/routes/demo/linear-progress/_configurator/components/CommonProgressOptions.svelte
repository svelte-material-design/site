<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import type { IndeterminateLinearProgressConfigurations } from "../../indeterminate-linear-progress/_configurator/types";

	export let configurations: IndeterminateLinearProgressConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Checkbox
	bind:checked={configurations.reversed}
	label="Reversed"
	on:change={updateInstance}
	on:change
/>
<Checkbox
	bind:checked={configurations.closed}
	label="Closed"
	on:change={updateInstance}
	on:change
/>
