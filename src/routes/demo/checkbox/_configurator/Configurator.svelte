<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { template, script } from "./code";
	import Configurations from "./Configurations.svelte";
	import { CheckboxConfigurations } from "./types";
	import Preview from "./Preview.svelte";

	let label: string = "Label";
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
		label,
	};

	$: svelteScriptCode = script(configurations);
	$: svelteCode = template(configurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview
			bind:checked
			{ripple}
			{density}
			{expandedTouchTarget}
			{allowIndeterminated}
			{required}
			{disabled}
			{readonly}
			{label}
		/>
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
