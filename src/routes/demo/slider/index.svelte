<script lang="ts">
	import SimpleSlider from "./_SimpleSlider.svelte";
	import DiscreteSlider from "./_DiscreteSlider.svelte";
	import TickMarksSlider from "./_TickMarksSlider.svelte";
	import SliderConfigurator from "./_SliderConfigurator.svelte";
</script>

<svelte:head>
	<title>Slider - SMUI</title>
</svelte:head>

<section>
	<h2>Slider</h2>

	<SliderConfigurator />
	<SimpleSlider />
	<DiscreteSlider />
	<TickMarksSlider />
</section>
