import { createContext } from "@raythurnevoid/svelte-context-enhanced";

export const [setCellClass, getCellClass] = createContext<string>();
export const [setRowClass, getRowClass] = createContext<string>();
