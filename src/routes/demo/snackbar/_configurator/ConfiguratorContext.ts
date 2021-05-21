import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { SnackbarConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as SnackbarConfigurations;

	const configurations$ = writable<SnackbarConfigurations>(
		initialConfigurations
	);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
