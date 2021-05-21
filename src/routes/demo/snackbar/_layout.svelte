<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	setLayoutPath(`${getLayoutPath()}/snackbar`);

</script>

<ModuleLayout module="snackbar" title="Snackbar">
	<slot />
	<div slot="page">
		<Page {segment}>
			<div slot="main">
				<Configurator />
				<slot />
			</div>
			<slot />
		</Page>
	</div>
</ModuleLayout>
