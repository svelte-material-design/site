import type { MenuConfigurations } from "./types";
import { getMenuSurfacePropsMap } from "src/components/configurator/smui-components/menu-surface";
import {
	createListCode,
	getListPropsMap,
} from "src/components/configurator/smui-components/list";
import { StringListToFilter } from "@smui/core/common/functions";
import type { SelectConfigurations } from "src/components/configurator/smui-components/input/types";

export function getMenuPropsMap(configurations: Partial<MenuConfigurations>) {
	const menuSurfaceProps = getMenuSurfacePropsMap(configurations);
	const listProps = getListPropsMap(configurations);

	const map = {
		value: "bind:value",
		open: menuSurfaceProps.open,
		anchorCorner: menuSurfaceProps.anchorCorner,
		anchorFlipRtl: menuSurfaceProps.anchorFlipRtl,
		quickOpen: menuSurfaceProps.quickOpen,
		variant: menuSurfaceProps.variant,
		anchorMargin: menuSurfaceProps.anchorMargin,
		anchor: menuSurfaceProps.anchor,
		hoisted: menuSurfaceProps.hoisted,
		dense: listProps.dense,
		itemsRows: listProps.itemsRows,
		itemsStyle: listProps.itemsStyle,
		nullable: listProps.nullable,
		orientation: listProps.orientation,
		selectionType: listProps.selectionType,
		typeahead: listProps.typeahead,
		wrapFocus: listProps.wrapFocus,
	};

	return map as {
		[k in keyof typeof map]: StringListToFilter[0];
	};
}

export function getSelectOptionsProps(
	configurations: SelectConfigurations
): StringListToFilter {
	const map = getListPropsMap(configurations);

	return [map.dense, map.itemsRows];
}

export function createSelectOptionsCode(configurations: SelectConfigurations) {
	if (configurations.showEmptyOption) {
		configurations = {
			...configurations,
			items: [null, ...configurations.items],
		};
	}

	const code = createListCode(configurations, {
		tag: "Options",
		props: getSelectOptionsProps(configurations),
		itemsOptions: {
			tag: "Option",
			contentTag: "OptionContent",
			leadingIconTag: "OptionLeadingIcon",
			trailingIconTag: "OptionTrailingIcon",
		},
	});

	return code;
}
