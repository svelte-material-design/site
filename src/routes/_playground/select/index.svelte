<script lang="ts">
	import {
		Select,
		Option,
		Options,
		Content,
		Input,
		LeadingIcon,
	} from "@svelte-material-design/core/select";

	export let value: string;

</script>

<Select class="select" bind:value on:change>
	<Content>
		<span slot="label">Test</span>
		<Input />
		<svelte:fragment slot="leadingIcon">
			<LeadingIcon>close</LeadingIcon>
		</svelte:fragment>
		<Options>
			<Option value="" />
			<Option value="test">Option</Option>
		</Options>
	</Content>
</Select>
value: {value}
