<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";

</script>

<div class="events-headline-wrapper">
	<Typography class="events-headline" variant="headline4">Events</Typography>
</div>

<style lang="scss">
	.events-headline-wrapper {
		display: contents;

		:global(.events-headline) {
			margin-block-end: 0.2em;
		}
	}

</style>
