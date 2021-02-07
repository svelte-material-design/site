import { ListRole, ListOrientation, ListItemsStyle } from "@smui/core/list";
import type { StringListToFilter } from "@smui/core/common/functions";
import type { IconType } from "../icons";
import { getIconCode } from "src/components/configurator/smui-components/icons";
import {
	generateSvelteTagCode,
	removeEmptyLines,
	TagCodeGenerationProps,
} from "../../code";
import { source } from "common-tags";
import {
	getImgPlaceholderSrc,
	ImgPlaceholderParams,
} from "src/functions/imgPlacehoder";

export function getListBoxProps(
	configurations: ListBoxConfigurations
): StringListToFilter {
	const {
		multiSelection,
		orientation,
		itemsStyle,
		dense,
		itemsRows,
		wrapFocus,
	} = configurations;

	return [
		`bind:value`,
		[multiSelection, `multiSelection`],
		[itemsStyle !== "textual", `itemsStyle="${itemsStyle}"`],
		[wrapFocus, `wrapFocus`],
		[dense, `dense`],
		[orientation && orientation !== "vertical", `orientation="${orientation}"`],
		[itemsRows > 1, `itemsRows={${itemsRows}}`],
	];
}

export function getListProps(
	configurations: ListConfigurations
): StringListToFilter {
	const {
		role,
		orientation,
		itemsStyle,
		dense,
		itemsRows,
		wrapFocus,
	} = configurations;

	return [
		[role !== "list", `bind:value`],
		[role !== "list", `role="${role}"`],
		[itemsStyle !== "textual", `itemsStyle="${itemsStyle}"`],
		[wrapFocus, `wrapFocus`],
		[dense, `dense`],
		[orientation && orientation !== "vertical", `orientation="${orientation}"`],
		[itemsRows > 1, `itemsRows={${itemsRows}}`],
	];
}

export function getItemProps(
	listConfigurations: ListConfigurations,
	configurations: ListItemConfigurations
): StringListToFilter {
	const {
		disabled,
		value,
		ripple,
		selected,
		activated,
		href,
		leadingIcon,
		trailingIcon,
	} = configurations;
	const { role, itemsStyle: type } = listConfigurations;

	return [
		[role !== "list", `value="${value}"`],
		[!ripple, "ripple={false}"],
		[disabled, "disabled"],
		[selected, "selected"],
		[activated, "activated"],
		[href, `href="${href}"`],
		[role === "group" || role === "radiogroup", "let:selected"],
		[leadingIcon || type !== "textual", "let:leadingClassName"],
		[trailingIcon, "let:trailingClassName"],
	];
}

export function createItemLeadingContentCode(
	listConfigurations: ListConfigurations,
	configurations: ListItemConfigurations
) {
	const { leadingIcon, leadingIconTag } = configurations;
	const { role, itemsStyle } = listConfigurations;
	const { imageTxt, imageSrc } = getImageData(itemsStyle) ?? {};

	const tag = leadingIconTag ?? "Icon";

	let code: string;

	if (
		itemsStyle === "image" ||
		itemsStyle === "avatar" ||
		itemsStyle === "thumbnail" ||
		itemsStyle === "video"
	) {
		code = `<img class={leadingClassName} alt="${imageTxt}" src="${imageSrc}" />`;
	} else if (
		(!itemsStyle || itemsStyle === "textual" || itemsStyle === "icon") &&
		leadingIcon
	) {
		code = `
			${getIconCode(
				{
					tag,
					content: leadingIcon === "material-icon" ? "event" : undefined,
				},
				{
					type: leadingIcon,
					position: "leading",
					additionalProps: ["class={leadingClassName}"],
				}
			)}
		`;
	} else if (role === "radiogroup") {
		code = `
			<Radio class={leadingClassName} checked={selected} />
		`;
	} else if (role === "group") {
		code = `
			<Radio class={leadingClassName} checked={selected} />
		`;
	} else {
		code = "";
	}

	return source(code);
}

export function createItemTrailingContentCode(
	configurations: ListItemConfigurations
) {
	const { trailingIcon } = configurations;

	let code: string;

	if (trailingIcon) {
		code = `
			${getIconCode(
				{
					content: trailingIcon === "material-icon" ? "event" : undefined,
				},
				{
					type: trailingIcon,
					position: "trailing",
					additionalProps: ["class={trailingClassName}"],
				}
			)}
		`;
	} else {
		code = "";
	}

	return source(code);
}

export function createItemContentCode(
	listConfigurations: ListConfigurations,
	configurations: ListItemConfigurations
) {
	const { label, labelRow2, labelRow3 } = configurations;
	const { itemsRows } = listConfigurations;

	return source`
		${createItemLeadingContentCode(listConfigurations, configurations)}
		<Content>
			${itemsRows === 1 ? label : ""}
			${
				itemsRows > 1
					? `
						<PrimaryText>${label}</PrimaryText>
						<SecondaryText>${labelRow2}</SecondaryText>
					`
					: ""
			}
			${itemsRows === 3 ? `<SecondaryText>${labelRow3}</SecondaryText>` : ""}
		</Content>
		${createItemTrailingContentCode(configurations)}
	`;
}

export function createItemCode(
	options: TagCodeGenerationProps,
	listConfigurations: ListConfigurations,
	configurations: ListItemConfigurations
) {
	const code = generateSvelteTagCode({
		...options,
		props: getItemProps(listConfigurations, configurations),
		content: createItemContentCode(listConfigurations, configurations),
	});

	return source(code);
}

export function createSeparatorCode(configurations: ListConfigurations) {
	const {
		separatorInsetLeading,
		separatorInsetPadding,
		separatorInsetTrailing,
	} = configurations;

	const code = generateSvelteTagCode({
		tag: "Separator",
		props: [
			[separatorInsetLeading, "separatorInsetLeading"],
			[separatorInsetPadding, "separatorInsetPadding"],
			[separatorInsetTrailing, "separatorInsetTrailing"],
		],
	});

	return code;
}

export function createListContentCode(configurations: ListConfigurations) {
	const { items } = configurations;

	let itemsCode = items.map((item) => {
		return createItemCode(
			{
				tag: "Item",
			},
			configurations,
			item
		);
	});

	if (configurations.separator && itemsCode.length > 1) {
		itemsCode = [
			itemsCode[0],
			createSeparatorCode(configurations),
			...itemsCode.slice(1),
		];
	}

	const code = itemsCode.join("\n");

	return code;
}

export function createListCode(
	options: Pick<TagCodeGenerationProps, "tag">,
	configurations: ListConfigurations
) {
	const code = generateSvelteTagCode({
		...options,
		props: getListProps(configurations),
		content: createListContentCode(configurations),
	});

	return removeEmptyLines(code);
}

export function createListBoxCode(configurations: ListBoxConfigurations) {
	const code = generateSvelteTagCode({
		tag: "ListBox",
		props: getListBoxProps(configurations),
		content: createListContentCode(configurations),
	});

	return removeEmptyLines(code);
}

export function getImageData(listItemsStyle: ListItemsStyle) {
	let imageRes: ImgPlaceholderParams;
	switch (listItemsStyle) {
		case "image":
			imageRes = { width: 56, height: 56 };
			break;
		case "avatar":
			imageRes = { width: 40, height: 40 };
			break;
		case "thumbnail":
			imageRes = { width: 40, height: 40 };
			break;
		case "video":
			imageRes = { width: 100, height: 56 };
			break;
		default:
			return null;
	}

	let imageTxt: string;
	if (imageRes) imageTxt = `${imageRes.width}x${imageRes.height}`;
	let imageSrc: string;
	if (imageRes)
		imageSrc = getImgPlaceholderSrc({ ...imageRes, text: imageTxt });

	return {
		imageRes,
		imageSrc,
		imageTxt,
	};
}

export interface CommonListConfigurations {
	wrapFocus: boolean;
	dense: boolean;
	density: number;
	orientation: ListOrientation;
	itemsStyle: ListItemsStyle;
	itemsRows: number;
	separator: boolean;
	separatorInsetPadding: boolean;
	separatorInsetLeading: boolean;
	separatorInsetTrailing: boolean;
	items: ListItemConfigurations[];
}

export interface ListConfigurations extends CommonListConfigurations {
	role?: ListRole;
}

export interface ListBoxConfigurations extends CommonListConfigurations {
	multiSelection: boolean;
}

export interface ListItemConfigurations {
	value?: string;
	ripple?: boolean;
	disabled?: boolean;
	selected?: boolean;
	href?: string;
	label: string;
	labelRow2?: string;
	labelRow3?: string;
	ariaLabel?: string;
	activated?: boolean;
	leadingIcon?: IconType;
	trailingIcon?: IconType;
	leadingIconTag?: string;
}

// export interface ListItemProps {
// 	id: string;
// 	name: string;
// 	value: string;
// 	wrapFocus: boolean;
// 	ripple: boolean;
// 	highlightSelected: boolean;
// 	disabled: boolean;
// 	readonly: boolean;
// 	selected: boolean;
// 	href: string;
// 	label: string;
// 	labelRow2: string;
// 	labelRow3: string;
// 	title: string;
// 	ariaLabel: string;
// 	leadingIcon: IconType;
// 	trailingIcon: IconType;
// }
