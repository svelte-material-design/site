import { createContext } from "@raythurnevoid/svelte-context-enhanced";

export const [setLayoutPath, getLayoutPath] = createContext<string>();
