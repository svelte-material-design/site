<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";

</script>

<div class="slots-headline-wrapper">
	<Typography class="slots-headline" variant="headline4">Slots</Typography>
</div>

<style lang="scss">
	.slots-headline-wrapper {
		display: contents;

		:global(.slots-headline) {
			margin-block-end: 0.2em;
		}
	}

</style>
