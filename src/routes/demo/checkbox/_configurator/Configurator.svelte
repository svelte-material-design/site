<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { template, script } from "./code";
	import Configurations from "./Configurations.svelte";
	import { FormField, Label } from "@smui/core/form-field";
	import { Checkbox } from "@smui/core/checkbox";
	import { CheckboxConfigurations } from "./types";

	let checked: boolean;
	let ripple: boolean = true;
	let density: number;
	let expandedTouchTarget: boolean = true;
	let allowIndeterminated: boolean;
	let required: boolean;
	let disabled: boolean;
	let readonly: boolean;

	let svelteScriptCode: string;
	let svelteCode: string;

	let configurations: CheckboxConfigurations;
	$: configurations = {
		checked,
		ripple,
		density,
		expandedTouchTarget,
		allowIndeterminated,
		required,
		disabled,
		readonly,
	};

	$: svelteScriptCode = script(configurations);
	$: svelteCode = template(configurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<FormField>
			<Checkbox
				bind:checked
				value="checkbox-value"
				name="checkbox"
				{ripple}
				{density}
				{expandedTouchTarget}
				{allowIndeterminated}
				{disabled}
				{required}
				{readonly}
			/>
			<Label>Label</Label>
		</FormField>
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:checked
			bind:ripple
			bind:allowIndeterminated
			bind:disabled
			bind:readonly
			bind:density
			bind:expandedTouchTarget
			bind:required
		/>
	</svelte-fragment>
</Configurator>
