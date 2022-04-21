<svelte:options immutable={true} />

<script lang="ts">
	import { Title } from "src/components/layout/module-layout";
	import { stores } from "@sapper/app";
	import { setLayoutPath, setModulesList, setPageType } from "./context";
	import type { ModuleOption } from "./types";
	import { SubModulesTabs } from ".";

	export let module: string;
	export let title: string;
	export let path: string;
	export let segment: string;
	export let options: ModuleOption[] = undefined;

	const { page } = stores();
	setModulesList(options);

	function isModulePage(segment: string) {
		return (
			segment === undefined || options?.some(({ folder }) => folder === segment)
		);
	}

	function isApiPage(segment: string) {
		return segment === "api";
	}

	setLayoutPath(path);

	$: if (isModulePage(segment)) {
		setPageType("module");
	} else if (isApiPage(segment)) {
		setPageType("api");
	} else {
		setPageType(undefined);
	}

</script>

<svelte:head>
	<title>{title} - Svelte Material Design</title>
</svelte:head>

{#if $page.path.endsWith("iframe")}
	<slot />
{:else}
	<div>
		<Title {module}>{title}</Title>
		{#if options}
			<SubModulesTabs {options} {segment} />
		{/if}
		<!-- <slot name="page" /> -->
		<slot />
	</div>
{/if}

<style>
	div {
		padding: 1em;
		padding-block-end: 3em;
	}

</style>
