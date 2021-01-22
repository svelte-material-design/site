<svelte:options immutable={true} />

<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { LinearProgress } from "@smui/core/linear-progress";
	import { Slider } from "src/components/configurator/common-options/base";
	import CommonProgressOptions from "./_CommonProgressOptions.svelte";

	let reversed: boolean;
	let closed: boolean;
	let progress: number = 0.5;
	let buffer: number = 1;
	let ariaLabel: string;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "LinearProgress",
		props: [
			[reversed, "reversed"],
			[closed, "closed"],
			[progress, `progress={${progress}}`],
			[buffer, `buffer={${buffer}}`],
			[ariaLabel, `ariaLabel="${ariaLabel}"`],
		],
	});
</script>

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		<LinearProgress {reversed} {closed} {progress} {buffer} {ariaLabel} />
	</div>
	<div slot="optionsSidebar">
		<CommonProgressOptions bind:reversed bind:closed />
		<div />
		<div>
			<Slider
				label="Progress"
				bind:value={progress}
				max={1}
				step={0.1}
				precision={1}
			/>
		</div>
		<div>
			<Slider
				label="Buffer"
				bind:value={buffer}
				max={1}
				step={0.1}
				precision={1}
			/>
		</div>
	</div>
</Configurator>

<style lang="scss">
	[slot="preview"] {
		min-height: 10em;
		width: 80%;
	}
</style>
