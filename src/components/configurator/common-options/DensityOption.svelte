<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { DiscreteSlider } from "@svelte-material-design/core/slider";
	import { typography } from "@svelte-material-design/core/typography";

	export let density: number;
	export let max: number = 4;

	let densitySlider: number;
	$: density = densitySlider ? densitySlider * -1 : undefined;
</script>

<FormField vertical>
	<Label>
		<span use:typography={"body2"}>
			Density:
			{densitySlider ? `-${densitySlider}` : "default"}
		</span>
	</Label>
	<DiscreteSlider bind:value={densitySlider} {max} step={1} on:change />
</FormField>
