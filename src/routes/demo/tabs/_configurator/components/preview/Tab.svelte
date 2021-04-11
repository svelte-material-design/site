<svelte:options immutable={true} />

<script lang="ts">
	import {
		Tab,
		Label,
		Content,
		TabIndicator,
		Icon as TabIcon,
	} from "@smui/core/tab-bar";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import type { TabConfigurations } from "../../types";

	export let configurations: TabConfigurations;

	function handleSelected() {
		configurations = { ...configurations };
	}
</script>

<Tab
	bind:active={configurations.active}
	key={configurations.key}
	ripple={configurations.ripple}
	stacked={configurations.stacked}
	useMinWidth={configurations.useMinWidth}
	on:selected={handleSelected}
	on:selected
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
