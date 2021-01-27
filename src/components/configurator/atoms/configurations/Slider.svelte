<script lang="ts">
	import { DiscreteSlider, Range, Thumb } from "@smui/core/slider";
	import { typography } from "@smui/core/typography";
	import { FormField, Label } from "@smui/core/form-field";

	export let value: number;
	export let min: number;
	export let max: number;
	export let step: number;

	export let label: string;
</script>

<div class="labelled-range-slider">
	<FormField vertical>
		<Label class="labelled-range-slider__label">
			<div use:typography={"body1"}><span>{label}</span></div>
		</Label>
		<div class="slider-wrapper">
			<span>{value}</span>
			<DiscreteSlider
				class="labelled-range-slider__slider"
				gap={1}
				hideValueIndicator
				on:input
				on:change
				><Range {min} {max} bind:value {step} let:value>
					<Thumb>{value}</Thumb>
				</Range></DiscreteSlider
			>
		</div>
	</FormField>
</div>

<style lang="scss">
	.labelled-range-slider {
		:global(.labelled-range-slider__label) {
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

		.slider-wrapper {
			display: flex;
			align-items: center;
			padding: 0 1em;

			:global(.labelled-range-slider__slider) {
				width: 10em;
			}

			> span {
				width: 2ch;
			}
		}
	}
</style>
