<svelte:options immutable={true} />

<script lang="ts">
	import {
		InputField,
		HelperText,
		Input,
		Content,
		Prefix,
		Suffix,
		Icon,
		Value,
	} from "@svelte-material-design/core/textfield";

	let value: Value;
	let invalid: boolean;

	function clear() {
		value = "";
	}
</script>

<form action="#">
	<InputField bind:value bind:invalid>
		<Content>
			<Prefix>Prefix</Prefix>
			<Input pattern={"[a-z]"} />
			<Suffix>Suffix</Suffix>
			<Icon tabindex="0" on:click={clear}>close</Icon>
		</Content>
		<HelperText>helper text</HelperText>
	</InputField>
	<div>
		{value}
		{invalid}
	</div>
	<button type="submit">submit</button>
</form>
