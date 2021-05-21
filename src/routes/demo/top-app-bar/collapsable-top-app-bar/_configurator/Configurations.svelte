<svelte:options immutable={true} />

<script lang="ts">
	import type { TopAppBarColor } from "@svelte-material-design/core/top-app-bar";
	import { CommonTopAppBarConfigurations } from "../../_configurator/common";
	import { Checkbox } from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";

	export let color: TopAppBarColor = "primary";
	export let alwaysCollapsed: boolean = false;
	export let prominent: boolean = false;
	export let dense: boolean = false;

</script>

<Section>
	<CommonTopAppBarConfigurations bind:color bind:prominent bind:dense />
	<Checkbox bind:checked={alwaysCollapsed} label="Always collapsed" />
</Section>
