<script lang="ts">
	import Content from "../Content.svelte";

	export let showTitle: boolean = false;
	export let showSubtitle: boolean = false;
	export let showText: boolean = true;
</script>

<Content
	title={showTitle ? 'Head title' : ''}
	subtitle={showSubtitle ? 'Head subtitle' : ''}
	text={showText ? 'Head text' : ''} />
