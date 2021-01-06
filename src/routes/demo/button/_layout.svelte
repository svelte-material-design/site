<script lang="ts">
	import "./button.scss";
	import ButtonConfigurator from "./_ButtonConfigurator.svelte";
	import { SubComponents } from "./_api";
	import { setLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";

	setLayoutPath("/demo/button");
</script>

<section>
	<Title module="button">Button</Title>

	<ButtonConfigurator />

	<SubComponents />
	<slot />
</section>
