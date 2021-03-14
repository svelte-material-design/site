<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Typography } from "@svelte-material-design/core/typography";
	import { BaseInputFieldConfigurations } from "./types";

	export let configurations: BaseInputFieldConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Typography variant="body2">Input configurations</Typography>
<Section>
	<Checkbox
		label="Max length"
		checked={!!configurations.maxlength}
		on:change={(e) => {
			configurations.characterCounter = false;
			configurations.maxlength = e.detail.checked ? 20 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Placeholder"
		checked={!!configurations.placeholder}
		on:change={(e) => {
			configurations.placeholder = e.detail.checked ? "Placeholder" : undefined;
			updateInstance();
		}}
	/>
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
</Section>
