<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import type { BaseInputFieldConfigurations } from "./types";

	export let configurations: BaseInputFieldConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}

</script>

<Checkbox
	label="Title"
	checked={!!configurations.title}
	on:change={(e) => {
		configurations.title = e.detail.checked ? "Title" : undefined;
		updateInstance();
	}}
/>
<Checkbox
	label="Read only"
	bind:checked={configurations.readonly}
	on:change={updateInstance}
/>
