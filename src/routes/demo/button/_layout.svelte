<svelte:options immutable={true} />

<script lang="ts">
	import { ModuleLayout } from "src/components/layout/module-layout";
	import { appendLayoutPath } from "src/components/layout/module-layout/context";

	export let segment: string;

	appendLayoutPath("button");

</script>

<ModuleLayout module="button" path="button" title="Button" {segment}>
	<slot />
</ModuleLayout>
