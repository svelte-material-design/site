<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Configurations, Preview } from ".";
	import { template, script } from "./code";
	import type { IconButtonConfigurations } from "./types";

	let configurations = {} as IconButtonConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteScriptCode = script();
	$: svelteCode = template(configurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview bind:configurations />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte-fragment>
</Configurator>
