<script lang="ts">
	import { HelperText } from "@smui/core/textfield/helper-text";
	import { CharacterCounter } from "@smui/core/textfield/character-counter";

	export let helperText: boolean;
	export let validationMsg: boolean;
	export let persistent: boolean;
	export let characterCounter: boolean;
</script>

<svelte:options immutable={true} />

{#if helperText}
	<HelperText {persistent} {validationMsg}>
		<span slot="label">Helper Text</span>
		{#if characterCounter}
			<CharacterCounter />
		{/if}
	</HelperText>
{:else}
	<HelperText {persistent} {validationMsg}>
		{#if characterCounter}
			<CharacterCounter />
		{/if}
	</HelperText>
{/if}
