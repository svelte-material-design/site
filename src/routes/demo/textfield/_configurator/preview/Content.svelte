<svelte:options immutable={true} />

<script lang="ts">
	import { Content } from "@svelte-material-design/core/textfield";
	import { InputFieldConfigurations } from "../types";
	import { ContentComponents } from ".";

	export let configurations: InputFieldConfigurations;
</script>

{#if configurations.label}
	<Content>
		<span slot="label">{configurations.label}</span>
		<ContentComponents bind:configurations />
	</Content>
{:else}
	<Content>
		<ContentComponents bind:configurations />
	</Content>
{/if}
