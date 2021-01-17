<script lang="ts">
	import Configurator from "./_configurator/Configurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath(`${getLayoutPath()}/list`);
</script>

<svelte:head>
	<title>List - Svelte Material Design</title>
</svelte:head>

<section>
	<Title module="button">List</Title>
	<Configurator />
	<SubComponents />
	<slot />
</section>
