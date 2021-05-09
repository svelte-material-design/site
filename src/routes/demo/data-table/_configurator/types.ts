import {
	Group,
	Item,
} from "src/components/configurator/common-options/multiple-items";
import type { DataTableValue } from "@svelte-material-design/core/data-table";

export interface DataTableConfigurations extends Group<DataTableRow> {
	value: DataTableValue;
	allowSelection: boolean;
	showSelectAll: boolean;
	allowSorting: boolean;
	showLinearProgress: boolean;
	showPagination: boolean;
	nameColNumeric: boolean;
	descColNumeric: boolean;
	priceColNumeric: boolean;
}

export interface DataTableRow extends Item {}
