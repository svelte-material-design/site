<svelte:options immutable={true} />

<script lang="typescript">
	import { Configurator } from "src/components/configurator";
	import { template, script } from "./code";
	import { Configurations, Preview } from ".";
	import type { IconButtonToggleConfigurations } from "./types";

	let configurations = {} as IconButtonToggleConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteScriptCode = script();
	$: svelteCode = template(configurations);

</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview bind:configurations />
	</div>
	<div slot="values">active: {configurations.active}</div>
	<svelte:fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte:fragment>
</Configurator>
