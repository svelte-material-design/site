<script lang="ts">
	import { Select, Option } from "@smui/core/select";
	import { SelectionType } from "@smui/core/common/hoc";

	export let selectionType: SelectionType;
</script>

<svelte:options immutable={true} />

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
