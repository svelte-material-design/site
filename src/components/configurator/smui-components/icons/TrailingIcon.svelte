<svelte:options immutable={true} />

<script lang="ts">
	import type { IconType } from ".";
	import { Icon } from ".";

	export let type: IconType;
	export let component: any;
	export let button: boolean = false;
</script>

<Icon
	{type}
	{component}
	src={type === "img" ? "/icons/emojis/grinning-face.png" : undefined}
	alt={type === "img" ? "Grinning face" : undefined}
	iconContent={button ? "clear" : "alarm"}
	{button}
	{...$$restProps}
	on:click
>
	<polygon points="0,24 12,0 24,24" />
</Icon>
