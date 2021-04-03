<svelte:options immutable={true} />

<script lang="ts">
	import { BaseItemProps, Activated } from ".";

	export let elementType: string = undefined;
</script>

<BaseItemProps {elementType}>
	<Activated />
</BaseItemProps>
