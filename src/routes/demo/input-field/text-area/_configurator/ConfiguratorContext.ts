import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { TextAreaFieldConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		ripple: true,
		label: "Label",
	} as TextAreaFieldConfigurations;

	const configurations$ = writable(initialConfigurations);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();