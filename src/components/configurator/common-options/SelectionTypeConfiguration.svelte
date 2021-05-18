<svelte:options immutable={true} />

<script lang="ts">
	import { Select } from "src/components/configurator/atoms/configurations";

	export let value: string = undefined;
	export let disabled: boolean = false;
	export let clearable: boolean = true;
	export let onlySingleSelection: boolean = false;
	export let options = [
		...(clearable ? [{ label: "", value: "" }] : []),
		{
			label: "Single",
			value: "single",
		},
		...(!onlySingleSelection
			? [
					{
						label: "Multi",
						value: "multi",
					},
			  ]
			: []),
	];

</script>

<Select
	bind:value
	label="Selection type"
	{disabled}
	{options}
	nullable={false}
	on:change
/>
