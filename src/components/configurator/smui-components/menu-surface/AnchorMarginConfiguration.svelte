<svelte:options immutable={true} />

<script lang="ts">
	import type { AnchorMargin } from "@svelte-material-design/core/menu-surface";
	import { InputField } from "@svelte-material-design/core/textfield";
	import { Typography } from "@svelte-material-design/core/typography";
	import { onMount } from "svelte";

	export let value: AnchorMargin;

	let left: number = 0;
	let right: number = 0;
	let top: number = 0;
	let bottom: number = 0;

	onMount(() => {
		handleChange();
	});

	function handleChange() {
		value = {
			left,
			right,
			top,
			bottom,
		};
	}
</script>

<div class="anchor-margin-option">
	<Typography variant="body2">Anchor margin (px)</Typography>
	<div>
		<div class="area-top">
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
		</div>
		<div class="area-right">
			<InputField
				bind:value={right}
				class="anchor-margin-option__input"
				variant="outlined"
				type="number"
				density={-4}
				on:change={handleChange}
				on:change
			>
				<span slot="label">Right</span>
			</InputField>
		</div>
		<div class="area-bottom">
			<InputField
				bind:value={bottom}
				class="anchor-margin-option__input"
				variant="outlined"
				type="number"
				density={-4}
				on:change={handleChange}
				on:change
			>
				<span slot="label">Bottom</span>
			</InputField>
		</div>
		<div class="area-left">
			<InputField
				bind:value={left}
				class="anchor-margin-option__input"
				variant="outlined"
				type="number"
				density={-4}
				on:change={handleChange}
				on:change
			>
				<span slot="label">Left</span>
			</InputField>
		</div>
	</div>
</div>

<style lang="scss">
	.anchor-margin-option {
		grid-row: span 4;
		grid-column: span 2;

		> div {
			display: grid !important;
			grid-template:
				". top top ."
				"left left right right"
				". bottom bottom .";
			gap: 1em;
			grid-template-columns: repeat(4, min-content);
		}

		.area-top {
			grid-area: top;
		}

		.area-right {
			grid-area: right;
		}

		.area-bottom {
			grid-area: bottom;
		}

		.area-left {
			grid-area: left;
		}

		:global(.anchor-margin-option__input) {
			width: 5em;
		}
	}
</style>
