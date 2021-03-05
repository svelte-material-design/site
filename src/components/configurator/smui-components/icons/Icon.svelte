<svelte:options immutable={true} />

<script lang="ts">
	import type { IconType } from ".";

	export let type: IconType;
	export let component: any;
	export let button: boolean = false;
	export let iconContent: string = undefined;
</script>

{#if type === "material-icon"}
	<svelte:component
		this={component}
		{...$$restProps}
		role={button ? "button" : undefined}
		tabindex={button ? 0 : undefined}
		on:click
	>
		{#if iconContent}{iconContent}{:else}refresh{/if}
	</svelte:component>
{:else if type === "svg"}
	<svelte:component
		this={component}
		{...$$restProps}
		type="svg"
		viewBox="0 0 24 24"
		role={button ? "button" : undefined}
		tabindex={button ? 0 : undefined}
		on:click
	>
		{#if $$slots.default}
			<slot />
		{:else}
			<circle cx="12" cy="12" r="12" />
		{/if}
	</svelte:component>
{:else if type === "img"}
	<svelte:component
		this={component}
		{...$$restProps}
		type="img"
		src={$$restProps.src || "/icons/emojis/upside-down-face.png"}
		alt={$$restProps.alt || "Upside down face"}
		role={button ? "button" : undefined}
		tabindex={button ? 0 : undefined}
		on:click
	/>
{/if}
