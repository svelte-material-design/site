import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { CheckboxConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		label: "Label",
	} as CheckboxConfigurations;

	const configurations$ = writable<CheckboxConfigurations>(
		initialConfigurations
	);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
