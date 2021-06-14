<svelte:options immutable={true} />

<script lang="ts">
	import { Select, Option } from "@svelte-material-design/core/select";

	let value: string = undefined;

</script>

<Select nullable={false} bind:value>
	<div slot="options">
		<Option value="item 1">Item 1</Option>
		<Option value="item 2">Item 2</Option>
	</div>
</Select>
