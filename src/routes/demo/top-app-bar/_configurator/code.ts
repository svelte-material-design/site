import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import type { TopAppBarConfigurations } from "./types";

export function script(configurations: TopAppBarConfigurations) {
	const code = source`
		<script>
			${getImportCode(["TopAppBar", ...commonTopAppBarImport()], "top-app-bar")}
		</script>
	`;

	return removeEmptyLines(code);
}

export function commonTopAppBarImport() {
	return [
		"Section",
		"Title",
		"NavigationIcon",
		"ActionIcon",
		"ActionIconToggle",
		"IconOn",
		"IconOff",
		"Toolbar",
		"ActionButton",
		"Label",
		"Icon",
	];
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
		<Section>
			<NavigationIcon>
				<Icon>menu</Icon>
			</NavigationIcon>
			<Title>Title</Title>
		</Section>
		<Toolbar>
			<ActionButton>
				<Icon>event</Icon>
				<Label>Button</Label>
			</ActionButton>
			<ActionIconToggle aria-label="Print this page">
				<IconOn>star</IconOn>
				<IconOff>star_border</IconOff>
			</ActionIconToggle>
			<ActionIcon aria-label="Bookmark this page">
				<Icon>bookmark</Icon>
			</ActionIcon>
		</Toolbar>
		${contentCode()}
	`;
}

export function contentCode() {
	return source`
	<div slot="content" let:className class={className}
		style="height: 200vh;">Content</div>
	`;
}

export function scss(configurations: TopAppBarConfigurations) {}
