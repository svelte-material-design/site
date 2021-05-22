<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/contexts";
	import { Configurator } from "./_configurator";
	import { Page } from "src/components/layout/module-layout";

	export let segment: string;

	appendLayoutPath("button");

</script>

<Page {segment}>
	<div slot="main">
		<Configurator />
	</div>
</Page>
