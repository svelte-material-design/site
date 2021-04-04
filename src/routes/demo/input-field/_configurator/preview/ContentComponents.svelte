<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prefix,
		Suffix,
		LeadingIcon as InputFieldLeadingIcon,
		TrailingIcon as InputFieldTrailingIcon,
	} from "@svelte-material-design/core/textfield";
	import { Input } from ".";
	import type { InputFieldConfigurations } from "../types";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";

	export let configurations: InputFieldConfigurations;
	export let leadingClassName: string;
	export let trailingClassName: string;

	function clear() {
		configurations.value = "";
		configurations = { ...configurations };
	}
</script>

{#if configurations.leadingIcon}
	<LeadingIcon
		class={leadingClassName}
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
		class={trailingClassName}
		type={configurations.trailingIcon}
		component={InputFieldTrailingIcon}
		button={configurations.clearOnTrailingIconClick}
		on:click={clear}
	/>
{/if}
