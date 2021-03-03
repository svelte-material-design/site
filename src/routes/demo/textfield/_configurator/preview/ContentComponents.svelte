<svelte:options immutable={true} />

<script lang="ts">
	import {
		Input,
		Prefix,
		Suffix,
	} from "@svelte-material-design/core/textfield";
	import { LeadingIcon, TrailingIcon } from ".";
	import { InputFieldConfigurations } from "../types";
	import { createEventDispatcher } from "svelte";

	export let configurations: InputFieldConfigurations;

	const dispatch = createEventDispatcher<{
		clear: void;
	}>();

	function clear() {
		dispatch("clear");
	}
</script>

{#if configurations.leadingIcon}
	<LeadingIcon type={configurations.leadingIcon} />
{/if}
{#if configurations.prefix}
	<Prefix>Prefix</Prefix>
{/if}
<Input {configurations} />
{#if configurations.suffix}
	<Suffix>Suffix</Suffix>
{/if}
{#if configurations.trailingIcon}
	<TrailingIcon
		type={configurations.trailingIcon}
		clearOnTrailingIconClick={configurations.clearOnTrailingIconClick}
		on:click={clear}
	/>
{/if}
