<script lang="ts">
	import classes from "./index.module.scss";
	import { Media, MediaContent, AspectRatio } from "@smui/core/card";
	import { Typography } from "@smui/core/typography";

	export let showMediaContent: boolean;
	export let aspectRatio: AspectRatio;
</script>

{#if aspectRatio}
	<Media
		class={aspectRatio === '16x9' ? classes['card-media-16x9'] : classes['card-media-square']}
		{aspectRatio}>
		{#if showMediaContent}
			<MediaContent>
				<Typography
					variant="headline6"
					style="color: white; margin: 1em 0em 0em 1em;">
					Card media content
				</Typography>
			</MediaContent>
		{/if}
	</Media>
{/if}
