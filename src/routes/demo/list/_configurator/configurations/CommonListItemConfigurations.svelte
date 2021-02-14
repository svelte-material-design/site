<svelte:options immutable={true} />

<script lang="ts">
	import { CommonListItemConfigurations } from "src/components/configurator/smui-components/list";
	import type {
		BaseListItemConfigurations,
		BaseListConfigurations,
	} from "../types";

	export let labelFn: () => string = undefined;
	export let listConfigurations: BaseListConfigurations;
	export let configurations: BaseListItemConfigurations;
</script>

<CommonListItemConfigurations
	bind:configurations
	{labelFn}
	{listConfigurations}
/>
