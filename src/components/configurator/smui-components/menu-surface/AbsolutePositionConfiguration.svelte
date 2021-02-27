<svelte:options immutable={true} />

<script lang="ts">
	import type { MenuSurfaceAbsolutePosition } from "@svelte-material-design/core/menu-surface";
	import { createEventDispatcher, onMount, tick } from "svelte";
	import { DoubleInput } from "../../atoms/configurations";
	import { Checkbox } from "src/components/configurator/atoms/configurations";

	export let value: MenuSurfaceAbsolutePosition;

	const dispatch = createEventDispatcher<{
		change: void;
	}>();

	let x: number = 0;
	let y: number = 0;
	let enabled: boolean = false;

	onMount(() => {
		handleChange();
	});

	async function handleChange() {
		if (enabled) {
			value = {
				x,
				y,
			};
		} else {
			value = null;
		}

		await tick();

		dispatch("change");
	}
</script>

<DoubleInput
	bind:value1={x}
	bind:value2={y}
	disabled={!enabled}
	on:change={handleChange}
>
	<span slot="title">
		<Checkbox
			label="Absolute position (px)"
			bind:checked={enabled}
			on:change={handleChange}
		/>
	</span>
	<span slot="label1"> X </span>
	<span slot="label2"> Y </span>
</DoubleInput>
