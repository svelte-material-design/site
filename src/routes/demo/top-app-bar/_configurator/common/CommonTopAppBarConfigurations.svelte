<script lang="ts">
	import {
		Select,
		Checkbox,
	} from "src/components/configurator/atoms/configurations";
	import type { TopAppBarColor } from "@smui/core/top-app-bar";

	export let color: TopAppBarColor = "primary";
	export let prominent: boolean = false;
	export let dense: boolean = false;
</script>

<Select
	bind:value={color}
	options={[
		{ value: "primary", label: "Primary" },
		{ value: "secondary", label: "Secondary" },
	]}
	label="Color"
/>
<Checkbox bind:checked={prominent} label="Prominent" />
<Checkbox bind:checked={dense} label="Dense" />
