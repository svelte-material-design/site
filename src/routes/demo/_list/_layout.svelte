<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	appendLayoutPath(`list`);

</script>

<ModuleLayout module="list" title="List">
	<slot />
	<div slot="page">
		<Page
			{segment}
			options={[
				{ label: "List" },
				{
					label: "List Group",
					folder: "list-group",
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
