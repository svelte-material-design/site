<svelte:options immutable={true} />

<script lang="ts">
	import {
		Tab,
		Label,
		Content,
		TabIndicator,
		Icon as TabIcon,
	} from "@svelte-material-design/core/tab-bar";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import { tick } from "svelte";
	import type { TabConfigurations } from "../../types";

	export let configurations: TabConfigurations;

	async function handleChange() {
		await tick();
		configurations = { ...configurations };
	}
</script>

<Tab
	bind:selected={configurations.selected}
	value={configurations.value}
	ripple={configurations.ripple}
	stacked={configurations.stacked}
	useMinWidth={configurations.useMinWidth}
	on:change={handleChange}
	on:change
>
	<Content>
		{#if configurations.leadingIcon}
			<LeadingIcon type={configurations.leadingIcon} component={TabIcon} />
		{/if}
		<Label>{configurations.label}</Label>
		{#if configurations.trailingIcon}
			<TrailingIcon type={configurations.trailingIcon} component={TabIcon} />
		{/if}
		{#if configurations.tabIndicatorPosition === "label"}
			<TabIndicator />
		{/if}
	</Content>
	{#if configurations.tabIndicatorPosition === "tab"}
		<TabIndicator />
	{/if}
</Tab>
