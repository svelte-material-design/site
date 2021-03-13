<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prefix,
		Suffix,
		TrailingIcon as InputFieldTrailingIcon,
		LeadingIcon as InputFieldLeadingIcon,
	} from "@svelte-material-design/core/textfield";
	import { Input } from ".";
	import { InputFieldConfigurations } from "../types";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";

	export let configurations: InputFieldConfigurations;

	function clear() {
		configurations.value = "";
		configurations = { ...configurations };
	}
</script>

{#if configurations.leadingIcon}
	<LeadingIcon
		type={configurations.leadingIcon}
		component={InputFieldLeadingIcon}
	/>
{/if}
{#if configurations.prefix}
	<Prefix>{configurations.prefix}</Prefix>
{/if}
<Input {configurations} />
{#if configurations.suffix}
	<Suffix>{configurations.suffix}</Suffix>
{/if}
{#if configurations.trailingIcon}
	<TrailingIcon
		type={configurations.trailingIcon}
		component={InputFieldTrailingIcon}
		button={configurations.clearOnTrailingIconClick}
		on:click={clear}
	/>
{/if}
