import { generateSvelteTagCode } from "src/components/configurator";
import {
	getItemProps,
	createItemContentCode,
} from "src/components/configurator/smui-components/list";
import type { Item } from "src/components/configurator/common-options/multiple-items";

export function createItemCode(tag: "Item" | "NavItem", props: any) {
	return generateSvelteTagCode({
		tag,
		props: getItemProps(props, {} as any),
		content: createItemContentCode(props, {} as any),
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

export interface ListItemProps extends Item {}
