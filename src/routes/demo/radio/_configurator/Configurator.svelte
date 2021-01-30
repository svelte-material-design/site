<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { template, script } from "./code";
	import Configurations from "./Configurations.svelte";
	import type { RadioConfigurations } from "./types";
	import Preview from "./Preview.svelte";

	let label: string = "Label";
	let checked: boolean;
	let ripple: boolean = true;
	let accessibleTouch: boolean = true;
	let required: boolean;
	let disabled: boolean;
	let readonly: boolean;

	let svelteScriptCode: string;
	let svelteCode: string;

	let configurations: RadioConfigurations;
	$: configurations = {
		checked,
		ripple,
		accessibleTouch,
		required,
		disabled,
		readonly,
		label,
	};

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
