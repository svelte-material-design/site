<script lang="ts">
	import { Select, Option } from "@smui/core/select";
	import { FormField } from "@smui/core/form-field";

	export let value: string;
	export let label: string;
	export let nullable: boolean;
	export let options: {
		value: string;
		label: string;
	}[] = [];
</script>

<div>
	<FormField>
		<Select {nullable} bind:value on:change>
			<span slot="label">{label}</span>
			<div slot="options">
				{#each options as option (option.value)}
					<Option value={option.value}>{option.label}</Option>
				{/each}
			</div>
		</Select>
	</FormField>
</div>
