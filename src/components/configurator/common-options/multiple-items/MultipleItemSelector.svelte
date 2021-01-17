<svelte:options immutable={true} />

<script lang="ts">
	import { FormField } from "@smui/core/form-field";
	import { Select, Option } from "@smui/core/select";
	import { MultipleItemsConfigurations } from ".";
	import { Item } from "./types";

	export let label: string;
	export let items: Item[];
	export let selectedItem: Item;

	export let multipleItemsConfigurations: MultipleItemsConfigurations;

	function handleSelection(id: string) {
		multipleItemsConfigurations.setSelectedItem(id);
	}
</script>

<div style="grid-column: span 2;">
	<FormField>
		<Select
			class="multiple-items-selector__select"
			nullable={false}
			value={selectedItem && selectedItem.id}
			on:change={(e) => handleSelection(e.detail.value)}
			on:change
		>
			<span slot="label">{label}</span>
			<div slot="options">
				{#each items as item (item.id)}
					<Option value={item.id}>{item.label}</Option>
				{/each}
			</div>
		</Select>
	</FormField>
</div>

<style>
	:global(.multiple-items-selector__select) {
		width: 100%;
	}
</style>
