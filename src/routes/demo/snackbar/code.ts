import { source } from "common-tags";
import {
	generateSvelteTagCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getIconCode } from "src/components/configurator/smui-components/icons";
import { SnackbarConfigurations } from "./types";

export const script = `
<script>
	let open;

	function showSnackbar() {
		open = true;
	}
</script>
`;

export function template(props: SnackbarConfigurations) {
	const code = source`
		${getBtnCode()}
		${getSnackbarCode(props)}
	`;

	return code;
}

function getBtnCode() {
	return `<Button on:click={showSnackbar}>Open snackbar</Button>`;
}

function getSnackbarCode(props: SnackbarConfigurations) {
	const { timeoutMs, stacked, leading, closeOnEscape } = props;

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
			${getActionsCode(props).trim()}
		`,
	});

	return code;
}

function getActionsCode(props: SnackbarConfigurations) {
	const {
		showActionBtn,
		actionRipple,
		showDismiss,
		dismissRipple,
		iconActionType,
	} = props;

	let code: string;

	if (showActionBtn || showDismiss || iconActionType) {
		code = source`
			<Actions>
				${showActionBtn ? `<Action${actionRipple ? "ripple" : ""}>Retry</Action>` : ""}
				${showDismiss ? `<Dismiss${dismissRipple ? "ripple" : ""}></Dismiss>` : ""}
				${getIconActionCode(props).trim()}
			</Actions>
		`;
	} else {
		code = "";
	}

	return removeEmptyLines(code);
}

function getIconActionCode(props: SnackbarConfigurations) {
	const { iconActionType, iconActionRipple } = props;

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
