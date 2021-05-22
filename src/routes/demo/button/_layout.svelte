<svelte:options immutable={true} />

<script lang="ts">
	import { appendLayoutPath } from "src/contexts";
	import { ModuleLayout } from "src/components/layout/module-layout";

	export let segment: string;
	void segment;

	appendLayoutPath("button");

</script>

<ModuleLayout module="button" title="Button">
	<slot />
	<div slot="page">
		<slot />
	</div>
</ModuleLayout>
