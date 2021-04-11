<svelte:options immutable={true} />

<script lang="ts">
	import { Input } from ".";
	import { TextAreaFieldConfigurations } from "../../types";
	import { CharacterCounter } from "@svelte-material-design/core/textfield";

	export let configurations: TextAreaFieldConfigurations;
</script>

<Input {configurations} />
{#if configurations.useInternalCounter}
	<CharacterCounter />
{/if}
