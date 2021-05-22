<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Values } from "src/components/configurator/atoms";
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

	$: svelteScriptCode = script($configurations$);
	$: svelteCode = template($configurations$);

</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview" style="min-height: 10em;">
		<Preview />
	</div>
	<div slot="values">
		<div>
			value: <Values value={$configurations$.value} />
		</div>
		<div>
			invalid: <Values value={$configurations$.invalid} />
		</div>
	</div>
	<svelte:fragment slot="optionsSidebar">
		<Configurations />
	</svelte:fragment>
</Configurator>
