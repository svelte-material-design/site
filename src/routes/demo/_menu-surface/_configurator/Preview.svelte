<svelte:options immutable={true} />

<script lang="ts">
	import { Button } from "@svelte-material-design/core/button";
	import { MenuSurface } from "@svelte-material-design/core/menu-surface";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	function openMenuSurface() {
		$configurations$.open = true;
		updateInstance();
	}

	function closeMenuSurface() {
		$configurations$.open = false;
		updateInstance();
	}

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<div style={$configurations$.anchor ? "position: relative;" : ""}>
	<Button on:click={openMenuSurface}>Open Surface</Button>
	<MenuSurface
		bind:open={$configurations$.open}
		anchorCorner={$configurations$.anchorCorner}
		anchorFlipRtl={$configurations$.anchorFlipRtl}
		quickOpen={$configurations$.quickOpen}
		variant={$configurations$.variant}
		anchorMargin={$configurations$.anchorMargin}
		hoisted={$configurations$.hoisted}
		anchor={$configurations$.anchor}
	>
		<div class="surface">
			<div>Menu surface content</div>
			<Button on:click={closeMenuSurface}>Close Surface</Button>
		</div>
	</MenuSurface>
</div>
