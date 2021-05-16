<svelte:options immutable={true} />

<script lang="ts">
	import {
		Select,
		Option,
		Options,
		Content,
		Input,
		OptionContent,
	} from "@svelte-material-design/core/select";
	import { FormField } from "@svelte-material-design/core/form-field";
	import { Configuration } from "src/components/configurator/atoms/configurations";

	export let disabled: boolean = undefined;
	export let value: string = undefined;
	export let label: string = undefined;
	export let nullable: boolean = undefined;
	export let options: {
		value: string;
		label: string;
	}[] = [];

</script>

<Configuration>
	<div class="select-option">
		<FormField>
			<Select class="select" {nullable} {disabled} bind:value on:change>
				<Content>
					<span slot="label">{label}</span>
					<Input />
					<Options>
						{#each options as option (option.value)}
							<Option value={option.value}>
								<OptionContent>
									{option.label}
								</OptionContent>
							</Option>
						{/each}
					</Options>
				</Content>
			</Select>
		</FormField>
	</div>
</Configuration>

<style>
	.select-option :global(.select) {
		width: 100%;
	}

</style>
