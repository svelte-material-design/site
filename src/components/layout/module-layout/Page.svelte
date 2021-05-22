<svelte:options immutable={true} />

<script lang="ts">
	import { getLayoutPath } from "src/contexts";
	import { TabBar } from "src/components/configurator/tab-bar";
	import type { Option } from "src/components/configurator/tab-bar";
	import type { ModuleOption } from "./types";

	export let segment: string = undefined;
	export let options: ModuleOption[] = undefined;

	const currentPath = getLayoutPath();

	let value = segment ?? options?.[0].folder;

	let tabs: Option[] = options?.map((option) => {
		return {
			value: "/" + (option.folder ? option.folder : ""),
			label: option.label,
			href: currentPath + (option.folder ? `/${option.folder}` : ""),
		};
	});

	const isFullPage =
		segment &&
		((options && options.some(({ folder }) => folder === segment)) ||
			segment === "api");

</script>

{#if options}
	<TabBar bind:value {tabs} />
{/if}
{#if isFullPage}
	<slot />
{:else}
	<slot name="main" />
{/if}
