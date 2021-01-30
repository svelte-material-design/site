<svelte:options immutable={true} />

<script lang="ts">
	import type { IconButtonColor } from "@svelte-material-design/core/icon-button";
	import { IconButton, Icon } from "@svelte-material-design/core/icon-button";
	import {
		Icon as IconPreview,
	} from "src/components/configurator/smui-components/icons";
	import type {
		IconType,
	} from "src/components/configurator/smui-components/icons";

	export let disabled: boolean = false;
	export let ripple: boolean = true;
	export let color: IconButtonColor = "inherit";
	export let link: boolean = false;
	export let accessibleTouch: boolean = false;
	export let iconType: IconType = "material-icon";
</script>

<IconButton
	title="button"
	{color}
	{disabled}
	{ripple}
	{accessibleTouch}
	href={link ? "javascript:void(0)" : undefined}
>
	<IconPreview component={Icon} type={iconType} />
</IconButton>
