import { ListRole, ListOrientation, ListType } from "@smui/core/list";
import { StringListToFilter } from "@svelte-material-ui-test/core/common/functions";
import { IconType } from "../icons";
import { GraphicType } from "@smui/core/packages/common";
import { getIconCode } from "src/components/configurator/snippets";
import { generateSvelteTagCode, TagCodeGenerationProps } from "../../code";

export function getProps(props: CodeProps): StringListToFilter {
	const {
		role,
		orientation,
		type,
		density,
		dense,
		itemsRows,
		wrapFocus,
	} = props;

	return [
		"bind:value",
		[role, `role="${role}"`],
		[orientation, `orientation="${orientation}"`],
		[type, `type="${type}"`],
		[density, `density={${density}}`],
		[dense, `dense`],
		[itemsRows > 1, `itemsRows={${itemsRows}}`],
		[!wrapFocus, `wrapFocus={false}`],
	];
}

export function getItemProps(props: ItemCodeProps): StringListToFilter {
	const {
		ariaLabel,
		disabled,
		title,
		value,
		ripple,
		selected,
		activated,
		href,
		listRole,
	} = props;

	return [
		`value="${value}"`,
		[!ripple, "ripple={false}"],
		[disabled, "disabled"],
		[selected, "selected"],
		[activated, "activated"],
		[ariaLabel, `ariaLabel="${ariaLabel}"`],
		[title, `title="${title}"`],
		[href, `href="${href}"`],
		[listRole === "group" || listRole === "radiogroup", "let:selected"],
	];
}

export function createItemLeadingContentCode(props: ItemCodeProps) {
	const {
		leadingIcon,
		imageTxt,
		imageSrc,
		clickableLeadingIcon,
		listRole,
		listType,
		leadingIconTag,
	} = props;

	const tag = leadingIconTag ?? "Icon";

	if (
		listType === "image" ||
		listType === "avatar" ||
		listType === "thumbnail" ||
		listType === "video"
	) {
		return `<img slot="leading" alt="${imageTxt}" src="${imageSrc}" />`;
	} else if ((!listType || listType === "icon") && leadingIcon) {
		return `
		<svelte-fragment slot="leading">
			${getIconCode(
				{
					tag,
					content: leadingIcon === "material-icon" ? "event" : undefined,
					indentSize: 3,
					indentFirstLine: false,
				},
				{
					type:
						leadingIcon === "material-icon"
							? "icon"
							: (leadingIcon as GraphicType),
					clickable: clickableLeadingIcon,
					position: "leading",
				}
			)}
		</svelte-fragment>
		`;
	} else if (listRole === "radiogroup") {
		return `
		<span slot="leading">
			<Radio checked={selected} />
		</span>
		`;
	} else if (listRole === "group") {
		return `
		<span slot="leading">
			<Radio checked={selected} />
		</span>
		`;
	} else {
		return "";
	}
}

export function createItemTrailingContentCode(props: ItemCodeProps) {
	const { trailingIcon, clickableTrailingIcon } = props;

	if (trailingIcon) {
		return `
		<svelte-fragment slot="leading">
			${getIconCode(
				{
					content: trailingIcon === "material-icon" ? "event" : undefined,
					indentSize: 3,
					indentFirstLine: false,
				},
				{
					type:
						trailingIcon === "material-icon"
							? "icon"
							: (trailingIcon as GraphicType),
					clickable: clickableTrailingIcon,
					position: "trailing",
				}
			)}
		</svelte-fragment>
		`;
	} else {
		return "";
	}
}

export function createItemContentCode(props: ItemCodeProps) {
	const { label, labelRow2, labelRow3, listItemsRows } = props;

	return `
		${createItemLeadingContentCode(props)}
		<Content>
			${listItemsRows === 1 ? label : ""}
			${
				listItemsRows > 1
					? `
			<PrimaryText>${label}</PrimaryText>
			<SecondaryText>${labelRow2}</SecondaryText>
			`
					: ""
			}
			${listItemsRows === 3 ? `<SecondaryText>${labelRow3}</SecondaryText>` : ""}
		</Content>
		${createItemTrailingContentCode(props)}
	`;
}

export function createItemCode(
	options: TagCodeGenerationProps,
	props: ItemCodeProps
) {
	return generateSvelteTagCode({
		...options,
		props: getItemProps(props),
		content: createItemContentCode(props),
	});
}

export interface CodeProps {
	role?: ListRole;
	orientation: ListOrientation;
	type: ListType;
	density: number;
	dense: boolean;
	itemsRows: number;
	wrapFocus: boolean;
}

export interface ItemCodeProps {
	value?: string;
	ripple?: boolean;
	disabled?: boolean;
	selected?: boolean;
	href?: string;
	label?: string;
	labelRow2?: string;
	labelRow3?: string;
	title?: string;
	ariaLabel?: string;
	activated?: boolean;
	listRole?: ListRole;
	listItemsRows?: number;
	listType?: ListType;
	clickableLeadingIcon?: boolean;
	leadingIcon?: IconType;
	imageTxt?: string;
	imageSrc?: string;
	trailingIcon?: IconType;
	clickableTrailingIcon?: boolean;
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
// 	clickableLeadingIcon: boolean;
// 	clickableTrailingIcon: boolean;
// }
