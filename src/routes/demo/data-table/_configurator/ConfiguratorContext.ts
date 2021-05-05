import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";
import { writable } from "svelte/store";
import type { DataTableConfigurations, DataTableRow } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as DataTableConfigurations;

	const configurations$ = writable(initialConfigurations);

	function itemFactory(index) {
		const value = `item:${index}`;
		return ({
			id: value,
			value,
		} as Partial<DataTableRow>) as DataTableRow;
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
