import { generateSvelteTagCode } from "src/components/configurator";
import { ListRole, ListType } from "@smui/core/list";
import { getIconCode } from "src/components/configurator/snippets";
import { GraphicType } from "@svelte-material-ui-test/core/packages/common";

export function createItemCode(props: ItemCodeProps) {
	const { listRole } = props;

	return generateSvelteTagCode({
		tag: "Item",
		props: [
			`value="${props.value}"`,
			[!props.ripple, "ripple={false}"],
			[props.disabled, "disabled"],
			[props.selected, "selected"],
			[props.ariaLabel, `ariaLabel="${props.ariaLabel}"`],
			[props.title, `title="${props.title}"`],
			[listRole !== "list", "let:selected"],
		],
		content: createItemContentCode(props),
	});
}

function createItemContentCode(props: ItemCodeProps) {
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

function createItemLeadingContentCode(props: ItemCodeProps) {
	const {
		leadingIcon,
		listRole,
		listType,
		imageTxt,
		imageSrc,
		clickableLeadingIcon,
	} = props;

	if (
		listType === "image" ||
		listType === "avatar" ||
		listType === "thumbnail" ||
		listType === "video"
	) {
		return `<img slot="leading" alt="${imageTxt}" src="${imageSrc}" />`;
	} else if (listType === "icon") {
		return `
		<svelte-fragment slot="leading">
			${getIconCode({
				type:
					leadingIcon === "material-icon"
						? "icon"
						: (leadingIcon as GraphicType),
				clickable: clickableLeadingIcon,
				position: "leading",
				content: leadingIcon === "material-icon" ? "event" : undefined,
				indentSize: 3,
				indentFirstLine: false,
			})}
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

function createItemTrailingContentCode(props: ItemCodeProps) {
	const { trailingIcon, clickableTrailingIcon } = props;

	if (trailingIcon) {
		return `
		<svelte-fragment slot="leading">
			${getIconCode({
				type:
					trailingIcon === "material-icon"
						? "icon"
						: (trailingIcon as GraphicType),
				clickable: clickableTrailingIcon,
				position: "trailing",
				content: trailingIcon === "material-icon" ? "event" : undefined,
				indentSize: 3,
				indentFirstLine: false,
			})}
		</svelte-fragment>
		`;
	} else {
		return "";
	}
}

// {#if listType === 'image' || listType === 'avatar' || listType === 'thumbnail' || listType === 'video'}
// 			<img alt={imageTxt} src={imageSrc} />
// 		{:else if listType === 'icon'}
// 			<LeadingIcon
// 				type={leadingIcon}
// 				component={Icon}
// 				button={clickableLeadingIcon} />
// 		{:else if listRole === 'radiogroup'}
// 			<span>
// 				<Radio checked={selected} />
// 			</span>
// 		{:else if listRole === 'group'}
// 			<span>
// 				<Checkbox checked={selected} />
// 			</span>
// 		{/if}

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

// value={item.value}
// disabled={item.disabled}
// ripple={item.ripple}
// bind:selected={item.selected}
// ariaLabel={item.ariaLabel}
// title={item.title}
// label={item.label}
// labelRow2={item.labelRow2}
// labelRow3={item.labelRow3}
// leadingIcon={item.leadingIcon}
// trailingIcon={item.trailingIcon}
// clickableLeadingIcon={item.clickableLeadingIcon}
// clickableTrailingIcon={item.clickableTrailingIcon}
// listRole={role}
// listType={type}
// listItemsRows={itemsRows}

interface ItemCodeProps {
	value: string;
	disabled: boolean;
	ripple: boolean;
	selected: boolean;
	ariaLabel: string;
	title: string;
	label: string;
	labelRow2: string;
	labelRow3: string;
	leadingIcon: string;
	trailingIcon: string;
	clickableLeadingIcon: boolean;
	clickableTrailingIcon: boolean;
	listRole?: ListRole;
	listType: ListType;
	listItemsRows: number;
	imageTxt: string;
	imageSrc: string;
}

interface SeparatorCodeProps {
	insetPadding: boolean;
	insetLeading: boolean;
	insetTrailing: boolean;
}
