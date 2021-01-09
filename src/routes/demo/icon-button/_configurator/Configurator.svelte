<script lang="ts">
	import { IconButton, IconButtonColor, Icon } from "@smui/core/icon-button";
	import { Configurator } from "src/components/configurator";
	import {
		IconType,
		Icon as IconPreview,
	} from "src/components/configurator/smui-components/icons";
	import Configurations from "./Configurations.svelte";
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
		<IconButton
			title="button"
			{color}
			{disabled}
			{ripple}
			{accessibleTouch}
			href={link ? 'javascript:void(0)' : undefined}>
			<IconPreview component={Icon} type={iconType} />
		</IconButton>
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations
			bind:color
			bind:disabled
			bind:ripple
			bind:link
			bind:iconType />
	</svelte-fragment>
</Configurator>
