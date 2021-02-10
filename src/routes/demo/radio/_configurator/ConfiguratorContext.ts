import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { RadioConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		label: "Label",
	} as RadioConfigurations;

	const configurations$ = writable<RadioConfigurations>(initialConfigurations);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
