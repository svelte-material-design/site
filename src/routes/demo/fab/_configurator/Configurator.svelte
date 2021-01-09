<script lang="ts">
	import { Fab, Icon, Label, FabVariant, FabColor } from "@smui/core/fab";
	import { Configurator } from "src/components/configurator";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import { LeadingIcon } from "src/components/configurator/smui-components/icons";
	import Configurations from "./Configurations.svelte";
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
		<Fab {color} {variant} {show} {ripple} {accessibleTouch}>
			<LeadingIcon type={iconType} component={Icon} />
			{#if variant === 'extended'}
				<Label>Label</Label>
			{/if}
		</Fab>
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:accessibleTouch
			bind:ripple
			bind:show
			bind:color
			bind:variant
			bind:iconType />
	</svelte-fragment>
</Configurator>
