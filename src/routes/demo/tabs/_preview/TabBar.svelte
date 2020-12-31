<script lang="ts">
	import { TabBar } from "@smui/core/tab-bar";
	import { TabConfigurations } from "../types";
	import Tab from "./Tab.svelte";

	export let active: string = undefined;
	export let tabs: TabConfigurations[] = [];
</script>

<svelte:options immutable={true} />

<TabBar bind:active>
	{#each tabs as tab}
		<Tab {...tab} bind:active={tab.active} />
	{/each}
</TabBar>
