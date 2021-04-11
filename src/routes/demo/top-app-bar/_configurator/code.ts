import { source } from "common-tags";
import { getImportCode, removeEmptyLines } from "src/components/configurator";
import { createTopAppBarTagCode } from "src/components/configurator/smui-components/top-app-bar/code";
import type { TopAppBarConfigurations } from "./types";

export function script(props: TopAppBarConfigurations) {
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
	const code = createTopAppBarTagCode({
		configurations,
		content: getContentCode(configurations),
	});

	return code;
}

function getContentCode(props: TopAppBarConfigurations) {
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
	<div slot="content" let:class={className} class={className}
		style="height: 200vh;">Content</div>
	`;
}
