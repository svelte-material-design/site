<script lang="ts">
	import {
		PrimaryAction,
		AspectRatio,
	} from "@svelte-material-design/core/card";
	import BodyContent from "./BodyContent.svelte";

	export let bodyTitle: string = undefined;
	export let bodySubtitle: string = undefined;
	export let bodyText: string = undefined;
	export let media: AspectRatio = undefined;
	export let mediaContent: string = undefined;
	export let horizontalLayout: boolean = false;
	export let clickableBody: boolean = false;
	export let primaryActionRipple: boolean = false;
</script>

{#if bodyTitle || bodySubtitle || bodyText || media || mediaContent}
	{#if !clickableBody}
		<BodyContent
			{bodyTitle}
			{bodySubtitle}
			{bodyText}
			{media}
			{mediaContent}
			{horizontalLayout} />
	{:else}
		<PrimaryAction ripple={primaryActionRipple}>
			<BodyContent
				{bodyTitle}
				{bodySubtitle}
				{bodyText}
				{media}
				{mediaContent}
				{horizontalLayout} />
		</PrimaryAction>
	{/if}
{/if}
