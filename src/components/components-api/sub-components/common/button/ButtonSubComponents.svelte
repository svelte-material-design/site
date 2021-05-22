<svelte:options immutable={true} />

<script lang="ts">
	import {
		LeadingIcon,
		TrailingIcon,
		Label,
	} from "src/components/components-api/sub-components/common";

	export let indentation: number = 0;
	export let component: string;

</script>

<Label mandatory {indentation} {component} />
<LeadingIcon {indentation} />
<TrailingIcon {indentation} />
