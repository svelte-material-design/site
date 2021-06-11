<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		CommonListProps,
		BaseListComponentProps,
	} from "src/components/components-api/props/common/list";
</script>

<Props>
	<CommonListProps />
	<!-- TODO: serve? <CommonListGroupProps /> -->
	<BaseListComponentProps />
</Props>
