import {
	Group,
	Item,
} from "src/components/configurator/common-options/multiple-items";

export interface DataTableConfigurations extends Group<DataTableRow> {
	value: string | string[];
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
