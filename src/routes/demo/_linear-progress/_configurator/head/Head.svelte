<svelte:options immutable={true} />

<script lang="ts">
	import Content from "../Content.svelte";
	import type { CardConfigurations } from "../types";

	export let configurations: CardConfigurations;
</script>

<Content
	title={configurations.title}
	subtitle={configurations.subtitle}
	text={configurations.text}
/>
