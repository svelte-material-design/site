<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import type { ListBoxConfigurations } from "../types";

	export let configurations: ListBoxConfigurations;

	async function handleChange() {
		configurations = { ...configurations };
	}
</script>

<Checkbox
	label="Multi selection"
	bind:checked={configurations.multiSelection}
	on:change={handleChange}
	on:change
/>
