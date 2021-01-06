<script lang="ts">
	import { IconButton, IconButtonColor, Icon } from "@smui/core/icon-button";
	import { Configurator } from "src/components/configurator";
	import {
		IconType,
		Icon as IconPreview,
	} from "src/components/configurator/smui-components/icons";
	import IconButtonConfigurations from "./IconButtonConfigurations.svelte";
	import { IconButtonConfigurations as IconButtonConfigurationsProps } from "../types";
	import { template, script } from "./code";

	let disabled: boolean = false;
	let ripple: boolean = true;
	let color: IconButtonColor = undefined;
	let link: boolean = false;
	let iconType: IconType = "material-icon";

	let svelteScriptCode: string;
	let svelteCode: string;

	let iconButtonConfigurations: IconButtonConfigurationsProps;
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
			href={link ? 'javascript:void(0)' : undefined}>
			<IconPreview component={Icon} type={iconType} />
		</IconButton>
	</div>
	<div slot="optionsSidebar">
		<IconButtonConfigurations
			bind:color
			bind:disabled
			bind:ripple
			bind:link
			bind:iconType />
	</div>
</Configurator>
