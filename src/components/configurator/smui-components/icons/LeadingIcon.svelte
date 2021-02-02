<svelte:options immutable={true} />

<script lang="ts">
	import type { IconType } from ".";
	import { Icon } from ".";

	export let type: IconType;
	export let component: any;
	export let button: boolean = false;
</script>

<Icon {...$$restProps} {type} {component} iconContent="favorite" {button}>
	<circle cx="12" cy="12" r="12" />
</Icon>
