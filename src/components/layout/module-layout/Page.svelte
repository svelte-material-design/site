<svelte:options immutable={true} />

<script lang="ts">
	import { getModulesList, getLayoutPath, getPageType } from "./context";
	import { TabBar } from "src/components/configurator/tab-bar";
	import type { Option } from "src/components/configurator/tab-bar";

	export let segment: string = undefined;

	const options = getModulesList();
	const currentPath = getLayoutPath();

	let value = segment ?? options?.[0].folder;

	let tabs: Option[] = options?.map((option) => {
		return {
			value: "/" + (option.folder ? option.folder : ""),
			label: option.label,
			href: currentPath + (option.folder ? `/${option.folder}` : ""),
		};
	});

	const pageType = getPageType();

</script>

{#if options}
	<TabBar bind:value {tabs} />
{/if}
{#if pageType === "module" || pageType === "api"}
	<slot />
{:else}
	<slot name="main" />
{/if}
