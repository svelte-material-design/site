<svelte:options immutable={true} />

<script lang="ts">
	import {
		TopAppBar,
		Section,
		Title,
		NavigationIcon,
		Icon,
	} from "@svelte-material-design/core/top-app-bar";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let showMenuBtn: boolean = false;

</script>

<TopAppBar class={"demo-app-bar"} let:contentClass>
	<Section>
		{#if showMenuBtn}
			<NavigationIcon on:click={() => dispatch("navButtonClick")}>
				<Icon>menu</Icon>
			</NavigationIcon>
		{/if}
		<Title>Svelte Material Design</Title>
	</Section>
	<slot slot="content" class={contentClass} />
</TopAppBar>

<style lang="scss" global>
	@use "@material/elevation";

	.demo-app-bar {
		@include elevation.elevation(4);
	}

</style>
