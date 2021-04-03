<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	setLayoutPath(`${getLayoutPath()}/drawer`);
</script>

<ModuleLayout module="drawer" title="Drawer">
	<slot />
	<div slot="page">
		<Page {segment}>
			<div slot="main">
				<Configurator />
				<SubComponents />
				<slot />
			</div>
			<slot />
		</Page>
	</div>
</ModuleLayout>
