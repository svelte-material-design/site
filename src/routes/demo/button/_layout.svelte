<svelte:options immutable={true} />

<script lang="ts">
	import Configurator from "./_configurator/Configurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath(`${getLayoutPath()}/button`);

	export let segment: string;
</script>

<svelte:head>
	<title>Button - Svelte Material Design</title>
</svelte:head>

{#if segment === "iframe"}
	<slot />
{:else}
	<section>
		<Title module="button">Button</Title>
		<Configurator />
		<SubComponents />
		<slot />
	</section>
{/if}
