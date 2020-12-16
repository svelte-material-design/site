<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { DiscreteSlider } from "@smui/core/slider";
	import { typography } from "@smui/core/typography";

	export let density: number;
	export let max: number = 4;

	let densitySlider: number;
	$: density = densitySlider ? densitySlider * -1 : undefined;
</script>

<svelte:options immutable={true} />

<FormField vertical>
	<Label>
		<span use:typography={'body2'}>
			Density:
			{densitySlider ? `-${densitySlider}` : 'default'}
		</span>
	</Label>
	<DiscreteSlider bind:value={densitySlider} {max} step={1} on:change />
</FormField>
