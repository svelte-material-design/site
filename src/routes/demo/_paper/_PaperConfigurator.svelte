<svelte:options immutable={true} />

<script lang="ts">
	import { Configurator } from "src/components/configurator";
	import PaperOptions from "./_PaperOptions.svelte";
	import type { SelectionType } from "@svelte-material-design/core/common/hoc";
	import { Paper } from "@svelte-material-design/core/paper";

	export let selectionType: SelectionType;

	//#region code
	let svelteCode: string = "";
	let scssCode: string = "";
	//#endregion

</script>

<div class="configurator">
	<Configurator {svelteCode} {scssCode}>
		<svelte:fragment slot="preview">
			<Paper />
		</svelte:fragment>
		<div slot="optionsSidebar">
			<PaperOptions bind:selectionType />
		</div>
	</Configurator>
</div>
