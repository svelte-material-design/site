import { generateSvelteTagCode } from "src/components/configurator";

export function createItemCode({
	disabled,
	ripple,
	value,
	ariaLabel,
	title,
	selected,
	label,
	leadingIcon,
	trailingIcon,
	clickableLeadingIcon,
	clickableTrailingIcon,
}: ItemCodeProps) {
	return generateSvelteTagCode({
		tag: "Item",
		props: [
			`value="${value}"`,
			[!ripple, "ripple={false}"],
			[disabled, "disabled"],
			[selected, "selected"],
			[ariaLabel, `ariaLabel="${ariaLabel}"`],
			[title, `title="${title}"`],
		],
	});
}

export function createSeparatorCode({
	insetPadding,
	insetLeading,
	insetTrailing,
}: SeparatorCodeProps) {
	return generateSvelteTagCode({
		tag: "Separator",
		props: [
			[insetPadding, "insetPadding"],
			[insetLeading, "insetLeading"],
			[insetTrailing, "insetTrailing"],
		],
	});
}

interface ItemCodeProps {
	value: string;
	disabled: boolean;
	ripple: boolean;
	selected: boolean;
	ariaLabel: string;
	title: string;
	label: string;
	leadingIcon: string;
	trailingIcon: string;
	clickableLeadingIcon: boolean;
	clickableTrailingIcon: boolean;
}

interface SeparatorCodeProps {
	insetPadding: boolean;
	insetLeading: boolean;
	insetTrailing: boolean;
}
