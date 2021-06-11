import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { SwitchConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		label: "Label",
		ripple: true,
	} as SwitchConfigurations;

	const configurations$ = writable<SwitchConfigurations>(initialConfigurations);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
