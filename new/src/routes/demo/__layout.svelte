<svelte:options immutable={true} />

<script lang="ts">
	import { page } from '$app/stores';
	import { Layout } from '$lib/layout';
	import { setLayoutPath } from '$lib/layout/module-layout/context';

	setLayoutPath('/demo');
	const iframe = $page.url.pathname.includes('iframe');
</script>

{#if iframe}
	<slot />
{:else}
	<Layout>
		<slot />
	</Layout>
{/if}
