<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Configurations, Preview } from ".";
	import { script, template } from "./code";
	import type { FabConfigurations } from "./types";

	let configurations = {} as FabConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteScriptCode = script(configurations);
	$: svelteCode = template(configurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview {configurations} />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte-fragment>
</Configurator>
