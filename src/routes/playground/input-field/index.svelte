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

	let value: any;

	function clear() {
		value = "";
	}
</script>

<InputField bind:value>
	<Content>
		<Prefix>Prefix</Prefix>
		<Input />
		<Suffix>Suffix</Suffix>
		<TrailingIcon tabindex="0" on:click={clear}>close</TrailingIcon>
	</Content>
	<HelperText>helper text</HelperText>
</InputField>
<div>
	{value}
</div>
