<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { Configurator } from "./_configurator";
	import { Page } from "src/components/layout/module-layout";

	export let segment: string;

	appendLayoutPath("button");

</script>

<Page {segment}>
	<Configurator />
</Page>
