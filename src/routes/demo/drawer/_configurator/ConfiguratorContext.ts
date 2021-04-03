import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { DrawerConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as DrawerConfigurations;

	const configurations$ = writable(initialConfigurations);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
