<script lang="ts">
	import { Checkbox } from "@svelte-material-design/core/checkbox";
	import { FormField, Label } from "@svelte-material-design/core/form-field";
	import { Configuration } from "src/components/configurator/atoms/configurations";

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
