import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";
import { writable } from "svelte/store";
import type {
	CheckboxConfigurationsItem,
	CheckboxGroupConfigurations,
} from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as CheckboxGroupConfigurations;

	const configurations$ = writable<CheckboxGroupConfigurations>(
		initialConfigurations
	);

	function itemFactory(index) {
		const value = `item:${index}`;
		return {
			id: value,
			value,
			label: `Checkbox ${index}`,
			checked: false,
			ripple: true,
			accessibleTouch: true,
			allowIndeterminated: false,
			disabled: false,
			readonly: false,
		} as CheckboxConfigurationsItem;
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
