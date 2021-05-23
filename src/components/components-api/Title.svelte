<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Button, Label } from "@svelte-material-design/core/button";
	import { getLink } from "src/components/layout/module-layout/context";
	import { stores } from "@sapper/app";

	export let module: string;

	const { page } = stores();

	$: isApiPage = ($page.path as string).includes("/api");

</script>

<div>
	<Typography class="api-title" variant="headline2">
		<slot />
		<small aria-hidden="true"
			><code>@svelte-material-design/core/{module}</code></small
		>
	</Typography>
	<Button href={isApiPage ? getLink("") : getLink("api")}>
		<Label>Show {isApiPage ? "configurator" : "docs"}</Label>
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
