<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "../../_configurator/preview";
	import { CheckboxGroup } from "@svelte-material-design/core/checkbox";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	function handleChange() {
		$items$ = $items$.map((item) => {
			if ($configurations$.value.includes(item.value)) {
				item.checked = true;
			} else {
				item.checked = false;
			}

			return { ...item };
		});

		multipleItemsHandler.updateSelectedInstance();
	}
</script>

<CheckboxGroup bind:value={$configurations$.value} on:change={handleChange}>
	{#each $items$ as item}
		<Checkbox bind:configurations={item} />
	{/each}
</CheckboxGroup>
