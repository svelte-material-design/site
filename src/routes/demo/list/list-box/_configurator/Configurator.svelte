<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import { Values } from "src/components/configurator/atoms";
	import { Configurations, Preview } from ".";
	import {
		createConfiguratorStore,
		setConfiguratorContext,
	} from "./ConfiguratorContext";

	const context$ = createConfiguratorStore();
	setConfiguratorContext(context$);

	const { configurations$ } = context$;

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
		<Preview />
	</div>
	<div slot="values">
		value: <Values value={$configurations$.value} />
	</div>
	<svelte-fragment slot="optionsSidebar">
		<Configurations />
	</svelte-fragment>
</Configurator>
