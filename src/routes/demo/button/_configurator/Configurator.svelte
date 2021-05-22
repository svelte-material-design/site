<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { scss, template, script } from "./code";
	import { Configurations, Preview } from ".";
	import {
		createConfiguratorStore,
		setConfiguratorContext,
	} from "./ConfiguratorContext";

	const context$ = createConfiguratorStore();
	setConfiguratorContext(context$);

	const { configurations$ } = context$;

	let svelteScriptCode: string;
	let svelteCode: string;
	let scssCode: string;

	$: svelteScriptCode = script($configurations$);
	$: svelteCode = template($configurations$);
	$: scssCode = scss($configurations$);

</script>

<Configurator {svelteScriptCode} {svelteCode} {scssCode}>
	<div slot="preview">
		<Preview />
	</div>
	<svelte:fragment slot="optionsSidebar">
		<Configurations />
	</svelte:fragment>
</Configurator>
