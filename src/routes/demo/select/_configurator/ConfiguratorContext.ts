import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { SelectConfigurations, OptionConfigurations } from "./types";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";

export function createConfiguratorStore() {
	const initialConfigurations = {
		ripple: true,
		lineRipple: true,
		label: "Label",
	} as SelectConfigurations;

	const configurations$ = writable(initialConfigurations);

	function itemFactory(index) {
		const value = `item:${index}`;
		return ({
			id: value,
			value,
			disabled: false,
			label: `Item ${index}`,
		} as Partial<OptionConfigurations>) as OptionConfigurations;
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
