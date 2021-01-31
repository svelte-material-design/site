<script lang="ts">
	import { Select, Option } from "@svelte-material-design/core/select";

	export let value: string;
</script>

<Select class="select" bind:value on:change>
	<span slot="label">Test</span>
	<div slot="options">
		<Option value="test">Option</Option>
	</div>
</Select>
