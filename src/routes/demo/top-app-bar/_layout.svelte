<script lang="ts">
	import {
		TopAppBarConfigurator,
		CollapsableTopAppBarConfigurator,
	} from "./_configurator";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";
	import {
		TabBar,
		Tab,
		Label,
		Content,
		TabIndicator,
	} from "@svelte-material-design/core/tab-bar";

	setLayoutPath(`${getLayoutPath()}/top-app-bar`);

	export let segment: string;
	export let configurator: "standard" | "collapsable" = "standard";
</script>

<svelte:head>
	<title>Top App Bar - Svelte Material Design</title>
</svelte:head>

{#if segment === 'iframe'}
	<slot />
{:else}
	<section>
		<Title module="top-app-bar">Top App Bar</Title>
		<TabBar bind:active={configurator}>
			<Tab key="standard">
				<Content>
					<Label>Top App Bar</Label>
				</Content>
				<TabIndicator />
			</Tab>
			<Tab key="collapsable">
				<Content>
					<Label>Collapsable Top App Bar</Label>
				</Content>
				<TabIndicator />
			</Tab>
		</TabBar>
		{#if configurator === 'standard'}
			<TopAppBarConfigurator />
		{:else if configurator === 'collapsable'}
			<CollapsableTopAppBarConfigurator />
		{/if}
		<SubComponents />
		<slot />
	</section>
{/if}
