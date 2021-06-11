import { createContext } from "@raythurnevoid/svelte-context-enhanced";
import { createMultipleItemsHandler } from "src/components/configurator/common-options/multiple-items";
import { writable } from "svelte/store";
import type { DataTableConfigurations, DataTableRow } from "./types";

export function createConfiguratorStore() {
	const initialConfigurations = {
		priceColAlignEnd: true,
	} as DataTableConfigurations;

	const configurations$ = writable(initialConfigurations);

	const rows = [
		{
			value: "broom",
			name: "Broom",
			description: "A wooden handled broom.",
			price: 15,
		},
		{
			value: "dust-pan",
			name: "Dust Pan",
			description: "A plastic dust pan.",
			price: 8,
		},
		{
			value: "mop",
			name: "Mop",
			description: "A strong, durable mop.",
			price: 18,
		},
		{
			value: "bucked",
			name: "Bucket",
			description: "A metal bucket.",
			price: 13,
		},
	];

	function itemFactory(index) {
		return ({
			id: rows[index].value,
			...rows[index],
		} as Partial<DataTableRow>) as DataTableRow;
	}

	const multipleItemsHandler = createMultipleItemsHandler(
		{
			configurations$,
			itemFactory,
		},
		4
	);

	return {
		configurations$: {
			...configurations$,
			...multipleItemsHandler.derivedConfigurations$,
		},
		multipleItemsHandler,
	};
}

export const [setConfiguratorContext, getConfiguratorContext] = createContext<
	ReturnType<typeof createConfiguratorStore>
>();
