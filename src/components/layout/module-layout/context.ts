import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { stores } from "@sapper/app";
import { ModuleOption } from "src/components/layout/module-layout/types";
import { get } from "svelte/store";

export const [setLayoutPath, getLayoutPath] = createContext<string>();
export const [setPageType, getPageType] = createContext<"module" | "api">();
export const [setModulesList, getModulesList] = createContext<ModuleOption[]>();

export function appendLayoutPath(path: string) {
	setLayoutPath(`${getLayoutPath()}/${path}`);
}

export function getLink(
	href: string,
	options: GetLinkOptions = {
		allowSelfLink: false,
		type: "module",
	}
) {
	const { page } = stores();
	const $page = get(page) as any;
	const modulePath = getLayoutPath();
	const link =
		options.type === "module"
			? `${modulePath}/${href}`
			: `${modulePath}/api/${href}`;
	const result =
		options.allowSelfLink || $page.path !== link ? link : undefined;
	return result;
}

interface GetLinkOptions {
	allowSelfLink?: false;
	type: "api" | "module";
}
