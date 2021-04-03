import type { DrawerConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { createTopAppBarTagCode } from "src/components/configurator/smui-components/top-app-bar/code";

export function script(configurations: DrawerConfigurations) {
	const {} = configurations;

	const imports = removeEmptyLines(source`
		${getImportCode(
			[
				"Drawer",
				"AppContent",
				"Content",
				"Title",
				"Subtitle",
				"Header",
				"NavList",
				"NavItem",
			],
			"drawer"
		)}
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

	const code = generateSvelteTagCode({
		tag: "AppContent",
		props: [`bind:open`, [variant !== "permanent", `variant="${variant}"`]],
		content: `
			${layout === "full-height" ? getTopAppBarCode(configurations) : ""}
			App Content
		`,
	});

	return code;
}

function getTopAppBarCode(configurations: DrawerConfigurations) {
	const { layout } = configurations;

	if (layout === "below-top-app-bar") {
		const code = createTopAppBarTagCode({
			configurations: {},
			content: `
				<Section>
					<TopAppBarTitle>Top App Bar</TopAppBarTitle>
				</Section>
			`,
		});

		return code;
	} else {
		return "";
	}
}

function getHeaderCode(configurations: DrawerConfigurations) {
	const { title, subtitle } = configurations;

	if (title) {
		const code = generateSvelteTagCode({
			tag: "Header",
			content: `
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
	return source`
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
}
