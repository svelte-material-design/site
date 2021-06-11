import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";
import type { SnackbarConfigurations } from "./types";

export function script(configurations: SnackbarConfigurations) {
	const { showActionBtn, showDismiss, iconActionType } = configurations;

	const importsCode = getImportCode(
		[
			"SnackBar",
			"Content",
			[showActionBtn || showDismiss || iconActionType, "Actions"],
			[showActionBtn, "ActionButton"],
			[iconActionType, "IconAction"],
			[iconActionType, "Icon"],
			[showDismiss, "Dismiss"],
		],
		"form-field"
	);

	const code = source`
		<script>
			${importsCode}

			let open;
		
			function showSnackbar() {
				open = true;
			}
		</script>
	`;

	return code;
}

export function template(configurations: SnackbarConfigurations) {
	const code = source`
		${getBtnCode()}
		${getSnackbarCode(configurations)}
	`;

	return code;
}

function getBtnCode() {
	return `<Button on:click={showSnackbar}>Open snackbar</Button>`;
}

function getSnackbarCode(configurations: SnackbarConfigurations) {
	const { timeoutMs, stacked, leading, closeOnEscape } = configurations;

	const code = generateSvelteTagCode({
		tag: "Snackbar",
		props: [
			"bind:open",
			[timeoutMs, `timeoutMs=${timeoutMs}`],
			[stacked, "stacked"],
			[leading, "leading"],
			[closeOnEscape, "closeOnEscape"],
		],
		content: source`
			<Content>Content</Content>
			${getActionsCode(configurations).trim()}
		`,
	});

	return code;
}

function getActionsCode(configurations: SnackbarConfigurations) {
	const {
		showActionBtn,
		actionRipple,
		showDismiss,
		dismissRipple,
		iconActionType,
	} = configurations;

	let code: string;

	if (showActionBtn || showDismiss || iconActionType) {
		code = source`
			<Actions>
				${
					showActionBtn
						? `<ActionButton${
								actionRipple ? "ripple" : ""
						  }>Retry</ActionButton>`
						: ""
				}
				${showDismiss ? `<Dismiss${dismissRipple ? "ripple" : ""}></Dismiss>` : ""}
				${getIconActionCode(configurations).trim()}
			</Actions>
		`;
	} else {
		code = "";
	}

	return removeEmptyLines(code);
}

function getIconActionCode(configurations: SnackbarConfigurations) {
	const { iconActionType, iconActionRipple } = configurations;

	let code: string;

	if (iconActionType) {
		code = generateSvelteTagCode({
			tag: "IconAction",
			props: [[iconActionRipple, "ripple"]],
			content: getIconCode(
				{},
				{
					type: iconActionType,
				}
			),
		});
	} else {
		code = "";
	}

	return code;
}
