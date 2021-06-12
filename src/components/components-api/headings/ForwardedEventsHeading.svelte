<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";

</script>

<div class="fwd-events-headline-wrapper">
	<Typography class="fwd-events-headline" variant="headline6"
		>Forwarded HTML events</Typography
	>
</div>

<style lang="scss">
	.fwd-events-headline-wrapper {
		display: contents;

		:global(.fwd-events-headline) {
			margin-block-end: 0.2em;
		}
	}

</style>
