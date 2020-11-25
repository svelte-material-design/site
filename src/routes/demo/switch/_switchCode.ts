import { generateSvelteTagCode } from "src/components/configurator";

export function getSwitchCode({
	bindValue = true,
	bindDirty = true,
	...props
}: SwitchCodeProps) {
	return getFormFieldCode({
		bindValue,
		bindDirty,
		...props,
	});
}

function getFormFieldCode(props: SwitchCodeProps) {
	return generateSvelteTagCode({
		tag: "FormField",
		content: `
			${props.label ? `<Label>${props.label}</Label>` : ""}
			${getSwitchTagCode(props)}
		`,
	});
}

function getSwitchTagCode(props: SwitchCodeProps) {
	return generateSvelteTagCode({
		tag: "Switch",
		props: [
			[props.bindValue, "bind:checked"],
			[props.bindDirty, "bind:dirty"],
			`name="${props.name}"`,
			[!props.ripple, "ripple={false}"],
			[props.disabled, "disabled"],
			[props.readonly, "readonly"],
			[props.required, `required`],
			[props.title, `title="${props.title}"`],
			[props.ariaLabel, `ariaLabel="${props.ariaLabel}"`],
		],
		indentFirstLine: false,
		indentSize: 3,
	});
}

interface SwitchCodeProps {
	label: string;
	name: string;
	ripple: boolean;
	disabled: boolean;
	required: boolean;
	readonly: boolean;
	title: string;
	ariaLabel: string;
	bindValue?: boolean;
	bindDirty?: boolean;
}
