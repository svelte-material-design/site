<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { CommonProgressOptions } from "../../_configurator/components";

	const { configurations$ } = getConfiguratorContext();

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<CommonProgressOptions
		bind:configurations={$configurations$}
		on:change={updateInstance}
	/>
</Section>
