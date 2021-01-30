<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	setLayoutPath(`${getLayoutPath()}/checkbox`);
</script>

<ModuleLayout module="checkbox" title="Checkbox">
	<slot />
	<div slot="page">
		<Page
			{segment}
			options={[
				{ label: "Checkbox" },
				{
					label: "Checkbox Group",
					folder: "checkbox-group",
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
