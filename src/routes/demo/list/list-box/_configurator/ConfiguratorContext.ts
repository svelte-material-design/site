import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";
import { writable } from "svelte/store";
import type { ListBoxConfigurations, ListItemConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		itemsStyle: "textual",
	} as ListBoxConfigurations;

	const configurations$ = writable<ListBoxConfigurations>(
		initialConfigurations
	);

	function itemFactory(index) {
		const value = `item:${index}`;
		return ({
			id: value,
			value,
			ripple: true,
			disabled: false,
			readonly: false,
			selected: false,
			href: undefined,
			label: `Item ${index}`,
			labelRow2: `Secondary text`,
			labelRow3: `Third line`,
			trailingIcon: undefined,
			leadingIcon: undefined,
		} as Partial<ListItemConfigurations>) as ListItemConfigurations;
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
