import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";
import { writable } from "svelte/store";
import type {
	RadioConfigurationsItem,
	RadioGroupConfigurations,
} from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as RadioGroupConfigurations;

	const configurations$ = writable<RadioGroupConfigurations>(
		initialConfigurations
	);

	function itemFactory(index) {
		const value = `item:${index}`;
		return {
			id: value,
			value,
			label: `Radio ${index}`,
			checked: false,
			ripple: true,
			accessibleTouch: true,
			disabled: false,
			readonly: false,
		} as RadioConfigurationsItem;
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
