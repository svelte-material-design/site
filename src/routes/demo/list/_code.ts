import { generateSvelteTagCode } from "src/components/configurator";
import {
	ItemCodeProps,
	getItemProps,
	createItemContentCode,
} from "src/components/configurator/smui-components/list";

export function createItemCode(tag: "Item" | "NavItem", props: ItemCodeProps) {
	return generateSvelteTagCode({
		tag,
		props: getItemProps(props),
		content: createItemContentCode(props),
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

interface SeparatorCodeProps {
	insetPadding: boolean;
	insetLeading: boolean;
	insetTrailing: boolean;
}

export interface ListItemProps extends ItemCodeProps {
	id: string;
}
