<svelte:options immutable={true} />

<script lang="ts">
	import { SlotsHeading } from "../headings";
	import { Section } from "../common";

</script>

<SlotsHeading />

<Section cols={2}>
	<slot slot="table" name="table" />
	<slot />
</Section>
