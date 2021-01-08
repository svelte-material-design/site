<script lang="ts">
	import Content from "../Content.svelte";
	import Media from "../Media.svelte";
	import {
		AspectRatio,
		HorizontalLayout,
	} from "@svelte-material-design/core/card";

	export let showBodyTitle: boolean = false;
	export let showBodySubtitle: boolean = false;
	export let showBodyText: boolean = false;
	export let media: AspectRatio = undefined;
	export let showMediaContent: boolean = false;
	export let horizontalLayout: boolean = false;
</script>

{#if horizontalLayout}
	<HorizontalLayout>
		<Media aspectRatio={media} {showMediaContent} />
		<Content
			title={showBodyTitle ? 'Body title' : ''}
			subtitle={showBodySubtitle ? 'Body subtitle' : ''}
			text={showBodyText ? 'Body text' : ''} />
	</HorizontalLayout>
{:else}
	<Media aspectRatio={media} {showMediaContent} />
	<Content
		title={showBodyTitle ? 'Body title' : ''}
		subtitle={showBodySubtitle ? 'Body subtitle' : ''}
		text={showBodyText ? 'Body text' : ''} />
{/if}
