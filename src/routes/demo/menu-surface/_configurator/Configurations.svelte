<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import MenuSurfaceConfigurations from "src/components/configurator/smui-components/menu-surface/MenuSurfaceConfigurations.svelte";

	const { configurations$ } = getConfiguratorContext();
</script>

<Section>
	<MenuSurfaceConfigurations bind:configurations={$configurations$} />
</Section>
