<svelte:options immutable={true} />

<script lang="ts">
	import type { FabVariant, FabColor } from "@smui/core/fab";
	import { Configurator } from "src/components/configurator";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import { Configurations, Preview } from ".";
	import { script, template } from "./code";
	import type { FabConfigurations } from "../types";

	let show: boolean = true;
	let color: FabColor = "secondary";
	let variant: FabVariant = "regular";
	let ripple: boolean = true;
	let iconType: IconType = "material-icon";
	let accessibleTouch: boolean = false;

	let svelteScriptCode: string;
	let svelteCode: string;

	let fabConfigurations: FabConfigurations;
	$: fabConfigurations = {
		show,
		color,
		variant,
		ripple,
		iconType,
		accessibleTouch,
	};

	$: svelteScriptCode = script(fabConfigurations);
	$: svelteCode = template(fabConfigurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview {color} {variant} {show} {ripple} {accessibleTouch} {iconType} />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:accessibleTouch
			bind:ripple
			bind:show
			bind:color
			bind:variant
			bind:iconType
		/>
	</svelte-fragment>
</Configurator>
