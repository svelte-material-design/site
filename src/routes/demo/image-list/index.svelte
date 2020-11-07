<script lang="ts">
	import SimpleImageList from "./_SimpleImageList.svelte";
	import TextProtectionImageList from "./_TextProtectionImageList.svelte";
	import MasonryImageList from "./_MasonryImageList.svelte";
	import ImageBackgroundImageList from "./_ImageBackgroundImageList.svelte";
	import ImageListConfigurator from "./_ImageListConfigurator.svelte";
</script>

<svelte:head>
	<title>Image Lists - SMUI</title>
</svelte:head>

<section>
	<h2>Image Lists</h2>

	<ImageListConfigurator />
	<SimpleImageList />
	<TextProtectionImageList />
	<MasonryImageList />
	<ImageBackgroundImageList />
</section>
