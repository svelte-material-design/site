import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { ListGroupConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as ListGroupConfigurations;

	const configurations$ = writable<ListGroupConfigurations>(
		initialConfigurations
	);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
