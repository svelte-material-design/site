<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";

</script>

<div class="tags-headline-wrapper">
	<Typography class="tags-headline" variant="headline4">
		Available <code>{"<Tags />"}</code>
	</Typography>
</div>

<style lang="scss">
	.tags-headline-wrapper {
		display: contents;

		:global(.tags-headline) {
			margin-block-end: 0.2em;
		}
	}

</style>
