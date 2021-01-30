<svelte:options immutable={true} />

<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	setLayoutPath(`${getLayoutPath()}/radio`);
</script>

<ModuleLayout module="radio" title="Radio">
	<slot />
	<div slot="page">
		<Page
			{segment}
			options={[
				{ label: "Radio" },
				{
					label: "Radio Group",
					folder: "radio-group",
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
