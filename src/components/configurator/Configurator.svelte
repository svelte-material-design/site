<script lang="ts">
	import { Use } from "@smui/core/common/hooks";
	import { afterUpdate, onMount } from "svelte";
	import CodeSelector from "./CodeSelector.svelte";

	export let svelteCode: string;
	export let scssCode: string;

	let extraCodeHeight = 0; //em;
	let codeElement: HTMLDivElement;
	let emInPx: number;
	const minCodeEm = 14;

	onMount(() => {
		emInPx = parseFloat(getComputedStyle(codeElement?.parentElement).fontSize);
	});

	function handleWindowResize() {
		checkAndFixCodeHeight();
	}

	let checkAndFixCodeHeightTimeout: number;
	function checkAndFixCodeHeight() {
		clearTimeout(checkAndFixCodeHeightTimeout);
		checkAndFixCodeHeightTimeout = setTimeout(() => {
			const minCodeHeight = emInPx * minCodeEm;

			const realCodeHeight =
				extraCodeHeight !== 0
					? codeElement.clientHeight - extraCodeHeight * emInPx
					: codeElement.clientHeight;

			if (realCodeHeight < minCodeHeight) {
				extraCodeHeight = (minCodeHeight - realCodeHeight) / emInPx;
			} else {
				extraCodeHeight = 0;
			}
		}, 20);
	}

	afterUpdate(() => {
		checkAndFixCodeHeight();
	});
</script>

<style lang="scss">
	@use "src/styles/smui/_variables";
	$padding: 1em;
	$border: variables.$border-color 1px solid;

	.configurator {
		max-width: 80em;
		display: grid;
		grid-template:
			"preview options-sidebar" 1fr
			"code options-sidebar" 1fr
			/ 1fr minmax(200px, min-content);
		white-space: normal;
		border: $border;
		max-height: calc(80vh + var(--extra-code-height) - 64px);
	}

	.preview {
		grid-area: preview;
		padding: $padding;
		background-color: #efefef;
		border-right: $border;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.preview-slot {
			flex-grow: 1;
			align-items: center;
			display: flex;
		}

		.values {
			display: flex;
			align-self: flex-end;
		}
	}

	.code {
		grid-area: code;
		min-width: 0;
		min-height: 0;
		overflow: auto;

		:global(pre) {
			white-space: break-spaces;
		}
	}

	.options-sidebar {
		grid-area: options-sidebar;
		padding: $padding;

		> :global(.options-sidebar) {
			display: grid;
			grid-template: auto / minmax(150px, auto) minmax(150px, auto);
			gap: 0.6em;
			white-space: nowrap;
			width: max-content;

			> :global(div) {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
	}
</style>

<svelte:window on:resize={() => handleWindowResize()} />

<div class="configurator" style="--extra-code-height: {extraCodeHeight}em;">
	<div class="preview">
		<div class="preview-slot">
			<slot name="preview" />
		</div>
		{#if $$slots.values}
			<div class="values">
				<slot name="values" />
			</div>
		{/if}
	</div>
	<div class="options-sidebar">
		<slot name="optionsSidebar" />
	</div>
	<div class="code" bind:this={codeElement}>
		<CodeSelector svelte={svelteCode} scss={scssCode} />
	</div>
</div>
