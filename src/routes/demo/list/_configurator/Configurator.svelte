<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Values } from "src/components/configurator/atoms";
	import { Configurations, Preview } from ".";
	import { ListConfigurations } from "./types";
	import { script, template } from "./code";

	let configurations = {
		items: [],
	} as ListConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteScriptCode = script(configurations);
	$: svelteCode = template(configurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview bind:configurations />
	</div>
	<div slot="values">
		{#if configurations.role !== "list"}
			value: <Values value={configurations.value} />
		{/if}
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte-fragment>
</Configurator>
