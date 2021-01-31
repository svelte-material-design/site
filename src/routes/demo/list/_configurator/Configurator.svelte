<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Configurations, Preview } from ".";
	import { ListConfigurations } from "./types";

	let configurations = {
		items: [],
	} as ListConfigurations;

	let svelteScriptCode: string;
	let svelteCode: string;

	// let buttonConfigurations: ButtonConfigurations;
	// $: buttonConfigurations = {
	// 	disabled,
	// 	ripple,
	// 	variant,
	// 	link,
	// 	color,
	// 	iconOnly,
	// 	leadingIcon,
	// 	trailingIcon,
	// 	customStyle,
	// 	accessibleTouch,
	// };

	// $: svelteScriptCode = script(buttonConfigurations);
	// $: svelteCode = template(buttonConfigurations);
</script>

<Configurator {svelteScriptCode} {svelteCode}>
	<div slot="preview">
		<Preview bind:configurations />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte-fragment>
</Configurator>
