<svelte:options immutable={true} />

<script lang="ts">
	import {
		Chip,
		Checkmark,
		LeadingIcon as ChipLeadingIcon,
		TrailingIcon as ChipTrailingIcon,
		Content,
		Action,
		Text,
	} from "@svelte-material-design/core/chips";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import { tick } from "svelte";
	import type { ChipConfigurations } from "../../types";

	export let configurations: ChipConfigurations;

	async function handleChange() {
		await tick();
		configurations = { ...configurations };
	}
</script>

<Chip
	bind:selected={configurations.selected}
	ripple={configurations.ripple}
	value={configurations.value}
	accessibleTouch={configurations.accessibleTouch}
	hideLeadingIconOnSelect={configurations.hideLeadingIconOnSelect}
	on:change={handleChange}
	on:change
>
	{#if configurations.useCheckmark}
		<Checkmark />
	{/if}
	{#if configurations.leadingIcon}
		<LeadingIcon
			type={configurations.leadingIcon}
			component={ChipLeadingIcon}
		/>
	{/if}
	<Content>
		{#if configurations.action}
			<Action>
				<Text>{configurations.value}</Text>
			</Action>
		{:else}
			<Text>{configurations.label}</Text>
		{/if}
	</Content>
	{#if configurations.trailingIcon}
		<TrailingIcon
			type={configurations.trailingIcon}
			component={ChipTrailingIcon}
			action={configurations.trailingIconAction}
		/>
	{/if}
</Chip>
