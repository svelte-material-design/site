<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { scss, template, script } from "./code";
	import type { ButtonConfigurations } from "./types";
	import { Configurations, Preview } from ".";

	let configurations = {} as ButtonConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;
	let scssCode: string;

	$: svelteScriptCode = script(configurations);
	$: svelteCode = template(configurations);
	$: scssCode = scss(configurations);
</script>

<Configurator {svelteScriptCode} {svelteCode} {scssCode}>
	<div slot="preview">
		<Preview bind:configurations />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte-fragment>
</Configurator>
