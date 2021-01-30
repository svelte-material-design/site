<svelte:options immutable={true} />

<script lang="ts">
	import {
		TabBar,
		Tab,
		Label,
		Content,
		TabIndicator,
	} from "@svelte-material-design/core/tab-bar";
	import type { Option } from "./types";

	export let tabs: Option[];
	export let active: string = tabs?.[0].key;
</script>

<TabBar bind:active>
	{#each tabs as tab}
		<a href={tab.href}>
			<Tab key={tab.key}>
				<Content>
					<Label>{tab.label}</Label>
				</Content>
				<TabIndicator />
			</Tab>
		</a>
	{/each}
</TabBar>

<style>
	a {
		display: contents;
	}
</style>
