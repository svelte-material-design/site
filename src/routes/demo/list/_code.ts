import { generateSvelteTagCode } from "src/components/configurator";

export function createItemCode({
	disabled,
	ripple,
	value,
	ariaLabel,
	title,
	selected,
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

interface ItemCodeProps {
	value: string;
	disabled: boolean;
	ripple: boolean;
	selected: boolean;
	ariaLabel: string;
	title: string;
	label: string;
	leadingIcon: string;
}
