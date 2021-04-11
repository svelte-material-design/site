<svelte:options immutable={true} />

<script lang="ts">
	import { Select, Option } from "@smui/core/select";
	import type { SelectionType } from "@smui/core/common/hoc";

	export let selectionType: SelectionType;
</script>

<div>
	<Select bind:value={selectionType}>
		<span slot="label">Selection Type</span>
		<div slot="options">
			<Option />
			<Option value="single">Single</Option>
			<Option value="multi">Multi</Option>
		</div>
	</Select>
</div>
