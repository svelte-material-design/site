<script lang="ts">
	import IconButtonConfigurator from "./_configurator/IconButtonConfigurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath(`${getLayoutPath()}/icon-button`);
</script>

<svelte:head>
	<title>Icon Button - Svelte Material Design</title>
</svelte:head>

<section>
	<Title module="icon-button">Icon button</Title>
	<IconButtonConfigurator />
	<SubComponents />
	<slot />
</section>
