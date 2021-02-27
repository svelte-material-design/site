<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { onMount, tick } from "svelte";
	import type { MenuSurfaceConfigurations } from "./types";
	import { AnchorMarginConfiguration, AbsolutePositionConfiguration } from ".";

	export let configurations: MenuSurfaceConfigurations;

	onMount(async () => {
		await tick();

		updateInstance();
	});

	function updateInstance() {
		configurations = { ...configurations };
	}
</script>

<Select
	bind:value={configurations.anchorCorner}
	label="Corner"
	nullable={false}
	options={[
		{ label: "Bottom start", value: "bottom-start" },
		{ label: "Bottom end", value: "bottom-end" },
		{ label: "Top start", value: "top-start" },
		{ label: "Top end", value: "top-end" },
	]}
	on:change={updateInstance}
/>
<Select
	bind:value={configurations.variant}
	label="Variant"
	nullable={false}
	options={[
		{ label: "", value: "" },
		{ label: "Fixed", value: "fixed" },
		{ label: "Full width", value: "fullwidth" },
	]}
	on:change={updateInstance}
/>
<Checkbox
	label="Anchor flip RTL"
	bind:checked={configurations.anchorFlipRtl}
	on:change={updateInstance}
/>
<Checkbox
	label="Open"
	bind:checked={configurations.open}
	on:change={updateInstance}
/>
<Checkbox
	label="Quick open"
	bind:checked={configurations.quickOpen}
	on:change={updateInstance}
/>
<Checkbox
	label="Hoisted"
	bind:checked={configurations.hoisted}
	on:change={updateInstance}
/>
<AnchorMarginConfiguration
	bind:value={configurations.anchorMargin}
	on:change={updateInstance}
/>
<AbsolutePositionConfiguration
	bind:value={configurations.anchor}
	on:change={updateInstance}
/>
