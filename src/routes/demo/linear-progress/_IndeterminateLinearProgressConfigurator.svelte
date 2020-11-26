<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { IndeterminateLinearProgress } from "@smui/core/linear-progress";
	import CommonProgressOptions from "./_CommonProgressOptions.svelte";

	let reversed: boolean;
	let closed: boolean;
	let ariaLabel: string;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "LinearProgress",
		props: [
			[reversed, "reversed"],
			[closed, "closed"],
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
		<IndeterminateLinearProgress {reversed} {closed} {ariaLabel} />
	</div>
	<div slot="optionsSidebar">
		<CommonProgressOptions bind:reversed bind:closed bind:ariaLabel />
	</div>
</Configurator>
