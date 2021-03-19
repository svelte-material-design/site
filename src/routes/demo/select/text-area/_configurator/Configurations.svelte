<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import {
		BaseInputConfigurations,
		BaseInputFieldConfigurations,
	} from "src/components/configurator/smui-components/input";

	const { configurations$ } = getConfiguratorContext();

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<BaseInputFieldConfigurations bind:configurations={$configurations$} />
<Section>
	<Checkbox
		label="Use internal counter"
		bind:checked={$configurations$.useInternalCounter}
		disabled={!$configurations$.characterCounter}
		on:change={updateInstance}
	/>
</Section>
<BaseInputConfigurations bind:configurations={$configurations$} />
<Section>
	<Checkbox
		label="Resizable"
		bind:checked={$configurations$.resizable}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Cols"
		checked={!!$configurations$.cols}
		on:change={(e) => {
			$configurations$.cols = e.detail.checked ? 30 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Rows"
		checked={!!$configurations$.rows}
		on:change={(e) => {
			$configurations$.rows = e.detail.checked ? 3 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Hard wrap"
		checked={!!$configurations$.wrap}
		on:change={(e) => {
			$configurations$.wrap = e.detail.checked ? "hard" : undefined;
			updateInstance();
		}}
	/>
</Section>
