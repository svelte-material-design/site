<script lang="ts" context="module">
	let count: number = 0;
</script>

<script lang="ts">
	import { UseState } from "@svelte-material-ui-test/core/common/hooks";

	import { onDestroy, onMount, tick } from "svelte";

	import { GroupBinding, SelectableItem } from "./types";

	export let group: GroupBinding;
	export let value: string;
	export let checked: boolean;

	let id: string = `item:${count++}`;
	let dom: HTMLInputElement;
	let mounted: boolean = false;
	let checkedState: UseState;

	const context: SelectableItem = {
		setSelected(newValue: boolean) {
			console.warn("setSelected", checked, newValue);
			setSelected(newValue);
		},
	} as SelectableItem;

	$: updateContext(dom, value);

	onMount(async () => {
		await tick();

		group?.registerItem(context);

		mounted = true;
	});

	onDestroy(() => {
		group?.unregisterItem(context);
	});

	function handleChange() {
		setSelected(dom.checked);
		group?.updateItem(context);
	}

	function setSelected(newValue: boolean) {
		checked = newValue;
		context.selected = checked;
		checkedState?.setValue(checked);
	}

	function updateContext(...deps: any) {
		Object.assign(context, {
			selected: checked,
			dom,
			value,
		});

		if (mounted) {
			group?.updateItem(context);
		}
	}

	function handleSelectedValueUpdate() {
		updateContext();
	}
</script>

<svelte:options immutable={true} />

<UseState
	bind:this={checkedState}
	value={checked}
	onUpdate={handleSelectedValueUpdate} />

<label for={id}>
	<input
		bind:this={dom}
		{id}
		type="checkbox"
		{value}
		{checked}
		on:change={handleChange} />
	{value}
</label>
