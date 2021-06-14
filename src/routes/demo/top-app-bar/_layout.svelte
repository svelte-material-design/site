<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath } from "src/components/layout/module-layout/context";
	import { SubComponents } from "./api/_api";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

</script>

<ModuleLayout module="top-app-bar" path="top-app-bar" title="Top App Bar">
	<slot />
	<div slot="page">
		<Page
			{segment}
			options={[
				{ label: "Top App Bar" },
				{
					label: "Collapsable Top App Bar",
					folder: "collapsable-top-app-bar",
				},
			]}
		>
			<div slot="main">
				<Configurator />
				<SubComponents />
				<slot />
			</div>
			<slot />
		</Page>
	</div>
</ModuleLayout>
