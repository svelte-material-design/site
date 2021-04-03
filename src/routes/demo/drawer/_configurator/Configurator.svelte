<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import { Configurations } from ".";
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

	$: svelteScriptCode = script($configurations$);
	$: svelteCode = template($configurations$);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview" style="width: 100%; height: 15em;">
		<IFrame title="Drawer preview" props={$configurations$} />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations />
	</svelte-fragment>
</Configurator>
