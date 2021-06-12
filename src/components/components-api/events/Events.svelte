<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "../common";
	import { EventsHeading } from "../headings";
</script>

<EventsHeading />

<Section>
	<slot />
</Section>
