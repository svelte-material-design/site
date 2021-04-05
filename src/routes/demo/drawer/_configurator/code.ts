import type { DrawerConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
	slot,
} from "src/components/configurator";
import { createTopAppBarTagCode } from "src/components/configurator/smui-components/top-app-bar/code";

export function script(configurations: DrawerConfigurations) {
	const { layout, title, subtitle } = configurations;

	const imports = removeEmptyLines(source`
		${getImportCode(
			[
				"Drawer",
				"AppContent",
				"Content",
				"NavList",
				"NavItem",
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
			<NavList>
				<NavItem href="javascript:void(0)">
					<ListItemContent>Gray Kittens</ListItemContent>
				</NavItem>
				<NavItem href="javascript:void(0)">
					<ListItemContent>A Space Rocket</ListItemContent>
				</NavItem>
				<NavItem href="javascript:void(0)">
					<ListItemContent>100 Pounds of Gravel</ListItemContent>
				</NavItem>
				<NavItem href="javascript:void(0)">
					<ListItemContent>All of the Shrimp</ListItemContent>
				</NavItem>
				<NavItem href="javascript:void(0)">
					<ListItemContent>A Planet with a Mall</ListItemContent>
				</NavItem>
			</NavList>
		</Content>
	`;

	return removeEmptyLines(code);
}
