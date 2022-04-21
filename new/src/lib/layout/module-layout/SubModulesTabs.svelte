<svelte:options immutable={true} />

<script lang="ts">
	import type { ModuleOption } from "./types";
	import type { Option } from "src/components/configurator/tab-bar";
	import { TabBar } from "src/components/configurator/tab-bar";
	import { getLayoutPath } from "./context";

	export let segment: string;
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

</script>

<TabBar bind:value {tabs} />
