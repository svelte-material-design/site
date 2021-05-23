<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	appendLayoutPath(`switch`);

</script>

<ModuleLayout module="switch" title="Switch">
	<slot />
	<div slot="page">
		<Page
			{segment}
			options={[
				{ label: "Switch" },
				{
					label: "Switch Group",
					folder: "switch-group",
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
