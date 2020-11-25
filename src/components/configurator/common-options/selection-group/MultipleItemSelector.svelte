<script lang="ts">
	import { FormField } from "@smui/core/form-field";
	import { Select, Option } from "@smui/core/select";
	import { Item } from "./types";

	export let label: string;
	export let items: Item[];
	export let selectedItemId: string;
</script>

<style>
	:global(.multiple-items-selector__select) {
		width: 100%;
	}
</style>

<div style="grid-column: span 2;">
	<FormField>
		<Select
			class="multiple-items-selector__select"
			nullable={false}
			bind:value={selectedItemId}
			on:change>
			<span slot="label">{label}</span>
			<div slot="options">
				{#each items as item (item.id)}
					<Option value={item.id}>{item.label}</Option>
				{/each}
			</div>
		</Select>
	</FormField>
</div>
