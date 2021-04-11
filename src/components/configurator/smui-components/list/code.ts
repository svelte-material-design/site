import type { ListItemsStyle } from "@svelte-material-design/core/list";
import type { StringListToFilter } from "@svelte-material-design/core/common/functions";
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
import type {
	ListConfigurations,
	ListItemConfigurations,
	ListItemRole,
	ListRole,
} from "./types";
import { StringList } from "@raythurnevoid/strings-filter";

export function getListImportsMap(props: GetListImportsMapProps) {
	const { items, itemsRows, role, separator } = props.configurations;

	const leadingIcon = items.some((item) => item.leadingIcon);
	const trailingIcon = items.some((item) => item.trailingIcon);

	const map = {
		tag: props.tag ?? "List",
		separator: [separator, "Separator"],
		content: props.contentTag ?? "Content",
		item: props.itemTag ?? "Item",
		leadingIcon: [leadingIcon, props.leadingIconTag ?? "LeadingIcon"],
		trailingIcon: [trailingIcon, props.trailingIconTag ?? "TrailingIcon"],
		primaryText: [itemsRows > 1, "PrimaryText"],
		secondaryText: [itemsRows > 1, "SecondaryText"],
		radio: [role === "radiogroup", "Radio"],
		checkbox: [role === "group", "Checkbox"],
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}

interface GetListImportsMapProps {
	tag?: string;
	contentTag?: string;
	itemTag?: string;
	leadingIconTag?: string;
	trailingIconTag?: string;
	configurations: Partial<ListConfigurations>;
}

export function getListPropsMap(configurations: Partial<ListConfigurations>) {
	const {
		role,
		orientation,
		itemsStyle,
		dense,
		itemsRows,
		wrapFocus,
		selectionType,
		nullable,
		typeahead,
	} = configurations;

	const map = {
		value: [role, `bind:value`],
		selectionType: [selectionType, `selectionType="${selectionType}"`],
		role: [role, `role="${role}"`],
		itemsStyle: [itemsStyle !== "textual", `itemsStyle="${itemsStyle}"`],
		wrapFocus: [wrapFocus, `wrapFocus`],
		dense: [dense, `dense`],
		orientation: [
			orientation && orientation !== "vertical",
			`orientation="${orientation}"`,
		],
		itemsRows: [itemsRows > 1, `itemsRows={${itemsRows}}`],
		nullable: [!nullable, `nullable={${nullable}}`],
		typeahead: [typeahead, `typeahead`],
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}

export function getListProps(
	configurations: Partial<ListConfigurations>
): StringListToFilter {
	const map = getListPropsMap(configurations);

	return [
		map.value,
		map.selectionType,
		map.role,
		map.itemsStyle,
		map.wrapFocus,
		map.dense,
		map.orientation,
		map.itemsRows,
		map.nullable,
		map.typeahead,
	];
}

export function getItemProps(
	listConfigurations: Partial<ListConfigurations>,
	configurations: ListItemConfigurations
): StringListToFilter {
	const { disabled, value, ripple, selected, activated, href } = configurations;
	const { role } = listConfigurations;

	return [
		[role, `role="${listRoleToItemRole(role)}"`],
		[role, `value="${value}"`],
		[!ripple, "ripple={false}"],
		[disabled, "disabled"],
		[selected, "selected"],
		[activated, "activated"],
		[href, `href="${href}"`],
		[role === "group" || role === "radiogroup", "let:selected"],
	];
}

export function createItemLeadingContentCode(
	listConfigurations: Partial<ListConfigurations>,
	configurations: ListItemConfigurations,
	options?: ItemCodeOptions
) {
	const { leadingIcon } = configurations;
	const { role, itemsStyle } = listConfigurations;
	const { imageTxt, imageSrc } = getImageData(itemsStyle) ?? {};

	const tag = options?.leadingIconTag ?? "LeadingIcon";

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
	configurations: ListItemConfigurations,
	options?: ItemCodeOptions
) {
	const { trailingIcon } = configurations;

	const tag = options?.trailingIconTag ?? "TrailingIcon";

	let code: string;

	if (trailingIcon) {
		code = `
			${getIconCode(
				{
					tag,
					content: trailingIcon === "material-icon" ? "event" : undefined,
				},
				{
					type: trailingIcon,
					position: "trailing",
				}
			)}
		`;
	} else {
		code = "";
	}

	return source(code);
}

export function createItemContentCode(
	listConfigurations: Partial<ListConfigurations>,
	configurations: ListItemConfigurations,
	options?: ItemCodeOptions
) {
	const { label, labelRow2, labelRow3 } = configurations;
	const { itemsRows } = listConfigurations;

	const contentTag = options?.contentTag ?? "Content";
	const code = source`
		${createItemLeadingContentCode(listConfigurations, configurations, options)}
		<${contentTag}>
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
		</${contentTag}>
		${createItemTrailingContentCode(configurations, options)}
	`;

	return code;
}

export function createItemCode(
	listConfigurations: Partial<ListConfigurations>,
	configurations: ListItemConfigurations,
	options?: ItemCodeOptions
) {
	const code = generateSvelteTagCode({
		tag: options?.tag ?? "Item",
		props: configurations
			? getItemProps(listConfigurations, configurations)
			: undefined,
		content: configurations
			? createItemContentCode(listConfigurations, configurations, options)
			: undefined,
	});

	return source(code);
}

export function createSeparatorCode(
	configurations: Partial<ListConfigurations>
) {
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

export function createListContentCode(
	configurations: Partial<ListConfigurations>,
	itemsOptions?: ItemCodeOptions
) {
	const { items } = configurations;

	let itemsCode = items.map((item) => {
		return createItemCode(configurations, item, itemsOptions);
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
	configurations: Partial<ListConfigurations>,
	options?: ListCodeOptions
) {
	const code = generateSvelteTagCode({
		tag: options?.tag ?? "List",
		props: options?.props ?? getListProps(configurations),
		content: createListContentCode(configurations, options?.itemsOptions),
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

export function listRoleToItemRole(role: ListRole): ListItemRole {
	switch (role) {
		case "group":
			return "checkbox";
		case "radiogroup":
			return "radio";
		case "listbox":
			return "option";
	}
}

interface ListCodeOptions
	extends Pick<TagCodeGenerationProps, "tag" | "props"> {
	itemsOptions: ItemCodeOptions;
}

interface ItemCodeOptions extends Pick<TagCodeGenerationProps, "tag"> {
	contentTag: string;
	leadingIconTag: string;
	trailingIconTag: string;
}
