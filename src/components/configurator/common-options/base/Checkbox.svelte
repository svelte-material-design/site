<script lang="ts">
	import { Checkbox } from "@smui/core/checkbox";
	import { FormField, Label } from "@smui/core/form-field";
	import { Configuration } from "src/components/configurator";

	export let checked: boolean;
	export let disabled: boolean = undefined;
	export let label: string;
</script>

<Configuration>
	<FormField>
		<Checkbox bind:checked on:change {disabled} />
		<Label>{label}</Label>
	</FormField>
</Configuration>
