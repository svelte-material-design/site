<script lang="ts">
	import { Select, Option } from "@svelte-material-design/core/select";
	import { FormField } from "@svelte-material-design/core/form-field";
	import { Configuration } from "src/components/configurator/atoms/configurations";

	export let disabled: boolean;
	export let value: string;
	export let label: string;
	export let nullable: boolean;
	export let options: {
		value: string;
		label: string;
	}[] = [];
</script>

<Configuration>
	<div class="select-option">
		<FormField>
			<Select class="select" {nullable} {disabled} bind:value on:change>
				<span slot="label">{label}</span>
				<div slot="options">
					{#each options as option (option.value)}
						<Option value={option.value}>{option.label}</Option>
					{/each}
				</div>
			</Select>
		</FormField>
	</div>
</Configuration>

<style>
	.select-option :global(.select) {
		width: 100%;
	}
</style>
