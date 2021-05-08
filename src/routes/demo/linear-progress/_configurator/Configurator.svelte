<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Configurations, Preview } from ".";
	import { script, template } from "./code";
	import {
		createConfiguratorStore,
		setConfiguratorContext,
	} from "./ConfiguratorContext";

	const context$ = createConfiguratorStore();
	setConfiguratorContext(context$);

	const { configurations$ } = context$;

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteCode = template($configurations$);
	$: svelteScriptCode = script($configurations$);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview" style="width: 100%;">
		<Preview />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations />
	</svelte-fragment>
</Configurator>
