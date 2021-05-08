<svelte:options immutable={true} />

<script lang="ts">
	import classes from "./index.module.scss";
	import { Media, MediaContent } from "@svelte-material-design/core/card";
	import type { AspectRatio } from "@svelte-material-design/core/card";
	import { Typography } from "@svelte-material-design/core/typography";

	export let mediaContent: string;
	export let aspectRatio: AspectRatio;
</script>

{#if aspectRatio}
	<Media
		class={aspectRatio === "16x9"
			? classes["card-media-16x9"]
			: classes["card-media-square"]}
		{aspectRatio}
	>
		{#if mediaContent}
			<MediaContent>
				<Typography
					variant="headline6"
					style="color: white; margin: 1em 0em 0em 1em;"
				>
					{mediaContent}
				</Typography>
			</MediaContent>
		{/if}
	</Media>
{/if}
