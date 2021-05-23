<svelte:options immutable={true} />

<script lang="ts">
	import { ModuleLayout } from "src/components/layout/module-layout";

	export let segment: string;

</script>

<ModuleLayout module="button" path="button" title="Button" {segment}>
	<slot />
</ModuleLayout>
