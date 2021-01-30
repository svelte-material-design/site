<svelte:options immutable={true} />

<script lang="typescript">
	import type { IconButtonColor } from "@svelte-material-design/core/icon-button-toggle";
	import { Configurator } from "src/components/configurator";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import { template, script } from "./code";
	import { Configurations, Preview } from ".";
	import type { IconButtonToggleConfigurations } from "./types";

	let disabled: boolean = false;
	let ripple: boolean = true;
	let iconType: IconType = "material-icon";
	let active: boolean = false;
	let color: IconButtonColor = "inherit";

	let svelteScriptCode: string;
	let svelteCode: string;

	let iconButtonConfigurations: IconButtonToggleConfigurations;
	$: iconButtonConfigurations = {
		disabled,
		ripple,
		color,
		iconType,
	};

	$: svelteScriptCode = script();
	$: svelteCode = template(iconButtonConfigurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview bind:active {disabled} {ripple} {color} {iconType} />
	</div>
	<div slot="values">active: {active}</div>
	<svelte-fragment slot="optionsSidebar" class="options-sidebar">
		<Configurations bind:color bind:disabled bind:ripple bind:iconType />
	</svelte-fragment>
</Configurator>
