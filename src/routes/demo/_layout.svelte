<script lang="ts">
	import "../app.scss";
	import { stores } from "@sapper/app";
	import SmuiLayout from "src/components/layout/SMUILayout.svelte";
	// import Test from "src/components/layout/Test.svelte";

	const { page } = stores();
	const iframe = $page.path.includes("iframe");
</script>

{#if iframe}
	<slot />
{:else}
	<SmuiLayout>
		<slot />
	</SmuiLayout>
	<!-- <Test /> -->
{/if}
