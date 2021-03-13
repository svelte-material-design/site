<svelte:options immutable={true} />

<script lang="ts">
	import { Content } from "@svelte-material-design/core/textfield";
	import { InputFieldConfigurations } from "../types";
	import { ContentComponents } from ".";

	export let configurations: InputFieldConfigurations;
	export let leadingClassName: string;
	export let trailingClassName: string;
</script>

{#if configurations.label}
	<Content>
		<span slot="label">{configurations.label}</span>
		<ContentComponents
			bind:configurations
			{leadingClassName}
			{trailingClassName}
		/>
	</Content>
{:else}
	<Content>
		<ContentComponents
			bind:configurations
			{leadingClassName}
			{trailingClassName}
		/>
	</Content>
{/if}
