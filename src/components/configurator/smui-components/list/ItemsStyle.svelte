<svelte:options immutable={true} />

<script lang="ts">
	import { Select } from "src/components/configurator/atoms/configurations";
	import type { ListConfigurations } from "./types";

	export let value: ListConfigurations["itemsStyle"];
</script>

<Select
	bind:value
	label="Items style"
	nullable={false}
	options={[
		{ label: "Textual", value: "textual" },
		{ label: "Image", value: "image" },
		{ label: "Icons", value: "icon" },
		{ label: "Avatar", value: "avatar" },
		{ label: "Thumbnail", value: "thumbnail" },
		{ label: "Video", value: "video" },
	]}
	{...$$restProps}
	on:change
/>
