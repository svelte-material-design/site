<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import PaperOptions from "./_PaperOptions.svelte";
	import { SelectionType } from "@smui/core/common/hoc";
	import { Paper } from "@smui/core/paper";

	export let selectionType: SelectionType;

	//#region code
	let svelteCode: string = "";
	let scssCode: string = "";
	//#endregion
</script>

<svelte:options immutable={true} />

<div class="configurator">
	<Configurator {svelteCode} {scssCode}>
		<svelte-fragment slot="preview">
			<Paper />
		</svelte-fragment>
		<div slot="optionsSidebar">
			<PaperOptions bind:selectionType />
		</div>
	</Configurator>
</div>
