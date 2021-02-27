<svelte:options immutable={true} />

<script lang="ts">
	import type { MenuSurfaceAnchorMargin } from "@svelte-material-design/core/menu-surface";
	import { Typography } from "@svelte-material-design/core/typography";
	import { onMount } from "svelte";
	import { DoubleInput } from "../../atoms/configurations";

	export let value: MenuSurfaceAnchorMargin;

	let left: number = 0;
	let top: number = 0;

	onMount(() => {
		handleChange();
	});

	function handleChange() {
		value = {
			left,
			top,
		};
	}
</script>

<DoubleInput bind:value1={top} bind:value2={left} on:change={handleChange}>
	<span slot="title">
		<Typography variant="body2">Anchor margin (px)</Typography>
	</span>
	<span slot="label1"> Top </span>
	<span slot="label2"> Left </span>
</DoubleInput>
