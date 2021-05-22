<svelte:options immutable={true} />

<script lang="ts">
	import { SubComponents } from "../_api";

	export let segment: string;
	void segment;

</script>

<SubComponents />
<slot />
