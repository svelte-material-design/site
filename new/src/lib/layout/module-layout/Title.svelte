<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from '@svelte-material-design/core/typography';
	import { Button, Label } from '@svelte-material-design/core/button';
	import { getConfiguratorLink, getDocsLink } from '$lib/layout/module-layout/context';
	import { page } from '$app/stores';

	export let module: string;

	$: isApiPage = ($page.url.pathname as string).includes('/api');
</script>

<div>
	<Typography class="api-title" variant="headline2">
		<slot />
		<small aria-hidden="true"><code>@svelte-material-design/core/{module}</code></small>
	</Typography>
	<Button href={isApiPage ? getConfiguratorLink() : getDocsLink()}>
		<Label>Show {isApiPage ? 'configurator' : 'docs'}</Label>
	</Button>
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-block-end: 2em;

		:global(.api-title) {
			margin: 0;
		}
	}

	small {
		font-size: 0.3em;
	}
</style>
