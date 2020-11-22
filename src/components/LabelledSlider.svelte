<script lang="ts">
	import { DiscreteSlider } from "@smui/core/slider";
	import { typography } from "@smui/core/typography";
	import { FormField, Label } from "@smui/core/form-field";

	export let value: number;
	export let min: number;
	export let max: number;
	export let step: number;

	export let label: string;
</script>

<style lang="scss">
	.labelled-slider :global(.labelled-slider__label) {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 0;

		> :global(div) {
			width: 100%;
			padding: 0 1em;
			display: flex;
			justify-content: space-between;
		}
	}
</style>

<div class="labelled-slider">
	<FormField vertical>
		<Label class="labelled-slider__label">
			<div use:typography={'body1'}>
				<span>{label}</span>
				<span>{value}</span>
			</div>
		</Label>
		<DiscreteSlider bind:value {min} {max} hideValueIndicator />
	</FormField>
</div>
