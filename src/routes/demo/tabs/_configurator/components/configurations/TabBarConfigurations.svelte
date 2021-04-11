<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import type { TabBarConfigurations } from "../../types";

	export let configurations: TabBarConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Checkbox
	bind:checked={configurations.focusOnActivate}
	label="Focus on activate"
	on:change={updateInstance}
/>
<Checkbox
	bind:checked={configurations.activateOnKeyboardNavigation}
	label="Activate on keyboard navigation"
	on:change={updateInstance}
/>
<Select
	bind:value={configurations.transition}
	label="Tab indicator transition"
	nullable={false}
	options={[
		{ value: "slide", label: "Slide" },
		{ value: "fade", label: "Fade" },
	]}
	on:change={updateInstance}
/>
