<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Configurations, Preview } from ".";
	import type { CardConfigurations } from "./types";
	import { script, template, scss } from "./code";

	let configurations = {} as CardConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = template(configurations);
	$: svelteScriptCode = script(configurations);
	$: scssCode = scss(configurations);
</script>

<Configurator {svelteScriptCode} {svelteCode} {scssCode}>
	<div slot="preview">
		<Preview {configurations} />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte-fragment>
</Configurator>
