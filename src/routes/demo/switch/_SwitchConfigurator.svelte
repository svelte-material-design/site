<script lang="typescript">
	import { Switch } from "@smui/core/switch";
	import { FormField, Label } from "@smui/core/form-field";
	import { Configurator } from "src/components/configurator";
	import SwitchOptions from "./_SwitchOptions.svelte";
	import { getSwitchCode } from "./_switchCode";

	let checked: boolean;
	let dirty: boolean;

	let name = "switch";

	let ripple: boolean = true;
	let readonly: boolean;
	let disabled: boolean;
	let required: boolean;

	let ariaLabel: string;
	let title: string;
	let label: string;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = getSwitchCode({
		label,
		name,
		ripple,
		disabled,
		readonly,
		title,
		ariaLabel,
		required,
	});
</script>

<style lang="scss">
	[slot="preview"] {
		min-height: 10em;
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		<div>
			<FormField>
				<Switch
					bind:checked
					bind:dirty
					{name}
					{ripple}
					{disabled}
					{readonly}
					{title}
					{ariaLabel}
					{required} />
				{#if label}
					<Label>{label}</Label>
				{/if}
			</FormField>
		</div>
	</div>
	<div slot="values">
		<div>checked: {checked}</div>
		<div>dirty: {dirty}</div>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<SwitchOptions
			bind:ripple
			bind:label
			bind:checked
			bind:dirty
			bind:readonly
			bind:disabled
			bind:required
			bind:ariaLabel
			bind:title />
	</div>
</Configurator>
