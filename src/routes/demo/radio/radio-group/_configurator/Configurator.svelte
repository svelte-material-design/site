<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Values } from "src/components/configurator/atoms";
	import { template, script } from "./code";
	import Configurations from "./Configurations.svelte";
	import type { RadioConfigurationsItem } from "./types";
	import Preview from "./Preview.svelte";

	let items: RadioConfigurationsItem[];
	let value: string;

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteScriptCode = script();
	$: svelteCode = template(items);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview bind:items bind:value />
	</div>
	<div slot="values">
		value: <Values {value} />
	</div>
	<div slot="optionsSidebar">
		<Configurations bind:items />
	</div>
</Configurator>
