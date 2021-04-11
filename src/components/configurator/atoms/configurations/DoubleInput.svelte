<svelte:options immutable={true} />

<script lang="ts">
	import {
		InputField,
		Input,
		Content,
	} from "@svelte-material-design/core/textfield";
	import { Typography } from "@svelte-material-design/core/typography";

	export let value1: number = 0;
	export let value2: number = 0;
	export let disabled: boolean;
</script>

<div class="anchor-margin-option">
	<slot name="title">
		<Typography variant="body2">Anchor margin (px)</Typography>
	</slot>
	<div>
		<InputField
			bind:value={value1}
			class="anchor-margin-option__input"
			variant="outlined"
			density={-4}
			{disabled}
			on:change
		>
			<Content>
				<slot name="label1" slot="label">Top</slot>
				<Input type="number" />
			</Content>
		</InputField>
		<InputField
			bind:value={value2}
			class="anchor-margin-option__input"
			variant="outlined"
			density={-4}
			{disabled}
			on:change
		>
			<Content>
				<slot name="label2" slot="label">Left</slot>
				<Input type="number" />
			</Content>
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
