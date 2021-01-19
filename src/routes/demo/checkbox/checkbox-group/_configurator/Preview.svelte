<svelte:options immutable={true} />

<script lang="ts">
	import { CheckboxConfigurationsItem } from "./types";
	import { Preview as Checkbox } from "../../_configurator";
	import { CheckboxGroup } from "@svelte-material-design/core/checkbox";

	export let items: CheckboxConfigurationsItem[] = [];
	export let value: string[];

	async function handleChange() {
		items = [...items];
	}
</script>

<CheckboxGroup bind:value>
	{#each items as item, index}
		<Checkbox
			{...item}
			bind:checked={items[index].checked}
			on:change={handleChange}
		/>
	{/each}
</CheckboxGroup>
