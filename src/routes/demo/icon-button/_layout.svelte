<script lang="ts">
	import IconButtonConfigurator from "./_configurator/IconButtonConfigurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath("/demo/icon-button");
</script>

<section>
	<Title module="icon-button">Icon button</Title>

	<IconButtonConfigurator />

	<SubComponents />
	<slot />
</section>
