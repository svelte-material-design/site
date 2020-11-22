<script lang="ts">
	import SimpleSlider from "./_SimpleSlider.svelte";
	import DiscreteSlider from "./_DiscreteSlider.svelte";
	import TickMarksSlider from "./_TickMarksSlider.svelte";
	import SliderConfigurator from "./_SliderConfigurator.svelte";
	import ContinuousSliderConfigurator from "./_ContinuousSliderConfigurator.svelte";
	import { Tab, Label } from "@smui/core/tab";
	import { TabBar } from "@smui/core/tab-bar";

	let currentTab: "continuous-slider" | "discrete-slider" = "discrete-slider";
</script>

<svelte:head>
	<title>Slider - SMUI</title>
</svelte:head>

<section>
	<h2>Slider</h2>

	<TabBar bind:active={currentTab}>
		<Tab key="continuous-slider">
			<Label>Continuous slider</Label>
		</Tab>
		<Tab key="discrete-slider">
			<Label>Discrete slider</Label>
		</Tab>
	</TabBar>

	{#if currentTab === 'continuous-slider'}
		<ContinuousSliderConfigurator />
	{:else if currentTab === 'discrete-slider'}
		<SliderConfigurator />
	{/if}
	<!-- <SimpleSlider />
	<DiscreteSlider />
	<TickMarksSlider /> -->
</section>
