import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";
import { writable } from "svelte/store";
import type {
	SwitchConfigurationsItem,
	SwitchGroupConfigurations,
} from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		selectionType: "multi",
		nullable: true,
	} as SwitchGroupConfigurations;

	const configurations$ = writable<SwitchGroupConfigurations>(
		initialConfigurations
	);

	function itemFactory(index) {
		const value = `item:${index}`;
		return {
			id: value,
			value,
			label: `Switch ${index}`,
			checked: false,
			ripple: true,
			disabled: false,
			readonly: false,
		} as SwitchConfigurationsItem;
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
