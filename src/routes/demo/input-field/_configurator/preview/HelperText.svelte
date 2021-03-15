<svelte:options immutable={true} />

<script lang="ts">
	import { HelperText, CharacterCounter } from "@svelte-material-design/core/textfield";
	import { InputFieldConfigurations } from "../types";

	export let configurations: InputFieldConfigurations;
</script>

{#if configurations.helperText}
	<HelperText
		persistent={configurations.persistentHelperText}
		validationMsg={configurations.helperTextAsValidationMsg}
	>
		<span slot="label">{configurations.helperText}</span>
		{#if configurations.characterCounter}
			<CharacterCounter />
		{/if}
	</HelperText>
{:else}
	<HelperText
		persistent={configurations.persistentHelperText}
		validationMsg={configurations.helperTextAsValidationMsg}
	>
		{#if configurations.characterCounter}
			<CharacterCounter />
		{/if}
	</HelperText>
{/if}
