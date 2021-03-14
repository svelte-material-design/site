<svelte:options immutable={true} />

<script lang="ts">
	import { Input } from "@svelte-material-design/core/textfield";
	import { InputFieldConfigurations } from "../types";

	export let configurations: InputFieldConfigurations;
</script>

{#if configurations.useDatalist}
	<Input
		readonly={configurations.readonly ? true : undefined}
		title={configurations.title}
		placeholder={configurations.placeholder}
		size={configurations.size}
		pattern={configurations.pattern}
		maxlength={configurations.maxlength}
		minlength={configurations.minlength}
		step={configurations.step}
		min={configurations.min}
		max={configurations.max}
		type={configurations.type}
		name="input-field"
	>
		<div slot="options">
			<option value="Red Dead Redemption" />
			<option value="Grand Theft Auto" />
			<option value="Max Payne" />
		</div>
	</Input>
{:else}
	<Input
		readonly={configurations.readonly ? true : undefined}
		title={configurations.title}
		placeholder={configurations.placeholder}
		size={configurations.size}
		pattern={configurations.pattern}
		maxlength={configurations.maxlength}
		minlength={configurations.minlength}
		step={configurations.step}
		min={configurations.min}
		max={configurations.max}
		type={configurations.type}
		name="input-field"
	/>
{/if}
