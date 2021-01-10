import { source } from "common-tags";
import {
	generateSCSSCode,
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import type { TopAppBarConfigurations } from "./types";

export function script(configurations: TopAppBarConfigurations) {
	const code = source`
		<script>
			${getImportCode(
				[
					"TopAppBar",
					"Row",
					"Section",
					"Title",
					"ActionIcon",
					"ActionIconToggle",
					"NavigationButton",
				],
				"top-app-bar"
			)}
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(configurations: TopAppBarConfigurations) {
	const { variant, prominent, dense, color } = configurations;

	const code = generateSvelteTagCode({
		tag: "TopAppBar",
		props: [
			[variant !== "standard", `variant=${variant}`],
			[color !== "primary", `color=${color}`],
			[prominent, `prominent`],
			[dense, `dense`],
		],
		content: getContentCode(configurations),
	});

	return removeEmptyLines(code);
}

function getContentCode(configurations: TopAppBarConfigurations) {
	return source`
		<Row>
			<Section>
				<Navigation>
					<Icon>menu</Icon>
				</Navigation>
				<Title>Title</Title>
			</Section>
			<Section align="end" toolbar>
				<ActionIcon aria-label="Download">
					<Icon>file_download</Icon>
				</ActionIcon>
				<ActionIcon aria-label="Print this page">
					<Icon>print</Icon>
				</ActionIcon>
				<ActionIcon aria-label="Bookmark this page">
					<Icon>bookmark</Icon>
				</ActionIcon>
			</Section>
		</Row>
		<div slot="content">Content</div>
	`;
}

export function scss(configurations: TopAppBarConfigurations) {}
