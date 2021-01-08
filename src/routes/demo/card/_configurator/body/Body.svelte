<script lang="ts">
	import {
		PrimaryAction,
		AspectRatio,
	} from "@svelte-material-design/core/card";
	import BodyContent from "./BodyContent.svelte";

	export let showBodyTitle: boolean = false;
	export let showBodySubtitle: boolean = false;
	export let showBodyText: boolean = false;
	export let media: AspectRatio = undefined;
	export let showMediaContent: boolean = false;
	export let horizontalLayout: boolean = false;
	export let clickableBody: boolean = false;
</script>

{#if showBodyTitle || showBodySubtitle || showBodyText || media || showMediaContent}
	{#if !clickableBody}
		<BodyContent
			{showBodyTitle}
			{showBodySubtitle}
			{showBodyText}
			{media}
			{showMediaContent}
			{horizontalLayout} />
	{:else}
		<PrimaryAction>
			<BodyContent
				{showBodyTitle}
				{showBodySubtitle}
				{showBodyText}
				{media}
				{showMediaContent}
				{horizontalLayout} />
		</PrimaryAction>
	{/if}
{/if}
