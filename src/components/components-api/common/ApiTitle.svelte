<script lang="ts">
	import { Tag } from "src/components/components-api/common";
</script>

<style lang="scss">
	.title {
		margin-top: 1em;
		font-size: 2rem;

		span {
			color: var(--mdc-theme-text-hint-on-light);
		}
	}
</style>

<div class="title">
	<Tag>
		<slot />
	</Tag>
	<span>API</span>
</div>
