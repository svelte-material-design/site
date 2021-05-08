<svelte:options immutable={true} />

<script lang="ts">
	import { PrimaryAction } from "@svelte-material-design/core/card";
	import BodyContent from "./BodyContent.svelte";
	import type { CardConfigurations } from "../types";

	export let configurations: CardConfigurations;
</script>

{#if configurations.bodyTitle || configurations.bodySubtitle || configurations.bodyText || configurations.media || configurations.mediaContent}
	{#if !configurations.clickableBody}
		<BodyContent {configurations} />
	{:else}
		<PrimaryAction ripple={configurations.primaryActionRipple}>
			<BodyContent {configurations} />
		</PrimaryAction>
	{/if}
{/if}
