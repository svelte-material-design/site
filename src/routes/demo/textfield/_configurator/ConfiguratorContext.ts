import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { InputFieldConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as InputFieldConfigurations;

	const configurations$ = writable(initialConfigurations);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
