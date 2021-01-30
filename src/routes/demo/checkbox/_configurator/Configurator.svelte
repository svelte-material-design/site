<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { template, script } from "./code";
	import Configurations from "./Configurations.svelte";
	import type { CheckboxConfigurations } from "./types";
	import Preview from "./Preview.svelte";

	let configurations = {
		label: "label",
		ripple: true,
		accessibleTouch: true,
	} as CheckboxConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteScriptCode = script(configurations);
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
