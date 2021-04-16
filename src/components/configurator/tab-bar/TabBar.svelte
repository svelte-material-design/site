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
	export let value: string = tabs?.[0].value;
</script>

<TabBar bind:value>
	{#each tabs as tab}
		<Tab href={tab.href} value={tab.value}>
			<Content>
				<Label>{tab.label}</Label>
			</Content>
			<TabIndicator />
		</Tab>
	{/each}
</TabBar>
