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

	<AppContent>
		<TopAppBar
			showMenuBtn={dismissible}
			on:navButtonClick={() => (open = true)}
			let:class={contentClass}
		>
			<main class={contentClass}>
				<slot />
			</main>
		</TopAppBar>
	</AppContent>
</div>
