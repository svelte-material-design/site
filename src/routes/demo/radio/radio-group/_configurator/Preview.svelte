<svelte:options immutable={true} />

<script lang="ts">
	import type { RadioConfigurationsItem } from "./types";
	import { Preview as Radio } from "../../_configurator";
	import { RadioGroup } from "@svelte-material-design/core/radio";

	export let items: RadioConfigurationsItem[] = [];
	export let value: string;

	async function handleChange() {
		items = items.map((item) => {
			if (item.value === value) {
				item.checked = true;
			} else {
				item.checked = false;
			}

			return { ...item };
		});
	}
</script>

<RadioGroup bind:value on:change={handleChange}>
	{#each items as item}
		<Radio bind:configurations={item} />
	{/each}
</RadioGroup>
