<svelte:options immutable={true} />

<script lang="ts">
	import type { CheckboxConfigurationsItem } from "./types";
	import { Preview as Checkbox } from "../../_configurator";
	import { CheckboxGroup } from "@svelte-material-design/core/checkbox";

	export let items: CheckboxConfigurationsItem[] = [];
	export let value: string[];

	async function handleChange() {
		items = items.map((item) => {
			if (value.includes(item.value)) {
				item.checked = true;
			} else {
				item.checked = false;
			}

			return { ...item };
		});
	}
</script>

<CheckboxGroup bind:value>
	{#each items as item}
		<Checkbox {...item} bind:configurations={item} on:change={handleChange} />
	{/each}
</CheckboxGroup>
