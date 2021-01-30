<svelte:options immutable={true} />

<script lang="ts">
	import Content from "../Content.svelte";
	import Media from "../Media.svelte";
	import { HorizontalLayout } from "@svelte-material-design/core/card";
	import type { CardConfigurations } from "../types";

	export let configurations: CardConfigurations;
</script>

{#if configurations.horizontalLayout}
	<HorizontalLayout>
		<Media
			aspectRatio={configurations.media}
			mediaContent={configurations.mediaContent}
		/>
		<Content
			title={configurations.bodyTitle}
			subtitle={configurations.bodySubtitle}
			text={configurations.bodyText}
		/>
	</HorizontalLayout>
{:else}
	<Media
		aspectRatio={configurations.media}
		mediaContent={configurations.mediaContent}
	/>
	<Content
		title={configurations.bodyTitle}
		subtitle={configurations.bodySubtitle}
		text={configurations.bodyText}
	/>
{/if}
