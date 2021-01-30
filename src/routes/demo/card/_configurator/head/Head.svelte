<svelte:options immutable={true} />

<script lang="ts">
	import Content from "../Content.svelte";

	export let title: string = undefined;
	export let subtitle: string = undefined;
	export let text: string = undefined;
</script>

<Content {title} {subtitle} {text} />
