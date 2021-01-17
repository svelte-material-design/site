<script lang="ts">
	import Configurator from "./_configurator/Configurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath(`${getLayoutPath()}/checkbox`);

	export let segment: string;
</script>

<svelte:head>
	<title>Checkbox - Svelte Material Design</title>
</svelte:head>

{#if segment === "iframe"}
	<slot />
{:else}
	<section>
		<Title module="checkbox">Checkbox</Title>
		<Configurator />
		<slot />
	</section>
{/if}
