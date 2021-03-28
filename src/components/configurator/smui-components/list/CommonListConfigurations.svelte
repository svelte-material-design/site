<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import type { ListConfigurations } from "./types";

	export let configurations: ListConfigurations;

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Select
	bind:value={configurations.itemsStyle}
	label="Items style"
	nullable={false}
	disabled={configurations.role === "group" ||
		configurations.role === "radiogroup"}
	options={[
		{ label: "Textual", value: "textual" },
		{ label: "Image", value: "image" },
		{ label: "Icons", value: "icon" },
		{ label: "Avatar", value: "avatar" },
		{ label: "Thumbnail", value: "thumbnail" },
		{ label: "Video", value: "video" },
	]}
	on:change={updateInstance}
/>
<Checkbox
	label="Use typeahead"
	bind:checked={configurations.typeahead}
	on:change={updateInstance}
/>
