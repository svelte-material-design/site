<script lang="ts">
	import { Cell } from "../common/table";
</script>

<style lang="scss">
	.description {
		:global(code) {
			position: relative;
			padding: 0 0.2em;
			white-space: nowrap;

			&:after {
				content: "";
				position: absolute;
				opacity: 0.1;
				background-color: var(--mdc-theme-primary);
				width: 100%;
				height: 100%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
</style>

<Cell>
	<span class="description"><slot /></span>
</Cell>
