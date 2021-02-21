<svelte:options immutable={true} />

<script lang="ts">
	import type { MenuSurfaceAnchorMargin } from "@svelte-material-design/core/menu-surface";
	import { InputField } from "@svelte-material-design/core/textfield";
	import { Typography } from "@svelte-material-design/core/typography";
	import { onMount } from "svelte";

	export let value: MenuSurfaceAnchorMargin;

	let left: number = 0;
	let top: number = 0;

	onMount(() => {
		handleChange();
	});

	function handleChange() {
		value = {
			left,
			top,
		};
	}
</script>

<div class="anchor-margin-option">
	<Typography variant="body2">Anchor margin (px)</Typography>
	<div>
		<InputField
			bind:value={top}
			class="anchor-margin-option__input"
			variant="outlined"
			type="number"
			density={-4}
			on:change={handleChange}
			on:change
		>
			<span slot="label">Top</span>
		</InputField>
		<InputField
			bind:value={left}
			class="anchor-margin-option__input"
			variant="outlined"
			type="number"
			density={-4}
			on:change={handleChange}
			on:change
		>
			<span slot="label">left</span>
		</InputField>
	</div>
</div>

<style lang="scss">
	.anchor-margin-option {
		grid-row: span 2;

		> div {
			display: flex;
			gap: 1em;
		}

		:global(.anchor-margin-option__input) {
			width: 5em;
		}
	}
</style>
