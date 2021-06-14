<svelte:options immutable={true} />

<script lang="ts">
	import { Select, Option } from "@svelte-material-design/core/select";
	import type { SelectionType } from "@svelte-material-design/core/common/hoc";

	export let selectionType: SelectionType;

</script>

<div>
	<Select bind:value={selectionType}>
		<span slot="label">Selection Type</span>
		<div slot="options">
			<Option />
			<Option value="single">Single</Option>
		</div>
		<Option value="multi">Multi</Option>
	</Select>
</div>
