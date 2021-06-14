<svelte:options immutable={true} />

<script lang="ts">
	import {
		InputField,
		HelperText,
		Input,
		Content,
		Prefix,
		Suffix,
		TrailingIcon,
	} from "@svelte-material-design/core/textfield";
	import type { Value } from "@svelte-material-design/core/textfield";

	let value: Value;
	let dirty: boolean;
	let invalid: boolean;

	function clear() {
		value = "";
	}
</script>

<InputField bind:value bind:dirty bind:invalid>
	<Content>
		<Prefix>Prefix</Prefix>
		<Input pattern={"[a-z]"} />
		<Suffix>Suffix</Suffix>
		<TrailingIcon tabindex="0" on:click={clear}>close</TrailingIcon>
	</Content>
	<HelperText>helper text</HelperText>
</InputField>
<div>
	{value}
	{dirty}
	{invalid}
</div>
