<script lang="ts">
	import { MDCMenuDistance } from "@smui/core/menu-surface";
	import { InputField } from "@smui/core/textfield";
	import { Typography } from "@svelte-material-ui-test/core/typography";

	export let value: MDCMenuDistance;

	let left: number;
	let right: number;
	let top: number;
	let bottom: number;

	function handleChange() {
		if (left || right || top || bottom) {
			value = {
				left,
				right,
				top,
				bottom,
			};
		} else {
			value = undefined;
		}
	}
</script>

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

<svelte:options immutable={true} />

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
				on:change={handleChange}>
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
				on:change={handleChange}>
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
				on:change={handleChange}>
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
				on:change={handleChange}>
				<span slot="label">Left</span>
			</InputField>
		</div>
	</div>
</div>
