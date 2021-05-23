<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	appendLayoutPath(`linear-progress`);

</script>

<ModuleLayout module="linea-progress" title="Linear Progress">
	<slot />
	<div slot="page">
		<Page
			{segment}
			options={[
				{
					label: "Linear Progress",
				},
				{
					label: "Indeterminate Linear Progress",
					folder: "indeterminate-linear-progress",
				},
			]}
		>
			<div slot="main">
				<Configurator />
				<slot />
			</div>
			<slot />
		</Page>
	</div>
</ModuleLayout>
