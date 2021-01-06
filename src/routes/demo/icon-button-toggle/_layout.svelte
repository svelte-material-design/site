<script lang="ts">
	import IconButtonToggleConfigurator from "./_configurator/IconButtonToggleConfigurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath(`${getLayoutPath()}/icon-button-toggle`);
</script>

<svelte:head>
	<title>Icon Button Toggle - Svelte Material Design</title>
</svelte:head>

<section>
	<Title module="icon-button-toggle">Icon button toggle</Title>

	<IconButtonToggleConfigurator />

	<SubComponents />
	<slot />
</section>
