<script lang="ts">
	import "./index.scss";
	import IndeterminateLinearProgressConfigurator from "./_IndeterminateLinearProgressConfigurator.svelte";
	import LinearProgressConfigurator from "./_LinearProgressConfigurator.svelte";
	import { Typography } from "@smui/core/typography";
	import { Tab, Label } from "@smui/core/tab";
	import { TabBar } from "@smui/core/tab-bar";

	let currentTab: "linear-progress" | "indeterminate-linear-progress" =
		"linear-progress";
</script>

<svelte:head>
	<title>Linear Progress - SMUI</title>
</svelte:head>

<section>
	<Typography variant="headline2">Linear Progress</Typography>

	<TabBar bind:value={currentTab}>
		<Tab value="linear-progress">
			<Label>Linear progress</Label>
		</Tab>
		<Tab value="indeterminate-linear-progress">
			<Label>Indeterminate linear progress</Label>
		</Tab>
	</TabBar>

	{#if currentTab === 'linear-progress'}
		<LinearProgressConfigurator />
	{:else if currentTab === 'indeterminate-linear-progress'}
		<IndeterminateLinearProgressConfigurator />
	{/if}

	<!-- <PlayableLinearProgress />

	<div>
		Buffered:

		<LinearProgress progress={0.5} buffer={0.75} />
	</div>

	<div>
		Indeterminate:

		<LinearProgress indeterminate />
	</div>

	<div>
		Reversed:

		<LinearProgress progress={0.5} reversed />
	</div>

	<div>
		Reversed Buffered:

		<LinearProgress progress={0.5} buffer={0.75} reversed />
	</div>

	<div>
		Colored (using Sass mixins):

		<LinearProgress class="my-colored-bar" progress={0.5} buffer={0.75} />
	</div> -->
</section>
