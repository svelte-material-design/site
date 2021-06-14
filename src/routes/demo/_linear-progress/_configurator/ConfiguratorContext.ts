import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { LinearProgressConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		progress: 0.5,
		buffer: 0.7,
	} as LinearProgressConfigurations;

	const configurations$ = writable(initialConfigurations);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
