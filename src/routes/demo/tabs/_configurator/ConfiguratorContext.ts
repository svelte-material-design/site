import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { id } from "common-tags";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";
import { writable } from "svelte/store";
import type { TabBarConfigurations, TabConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as TabBarConfigurations;

	const configurations$ = writable(initialConfigurations);

	function itemFactory(index) {
		const value = `item:${index}`;
		return ({
			id: value,
			value,
			key: value,
			active: false,
			tabIndicatorPosition: "tab",
			label: `Tab ${index}`,
			ripple: true,
		} as Partial<TabConfigurations>) as TabConfigurations;
	}

	const multipleItemsHandler = createMultipleItemsHandler({
		configurations$,
		itemFactory,
	});

	return {
		configurations$: {
			...configurations$,
			...multipleItemsHandler.derivedConfigurations$,
		},
		multipleItemsHandler,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
