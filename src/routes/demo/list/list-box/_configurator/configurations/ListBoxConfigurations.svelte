<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { onMount } from "svelte";
	import type { ListBoxConfigurations } from "../types";

	export let configurations: ListBoxConfigurations;

	onMount(() => {
		updateInstance();
	});

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Checkbox
	label="Multi selection"
	bind:checked={configurations.multiSelection}
	on:change={updateInstance}
/>
