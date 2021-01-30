import { createContext } from "@raythurnevoid/svelte-context-enhanced";

export const [setLayoutPath, getLayoutPath] = createContext<string>();

export const [setModuleData, getModuleData] = createContext<ModuleData>();
interface ModuleData {
	name: string;
}
