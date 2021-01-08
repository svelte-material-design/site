<script lang="ts">
	import Content from "../Content.svelte";
	import Media from "../Media.svelte";
	import {
		AspectRatio,
		HorizontalLayout,
	} from "@svelte-material-design/core/card";

	export let bodyTitle: string = undefined;
	export let bodySubtitle: string = undefined;
	export let bodyText: string = undefined;
	export let media: AspectRatio = undefined;
	export let mediaContent: string = undefined;
	export let horizontalLayout: boolean = false;
</script>

{#if horizontalLayout}
	<HorizontalLayout>
		<Media aspectRatio={media} {mediaContent} />
		<Content title={bodyTitle} subtitle={bodySubtitle} text={bodyText} />
	</HorizontalLayout>
{:else}
	<Media aspectRatio={media} {mediaContent} />
	<Content title={bodyTitle} subtitle={bodySubtitle} text={bodyText} />
{/if}
