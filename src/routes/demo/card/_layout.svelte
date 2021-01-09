<script lang="ts">
	import Configurator from "./_configurator/Configurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath(`${getLayoutPath()}/card`);
</script>

<svelte:head>
	<title>Card - Svelte Material Design</title>
</svelte:head>

<section>
	<Title module="card">Card</Title>
	<Configurator />
	<SubComponents />
	<slot />
</section>
