<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import Configurations from "./Configurations.svelte";
	import type { TopAppBarConfigurations } from "./types";
	import { script, template } from "./code";
	import type {
		TopAppBarVariant,
		TopAppBarColor,
	} from "@svelte-material-design/core/top-app-bar";

	let variant: TopAppBarVariant = "standard";
	let color: TopAppBarColor = "primary";
	let prominent: boolean = false;
	let dense: boolean = false;

	let cardConfigurations: TopAppBarConfigurations;
	$: cardConfigurations = {
		variant,
		prominent,
		dense,
		color,
	};

	let svelteScriptCode: string;
	let svelteCode: string;

	$: svelteCode = template(cardConfigurations);
	$: svelteScriptCode = script(cardConfigurations);

</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview" style="width: 100%; height: 15em;">
		<IFrame title="Top App Bar preview" props={cardConfigurations} />
	</div>
	<svelte:fragment slot="optionsSidebar">
		<Configurations bind:variant bind:prominent bind:dense bind:color />
	</svelte:fragment>
</Configurator>
