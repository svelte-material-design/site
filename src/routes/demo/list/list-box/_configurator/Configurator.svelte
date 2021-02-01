<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Values } from "src/components/configurator/atoms";
	import { Configurations, Preview } from ".";
	import { ListBoxConfigurations } from "./types";

	let configurations = {
		items: [],
	} as ListBoxConfigurations;

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
	<div slot="values">
		value: <Values value={configurations.value} />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations bind:configurations />
	</svelte-fragment>
</Configurator>
