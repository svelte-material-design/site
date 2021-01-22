<svelte:options immutable={true} />

<script lang="ts">
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Checkbox } from "@svelte-material-design/core/checkbox";

	export let label: string;
	export let value: string;
	export let checked: boolean;
	export let ripple: boolean = true;
	export let density: number;
	export let accessibleTouch: boolean = true;
	export let allowIndeterminated: boolean;
	export let required: boolean;
	export let disabled: boolean;
	export let readonly: boolean;
</script>

<FormField>
	<Checkbox
		bind:checked
		name="checkbox"
		{value}
		{ripple}
		{density}
		{accessibleTouch}
		{allowIndeterminated}
		{disabled}
		{required}
		{readonly}
		on:change
	/>
	<Label>{label}</Label>
</FormField>
