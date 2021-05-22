import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { stores } from "@sapper/app";
import { get } from "svelte/store";

export const [setLayoutPath, getLayoutPath] = createContext<string>();

export function appendLayoutPath(path: string) {
	setLayoutPath(`${getLayoutPath()}/${path}`);
}

export const [setModuleData, getModuleData] = createContext<ModuleData>();
interface ModuleData {
	name: string;
}

export function getLink(href: string, allowSelfLink = false) {
	const { page } = stores();
	const $page = get(page) as any;
	const link = `${getLayoutPath()}/${href}`;
	const result = allowSelfLink || $page.path !== link ? link : undefined;
	return result;
}
