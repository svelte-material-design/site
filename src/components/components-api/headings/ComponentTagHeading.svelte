<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Tag } from "src/components/components-api/common";

</script>

<div class="components-tag-heading-wrapper">
	<Typography class="title" variant="headline3">
		<Tag>
			<slot />
		</Tag>
		<span>API</span>
	</Typography>
</div>

<style lang="scss">
	.components-tag-heading-wrapper {
		:global(.title span) {
			color: var(--mdc-theme-text-hint-on-light);
		}
	}

</style>
