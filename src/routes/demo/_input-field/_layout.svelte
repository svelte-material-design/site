<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/components/layout/module-layout/context";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";
	import { ModuleLayout, Page } from "src/components/layout/module-layout";

	export let segment: string;

	appendLayoutPath(`input-field`);

</script>

<ModuleLayout module="input-field" title="InputField">
	<slot />
	<div slot="page">
		<Page
			{segment}
			options={[
				{ label: "Input field" },
				{
					label: "Text area",
					folder: "text-area",
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
