<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { template, script } from "./code";
	import { Configurations, Preview } from ".";
	import {
		createConfiguratorStore,
		setConfiguratorContext,
	} from "./ConfiguratorContext";
	import { Values } from "src/components/configurator/atoms";

	const context$ = createConfiguratorStore();
	setConfiguratorContext(context$);

	const { configurations$ } = context$;

	let svelteScriptCode: string;
	let svelteCode: string;
	let scssCode: string;

	$: svelteScriptCode = script($configurations$);
	$: svelteCode = template($configurations$);

</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview />
	</div>
	<div slot="values">
		<div>
			open: <Values value={$configurations$.open} />
		</div>
		<div>
			closeReason: <Values value={$configurations$.closeReason} />
		</div>
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations />
	</svelte-fragment>
</Configurator>
