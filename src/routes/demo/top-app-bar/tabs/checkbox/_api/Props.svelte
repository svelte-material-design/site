<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import { CommonInputProps } from "src/components/components-api/props/common/input";
	import { InnerInputElementNotes } from "src/components/components-api/props/common/notes";
</script>

<Props>
	<CommonInputProps />
	<span slot="notes">
		<InnerInputElementNotes />
	</span>
</Props>
