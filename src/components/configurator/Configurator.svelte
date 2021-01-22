<svelte:options immutable={true} />

<script lang="ts">
	import { afterUpdate, onMount } from "svelte";
	import CodeSelector from "./CodeSelector.svelte";
	import { source } from "common-tags";

	export let svelteScriptCode: string = undefined;
	export let svelteCode: string;
	export let scssCode: string;

	let extraCodeHeight = 0; //em;
	let codeElement: HTMLDivElement;
	let emInPx: number;
	const minCodeEm = 14;

	const allowedErrorMargin = 1;
	let minCodeHeight: number;

	onMount(() => {
		emInPx = parseFloat(getComputedStyle(codeElement?.parentElement).fontSize);
		minCodeHeight = emInPx * minCodeEm;
	});

	function handleWindowResize() {
		checkAndFixCodeHeight();
	}

	let checkAndFixCodeHeightTimeout: number;
	function checkAndFixCodeHeight() {
		clearTimeout(checkAndFixCodeHeightTimeout);

		if (codeElement.clientHeight < minCodeHeight + allowedErrorMargin) {
			checkAndFixCodeHeightTimeout = setTimeout(() => {
				const realCodeHeight =
					extraCodeHeight !== 0
						? codeElement.clientHeight - extraCodeHeight * emInPx
						: codeElement.clientHeight;

				if (realCodeHeight < minCodeHeight + allowedErrorMargin) {
					extraCodeHeight = (minCodeHeight - realCodeHeight) / emInPx;
				} else {
					extraCodeHeight = 0;
				}
			}, 20);
		}
	}

	afterUpdate(() => {
		if (codeElement.clientHeight < minCodeHeight && !extraCodeHeight) {
			checkAndFixCodeHeight();
		}
	});

	function getSvelteCode(...deps) {
		if (svelteScriptCode) {
			const res = source`
				${svelteScriptCode.trim()}

				${svelteCode.trim()}
			`;
			return res;
		} else if (svelteCode) {
			return source(svelteCode);
		}
	}
</script>

<svelte:window on:resize={() => handleWindowResize()} />

<div class="configurator" style="--extra-code-height: {extraCodeHeight}em;">
	<div class="configurator__preview">
		<slot name="preview" class="preview-slot" />
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
		<CodeSelector
			svelte={getSvelteCode(svelteCode, svelteScriptCode)}
			scss={scssCode}
		/>
	</div>
</div>

<style lang="scss">
	@use "src/styles/smui/_variables";
	$padding: 1em;
	$border: variables.$border-color 1px solid;

	.configurator {
		display: grid;
		grid-template:
			"preview options-sidebar" max-content
			"code options-sidebar" 1fr /
			1fr minmax(max(300px, 40%), min-content);
		white-space: normal;
		border: $border;
		max-height: calc(80vh + var(--extra-code-height) - 64px);
		margin-bottom: 1em;
	}

	.configurator__preview {
		grid-area: preview;
		padding: $padding;
		background-color: #efefef;
		border-right: $border;
		display: flex;
		flex-direction: column;
		overflow: auto;
		max-height: 60vh;
		align-items: center;

		.values {
			margin-top: 1em;
			display: flex;
			align-self: flex-end;
		}
	}

	.code {
		grid-area: code;
		min-width: 0;
		min-height: 0;
		overflow: auto;
		background: #1e1e1e;
	}

	.options-sidebar {
		grid-area: options-sidebar;
		padding: $padding;
		overflow: overlay;
	}

	.preview-slot {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
</style>
