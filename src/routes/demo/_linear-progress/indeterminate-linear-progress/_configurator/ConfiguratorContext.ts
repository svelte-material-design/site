import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { writable } from "svelte/store";
import type { IndeterminateLinearProgressConfigurations } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {} as IndeterminateLinearProgressConfigurations;

	const configurations$ = writable<IndeterminateLinearProgressConfigurations>(
		initialConfigurations
	);

	return {
		configurations$,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
