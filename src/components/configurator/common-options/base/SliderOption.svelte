<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { typography } from "@smui/core/typography";
	import { DiscreteSlider } from "@smui/core/slider";

	export let value: number;
	export let precision: number = undefined;
	export let max: number;
	export let step: number;
	export let label: string;
	export let showDefault: boolean = false;

	function round(v: number) {
		return Number(v).toFixed(precision);
	}
</script>

<style lang="scss">
	.slider-options :global(.label) {
		width: 100%;

		> :global(div) {
			display: flex;
			justify-content: space-between;
		}
	}
</style>

<div class="slider-options">
	<FormField vertical>
		<Label class="label">
			<div use:typography={'body2'}>
				<span>{label}</span>
				<span>{value || !showDefault ? `${round(value)}` : 'default'}</span>
			</div>
		</Label>
		<DiscreteSlider bind:value {max} {step} on:change valueText={round} />
	</FormField>
</div>
