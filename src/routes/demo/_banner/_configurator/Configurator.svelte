<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import { Values } from "src/components/configurator/atoms";
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
		<IFrame title="Banner preview" bind:props={$configurations$} />
	</div>
	<div slot="values">
		open: <Values value={$configurations$.open} />
	</div>
	<svelte:fragment slot="optionsSidebar">
		<Configurations />
	</svelte:fragment>
</Configurator>
