<script lang="ts">
	import { Option, Select } from "@svelte-material-design/core/select";
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Checkbox } from "@svelte-material-design/core/checkbox";
	import { DiscreteSlider } from "@svelte-material-design/core/slider";
	import { typography } from "@svelte-material-design/core/typography";

	export let value: string;
	export let customStyle: boolean;

	let sliderValue: number;
	let unit: "em" | "px";

	$: value = sliderValue && unit ? `${sliderValue}${unit}` : undefined;
	$: sliderValue = unit ? sliderValue : 0;
	$: unit = customStyle ? null : unit;
</script>

<div class="shape-radius-option">
	<div>
		<div>
			<span use:typography={"body1"}>Shape radius</span>
			<FormField vertical>
				<Label>Value: {customStyle ? "-" : value ? value : "default"}</Label>
				<DiscreteSlider
					class="slider"
					bind:value={sliderValue}
					discrete
					max={unit === "em" ? 2 : 32}
					step={unit === "em" ? 0.5 : 8}
					disabled={!unit}
				/>
			</FormField>
			<FormField>
				<Checkbox bind:checked={customStyle} />
				<span slot="label">Custom style</span>
			</FormField>
		</div>
		<FormField>
			<Select bind:value={unit} nullable={false} disabled={customStyle}>
				<span slot="label">Unit</span>
				<div slot="options">
					<Option value="em">em</Option>
					<Option value="px">px</Option>
				</div>
			</Select>
		</FormField>
	</div>
</div>

<style lang="scss">
	.shape-radius-option {
		grid-column: span 2;

		> div {
			display: flex;
			flex-direction: row;
		}
	}
</style>
