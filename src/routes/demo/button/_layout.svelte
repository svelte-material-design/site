<script lang="ts">
	import ButtonConfigurator from "./_configurator/ButtonConfigurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath(`${getLayoutPath()}/button`);
</script>

<svelte:head>
	<title>Button - Svelte Material Design</title>
</svelte:head>

<section>
	<Title module="button">Button</Title>
	<ButtonConfigurator />
	<SubComponents />
	<slot />
</section>
