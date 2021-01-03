<script lang="ts">
	import { FormField } from "@smui/core/form-field";
	import { Option, Select } from "@smui/core/select";
	import { IconType } from ".";

	export let value: IconType = undefined;
	export let allowEmpty: boolean = false;
	export let label: string = "";
	export let disabled: boolean = false;
</script>

<div>
	<FormField>
		<Select
			bind:value
			style="width: 100%"
			{disabled}
			on:change
			nullable={allowEmpty}>
			<span slot="label">{label}</span>
			<div slot="options">
				{#if allowEmpty}
					<Option value={null} />
				{/if}
				<Option value="material-icon">Material icon</Option>
				<Option value="svg">SVG</Option>
				<Option value="img">Image</Option>
			</div>
		</Select>
	</FormField>
</div>
