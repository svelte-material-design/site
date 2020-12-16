<script lang="ts">
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { Select, Option } from "@smui/core/select";
	import {
		MenuSurfaceAnchorCorner,
		MenuSurfaceVariant,
		MDCMenuDistance,
	} from "@smui/core/menu-surface";
	import AnchorMarginOption from "./AnchorMarginOption.svelte";

	export let anchorCorner: MenuSurfaceAnchorCorner;
	export let anchorFlipRtl: boolean = true;
	export let quickOpen: boolean;
	export let open: boolean;
	export let variant: MenuSurfaceVariant;
	export let anchorMargin: MDCMenuDistance;
</script>

<svelte:options immutable={true} />

<div>
	<Select bind:value={anchorCorner} nullable={false} on:change>
		<span slot="label">Corner</span>
		<span slot="options">
			<Option value="bottom-start">Bottom start</Option>
			<Option value="bottom-end">Bottom end</Option>
			<Option value="top-start">Top start</Option>
			<Option value="top-end">Top end</Option>
		</span>
	</Select>
</div>
<div>
	<Select bind:value={variant} nullable={false} on:change>
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
		<Checkbox bind:checked={anchorFlipRtl} on:change />
		<Label>Anchor flip RTL</Label>
	</FormField>
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
