<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { LinearProgress } from "@smui/core/linear-progress";
	import SliderOption from "src/components/configurator/common-options/base/SliderOption.svelte";
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

<style lang="scss">
	[slot="preview"] {
		min-height: 10em;
		width: 80%;
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		<LinearProgress {reversed} {closed} {progress} {buffer} {ariaLabel} />
	</div>
	<div slot="optionsSidebar">
		<CommonProgressOptions bind:reversed bind:closed />
		<div />
		<div>
			<SliderOption
				label="Progress"
				bind:value={progress}
				max={1}
				step={0.1}
				precision={1} />
		</div>
		<div>
			<SliderOption
				label="Buffer"
				bind:value={buffer}
				max={1}
				step={0.1}
				precision={1} />
		</div>
	</div>
</Configurator>
