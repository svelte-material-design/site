import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { stores } from "@sapper/app";
import { ModuleOption } from "src/components/layout/module-layout/types";
import { get, writable, derived } from "svelte/store";

export const [setPageType, getPageType] = createContext<"module" | "api">();
export const [setModulesList, getModulesList] = createContext<ModuleOption[]>();

const [
	internal__setLayoutPath,
	internal__getLayoutPath,
] = createContext<string>();

const currentLayoutPath$ = writable<string>(undefined);

export function setLayoutPath(path: string) {
	const currentModulePath = getLayoutPath();
	const modulePath = currentModulePath ? `${currentModulePath}/${path}` : path;
	internal__setLayoutPath(modulePath);
	setCurrentLayoutPath(modulePath);
}

export function getLayoutPath() {
	return internal__getLayoutPath();
}

export function setCurrentLayoutPath(path: string) {
	currentLayoutPath$.set(path);
}

export function getCurrentLayoutPath() {
	return get(currentLayoutPath$);
}

export function appendLayoutPath(path: string) {
	// const currentModulePath = getLayoutPath();
	// setLayoutPath(currentModulePath ? `${currentModulePath}/${path}` : path);
	setLayoutPath(path);
}

export function getLink(
	href: string,
	options: GetLinkOptions = {
		allowSelfLink: false,
		type: "module",
	}
) {
	const { page } = stores();
	const $page = get(page);
	const modulePath = getCurrentLayoutPath();
	const link =
		options.type === "module"
			? `${modulePath}/${href}`
			: `${modulePath}/api/${href}`;
	const result =
		options.allowSelfLink || $page.path !== link ? link : undefined;

	return result;
}

export function getLink$(
	href: string,
	options: GetLinkOptions = {
		allowSelfLink: false,
		type: "module",
	}
) {
	const { page } = stores();

	function __getLink() {
		return getLink(href, options);
	}

	// const href$ = readable(__getLink(), (set) => {
	// 	const unsubscribe = page.subscribe(() => {
	// 		set(__getLink());
	// 	});

	// 	return function stop() {
	// 		unsubscribe();
	// 	};
	// });

	const href$ = derived(page, () => {
		return __getLink();
	});

	return href$;
}

export function getConfiguratorLink() {
	const modulePath = getLayoutPath();
	return modulePath;
}

export function getDocsLink() {
	const modulePath = getLayoutPath();
	return `${modulePath}/api`;
}

interface GetLinkOptions {
	allowSelfLink?: false;
	type: "api" | "module";
}
