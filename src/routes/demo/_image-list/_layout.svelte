<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	appendLayoutPath(`image-list`);

</script>

<ModuleLayout module="image-list" title="Image List">
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
