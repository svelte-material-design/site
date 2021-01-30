<svelte:options immutable={true} />

<script lang="ts">
	import type { IconButtonColor } from "@smui/core/icon-button";
	import { Configurator } from "src/components/configurator";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import { Configurations, Preview } from ".";
	import { IconButtonConfigurations } from "./types";
	import { template, script } from "./code";

	let disabled: boolean = false;
	let ripple: boolean = true;
	let color: IconButtonColor = "inherit";
	let link: boolean = false;
	let accessibleTouch: boolean = false;
	let iconType: IconType = "material-icon";

	let svelteScriptCode: string;
	let svelteCode: string;

	let iconButtonConfigurations: IconButtonConfigurations;
	$: iconButtonConfigurations = {
		disabled,
		ripple,
		color,
		link,
		iconType,
	};

	$: svelteScriptCode = script();
	$: svelteCode = template(iconButtonConfigurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview {color} {disabled} {ripple} {accessibleTouch} {link} {iconType} />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:color
			bind:disabled
			bind:ripple
			bind:link
			bind:iconType
		/>
	</svelte-fragment>
</Configurator>
