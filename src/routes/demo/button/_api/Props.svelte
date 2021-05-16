<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import { Href } from "src/components/components-api/props/common";
	import {
		BaseButtonProps,
		CommonButtonProps,
	} from "src/components/components-api/props/common/button";

</script>

<Props>
	<CommonButtonProps />
	<Href />
	<BaseButtonProps />
</Props>
