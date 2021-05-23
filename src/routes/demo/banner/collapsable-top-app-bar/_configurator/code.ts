import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { commonTopAppBarImport, contentCode } from "../../_configurator/code";
import type { CollapsableTopAppBarConfigurations } from "./types";

export function script(configurations: CollapsableTopAppBarConfigurations) {
	const code = source`
		<script>
			${getImportCode(
				["CollapsableTopAppBar", ...commonTopAppBarImport()],
				"top-app-bar"
			)}
			
			let collapsed;
		</script>
	`;

	return code;
}

export function template(configurations: CollapsableTopAppBarConfigurations) {
	const { prominent, dense, color, alwaysCollapsed } = configurations;

	const code = generateSvelteTagCode({
		tag: "TopAppBar",
		props: [
			"bind:collapsed",
			[color !== "primary", `color=${color}`],
			[prominent, `prominent`],
			[dense, `dense`],
			[alwaysCollapsed, `alwaysCollapsed`],
		],
		content: getContentCode(configurations),
	});

	return removeEmptyLines(code);
}

function getContentCode(configurations: CollapsableTopAppBarConfigurations) {
	return source`
		<Section>
			<NavigationIcon>
				<Icon>menu</Icon>
			</NavigationIcon>
			<Title>Title</Title>
		</Section>
		<Toolbar>
			{#if !collapsed}
				<ActionButton>
					<Icon>event</Icon>
					<Label>Button</Label>
				</ActionButton>
				<ActionIconToggle aria-label="Print this page">
					<IconOn>star</IconOn>
					<IconOff>star_border</IconOff>
				</ActionIconToggle>
			{/if}
			<ActionIcon aria-label="Bookmark this page">
				<Icon>bookmark</Icon>
			</ActionIcon>
		</Toolbar>
		${contentCode()}
	`;
}
