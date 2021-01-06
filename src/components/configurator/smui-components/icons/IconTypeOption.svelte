<script lang="ts">
	import { IconType } from ".";
	import { Select } from "../../common-options/base";

	export let value: IconType = undefined;
	export let allowEmpty: boolean = false;
	export let label: string = "";
	export let disabled: boolean = false;

	let options: Select["$$prop_def"]["options"];
	$: {
		options = [
			{
				value: "material-icon",
				label: "Material icon",
			},
			{
				value: "svg",
				label: "SVG",
			},
			{
				value: "img",
				label: "Image",
			},
		];

		if (allowEmpty) {
			options = [
				{
					value: "",
					label: "",
				},
				...options,
			];
		}
	}
</script>

<Select
	bind:value
	{disabled}
	on:change
	nullable={allowEmpty}
	{label}
	{options} />
