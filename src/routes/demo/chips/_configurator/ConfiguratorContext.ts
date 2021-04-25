import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";
import { writable } from "svelte/store";
import type { ChipSetConfigurations, ChipConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		nullable: true,
		entryAnimation: true,
	} as ChipSetConfigurations;

	const configurations$ = writable(initialConfigurations);

	function itemFactory(index) {
		const value = `item:${index}`;
		return ({
			id: value,
			value,
			selected: false,
			label: `Chip ${index}`,
			ripple: true,
			trailingIconAction: true,
			action: true,
		} as Partial<ChipConfigurations>) as ChipConfigurations;
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
