<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { Select, Option } from "@smui/core/select";
	import {
		Corner,
		MenuSurfaceVariant,
		MDCMenuDistance,
	} from "@smui/core/menu-surface";
	import SliderOption from "src/components/configurator/common-options/base/SliderOption.svelte";
	import AnchorMarginOption from "./_AnchorMarginOption.svelte";

	export let anchorCorner: Corner;
	export let quickOpen: boolean;
	export let open: boolean;
	export let variant: MenuSurfaceVariant;
	export let anchorMargin: MDCMenuDistance;

	function handleCorderChange(value: string) {
		anchorCorner = Number(value);
	}
</script>

<svelte:options immutable={true} />

<div>
	<Select
		nullable={false}
		on:change={(event) => handleCorderChange(event.detail.value)}>
		<span slot="label">Corner</span>
		<span slot="options">
			<Option value={`${Corner.BOTTOM_LEFT}`}>Bottom left</Option>
			<Option value={`${Corner.BOTTOM_RIGHT}`}>Bottom right</Option>
			<Option value={`${Corner.BOTTOM_START}`}>Bottom start</Option>
			<Option value={`${Corner.BOTTOM_END}`}>Bottom end</Option>
			<Option value={`${Corner.TOP_LEFT}`}>Top left</Option>
			<Option value={`${Corner.TOP_RIGHT}`}>Top right</Option>
			<Option value={`${Corner.TOP_START}`}>Top start</Option>
			<Option value={`${Corner.TOP_END}`}>Top end</Option>
		</span>
	</Select>
</div>
<div>
	<Select bind:value={variant} nullable={false}>
		<span slot="label">Variant</span>
		<span slot="options">
			<Option />
			<Option value="fixed">Fixed</Option>
			<Option value="fullwidth">Full width</Option>
		</span>
	</Select>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={open} on:change />
		<Label>Open</Label>
	</FormField>
</div>
<div>
	<FormField>
		<Checkbox bind:checked={quickOpen} on:change />
		<Label>Quick open</Label>
	</FormField>
</div>
<AnchorMarginOption bind:value={anchorMargin} />
