<script lang="ts">
	import Configurator from "./_configurator/Configurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath(`${getLayoutPath()}/fab`);
</script>

<svelte:head>
	<title>Fab - Svelte Material Design</title>
</svelte:head>

<section>
	<Title module="fab">Fab</Title>
	<Configurator />
	<SubComponents />
	<slot />
</section>
