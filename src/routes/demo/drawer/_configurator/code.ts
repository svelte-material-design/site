import type { DrawerConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
	slot,
} from "src/components/configurator";
import { createTopAppBarTagCode } from "src/components/configurator/smui-components/top-app-bar/code";
import {
	createListCode,
	getListImportsMap,
	getListProps,
} from "src/components/configurator/smui-components/list";

export function script(configurations: DrawerConfigurations) {
	const { layout, title, subtitle } = configurations;

	const map = getListImportsMap({
		tag: "NavList",
		itemTag: "NavItem",
		contentTag: "NavItemContent",
		leadingIconTag: "NavItemLeadingIcon",
		trailingIconTag: "NavItemTrailingIcon",
		configurations,
	});

	const imports = removeEmptyLines(source`
		${getImportCode(
			[
				"Drawer",
				"AppContent",
				"Content",
				map.tag,
				map.item,
				map.content,
				map.leadingIcon,
				map.trailingIcon,
				map.primaryText,
				map.secondaryText,
				map.separator,
				[title, "Header"],
				[title, "Title"],
				[subtitle, "Subtitle"],
			],
			"drawer"
		)}
		${layout ? getImportCode(["TopAppBar", "Section", "Title"], "top-app-bar") : ""}
	`);

	const code = source`
		<script>
			${imports}

			${removeEmptyLines(source`
				let open;
			`)}
		</script>
	`;

	return code;
}

export function template(configurations: DrawerConfigurations) {
	const code = source`
		${getTopAppBarCode(configurations)}
		${getDrawerCode(configurations)}
		${getAppContentCode(configurations)}
	`;

	return code;
}

function getDrawerCode(configurations: DrawerConfigurations) {
	const { variant } = configurations;

	const code = generateSvelteTagCode({
		tag: "Drawer",
		props: [`bind:open`, [variant !== "permanent", `variant="${variant}"`]],
		content: `
			${getContentCode(configurations)}
		`,
	});

	return code;
}

function getAppContentCode(configurations: DrawerConfigurations) {
	const { layout, variant } = configurations;

	const topAppBarCode =
		layout === "full-height"
			? slot({ slot: "topAppBar", content: getTopAppBarCode(configurations) })
			: "";

	const code = generateSvelteTagCode({
		tag: "AppContent",
		props: [`bind:open`, [variant !== "permanent", `variant="${variant}"`]],
		content: source`
			${topAppBarCode}
			App Content
		`,
	});

	return code;
}

function getTopAppBarCode(configurations: DrawerConfigurations) {
	const code = createTopAppBarTagCode({
		configurations: {},
		content: source`
			<Section>
				<TopAppBarTitle>Top App Bar</TopAppBarTitle>
			</Section>
		`,
	});

	return code;
}

function getHeaderCode(configurations: DrawerConfigurations) {
	const { title, subtitle } = configurations;

	if (title) {
		const code = generateSvelteTagCode({
			tag: "Header",
			content: source`
				<Title>${title}</Title>
				${subtitle ? `<Subtitle>${subtitle}</Subtitle>` : ""}
			`,
		});

		return code;
	} else {
		return "";
	}
}

function getContentCode(configurations: DrawerConfigurations) {
	const code = source`
		<Content>
			${getHeaderCode(configurations)}
			${createNavListCode(configurations)}
		</Content>
	`;

	return removeEmptyLines(code);
}

export function createNavListCode(configurations: DrawerConfigurations) {
	const code = createListCode(configurations, {
		tag: "NavList",
		props: getListProps(configurations),
		itemsOptions: {
			tag: "NavItem",
			contentTag: "NavItemContent",
			leadingIconTag: "NavItemLeadingIcon",
			trailingIconTag: "NavItemTrailingIcon",
		},
	});

	return code;
}
