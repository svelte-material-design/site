import { derived, get, Writable, writable } from "svelte/store";
import type { Item } from "src/components/configurator/common-options/multiple-items";

export function createMultipleItemsHandler<
	Configurations extends { items: Item[] },
	Items extends Configurations["items"]
>(
	{
		configurations$,
		itemFactory,
	}: MultipleItemsHandlerInput<Configurations, Items>,
	initialLength = 3
) {
	const initialItems = createInitialItems(initialLength);
	const items$ = writable<Configurations["items"]>(initialItems);
	const selectedItem$ = writable<Configurations["items"][0]>(get(items$)[0]);
	const derivedConfigurations$ = derived(
		[configurations$, items$],
		([$configurations$, $items$]) => {
			return {
				...$configurations$,
				items: $items$,
			} as typeof $configurations$;
		}
	);

	selectedItem$.subscribe(($selectedItem$) => {
		// Keep selectedItem instance and correspondent item instance synchronized
		const index = findIndexById($selectedItem$.id);
		if (!~index) return;

		const $items$ = get(items$);

		const newInstance = { ...$selectedItem$ };
		$items$[index] = newInstance;
		items$.set([...$items$]);
		return $items$[index];
	});

	function createItem(index: number) {
		return { ...itemFactory(index), id: "" + index };
	}

	function addItem() {
		items$.update((items) => {
			const index = Number(
				items[items.length - 1]?.id.split(":").slice(-1)[0] ?? -1
			);
			items.push(createItem(index + 1));
			return [...items];
		});
	}

	function removeCurrentItem() {
		items$.update((items) => {
			const $selectedItem$ = get(selectedItem$);

			// TODO: const index = items.indexOf($selectedItem$);
			const index = findIndexById($selectedItem$.id);
			items = [
				...items.slice(0, index),
				...items.slice(index + 1, items.length),
			];

			return [...items];
		});

		selectedItem$.set(get(items$)[0]);
	}

	function reset() {
		items$.update(() => {
			const items = createInitialItems(initialLength);
			return items;
		});

		selectedItem$.set(get(items$)[0]);
	}

	function createInitialItems(length: number) {
		const items = ([] = Array(length)
			.fill("")
			.map((_, index) => {
				return itemFactory(index);
			}));
		return items;
	}

	function updateSelectedInstance() {
		selectedItem$.update(($selectedItem$) => {
			const $items$ = get(items$);
			const index = findIndexById($selectedItem$.id);
			if (!~index) return $selectedItem$;
			const newInstance = { ...$items$[index] };
			$items$[index] = newInstance;
			items$.set([...$items$]);
			return $items$[index];
		});
	}

	function setSelectedItem(id: string) {
		selectedItem$.update((selectedItem) => {
			const $items$ = get(items$);
			const index = findIndexById(id);
			if (!~index) return selectedItem;
			return $items$[index];
		});
	}

	function findIndexById(id: string) {
		const $items$ = get(items$);
		return $items$.findIndex((item) => item.id === id);
	}

	return {
		items$,
		selectedItem$,
		derivedConfigurations$,
		addItem,
		removeCurrentItem,
		reset,
		setSelectedItem,
		updateSelectedInstance,
	};
}

export interface MultipleItemsHandlerInput<
	Configurations extends { items: Item[] },
	Items extends Configurations["items"]
> {
	configurations$: Writable<Configurations>;
	itemFactory(index: number): Items[0];
}

export type MultipleItemsHandler = ReturnType<
	typeof createMultipleItemsHandler
>;
