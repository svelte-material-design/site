<svelte:options immutable={true} />

<script lang="ts">
	import { getLayoutPath } from "src/contexts";
	import { TabBar } from "src/components/configurator/tab-bar";
	import type { Option } from "src/components/configurator/tab-bar";
	import type { ModuleOption } from "./types";

	export let segment: string = undefined;
	export let options: ModuleOption[] = undefined;

	const currentPath = getLayoutPath();

	let active = segment ?? options?.[0].folder;

	let tabs: Option[] = options?.map((option) => {
		return {
			key: "/" + (option.folder ? option.folder : ""),
			label: option.label,
			href: currentPath + (option.folder ? `/${option.folder}` : ""),
		};
	});
</script>

{#if options}
	<TabBar bind:active {tabs} />
{/if}
{#if segment && options && options.some(({ folder }) => folder === segment)}
	<slot />
{:else}
	<slot name="main" />
{/if}
