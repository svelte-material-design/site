<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";
	import { TabBar } from "src/components/configurator/tab-bar";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";

	export let segment: string;
	const layoutPath = setLayoutPath(`${getLayoutPath()}/slider`);

	let currentTab: "slider" | "discrete-slider" =
		segment === "discrete-slider" ? "discrete-slider" : "slider";
</script>

<svelte:head>
	<title>Slider - Svelte Material Design</title>
</svelte:head>

<section>
	<Title module="slider">Slider</Title>
	<TabBar
		bind:active={currentTab}
		tabs={[
			{ key: "slider", label: "Slider", href: layoutPath },
			{
				key: "discrete-slider",
				label: "Discrete slider",
				href: `${layoutPath}/discrete-slider`,
			},
		]}
	/>
	{#if segment === "discrete-slider"}
		<slot />
	{:else}
		<Configurator />
		<SubComponents />
		<slot />
	{/if}
</section>
