<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";

</script>

<div class="props-headline-wrapper">
	<Typography class="props-headline" variant="headline4">Props</Typography>
</div>

<style lang="scss">
	.props-headline-wrapper {
		display: contents;

		:global(.props-headline) {
			margin-block-end: 0.2em;
		}
	}

</style>
