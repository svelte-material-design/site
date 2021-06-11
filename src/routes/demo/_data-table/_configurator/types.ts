import {
	Group,
	Item,
} from "src/components/configurator/common-options/multiple-items";
import type { DataTableValue } from "@svelte-material-design/core/data-table";
import type { SelectionType } from "@raythurnevoid/svelte-group-components/ts/selectable";

export interface DataTableConfigurations extends Group<DataTableRow> {
	value: DataTableValue;
	selectionType: SelectionType;
	nullable: boolean;
	showSelectAll: boolean;
	allowSorting: boolean;
	showLinearProgress: boolean;
	showPagination: boolean;
	priceColAlignEnd: boolean;
}

export interface DataTableRow extends Item {
	name: string;
	description: string;
	price: number;
}
