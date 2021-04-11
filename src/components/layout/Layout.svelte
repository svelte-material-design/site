<svelte:options immutable={true} />

<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { TopAppBar, Drawer } from ".";
	import { AppContent } from "@svelte-material-design/core/drawer";

	let open: boolean;
	let dismissible: boolean = true;

	let tabletMedia: MediaQueryList;
	onMount(() => {
		tabletMedia = window.matchMedia("(max-width: 960px)");
		tabletMedia.addEventListener("change", handleTabletMediaChange);
		handleTabletMediaChange();
	});

	onDestroy(() => {
		tabletMedia?.removeEventListener("change", handleTabletMediaChange);
	});

	function handleTabletMediaChange() {
		if (tabletMedia.matches) {
			dismissible = true;
		} else {
			dismissible = false;
		}
	}
</script>

<div>
	<Drawer {dismissible} bind:open />

	<AppContent class={"app-content"}>
		<svelte:fragment slot="topAppBar">
			<TopAppBar
				showMenuBtn={dismissible}
				on:navButtonClick={() => (open = true)}
				let:class={contentClass}
			>
				<section class="app-content {contentClass}">
					<slot />
				</section>
			</TopAppBar>
		</svelte:fragment>
	</AppContent>
</div>

<style>
	.app-content {
		overflow: auto;
    height: 100vh;
	}
	</style>