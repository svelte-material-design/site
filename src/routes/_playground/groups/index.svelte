<script lang="ts">
	import {
		MultiSelectionGroup,
		SingleSelectionGroup,
	} from "@raythurnevoid/svelte-group-components/esm/selectable";
	import Item from "./_Item.svelte";

	let value: any = ["3"];
	let inputValue: string;
	let multiSelectionType: boolean = true;
	let nullable: boolean = false;
	let reset: boolean = false;

	const initialItems = Array(3)
		.fill({})
		.map((_, index) => {
			return createItem(index);
		});

	let itemsValue: string = JSON.stringify(initialItems, null, 2);
	let items = [...initialItems];

	//items[1].checked = true;
	// items[2].checked = true;
	// items = [...initialItems];

	function applyValue() {
		try {
			value = JSON.parse(inputValue);
			inputValue = "";
		} catch (e) {
			console.error(e);
		}
	}

	function applyItems() {
		try {
			items = JSON.parse(itemsValue);
		} catch (e) {
			console.error(e);
		}
	}

	function createItem(index: number): Item {
		return {
			checked: false,
			value: "" + index,
		};
	}

	function removeItem(index: number) {
		delete items[index];
		items = items.filter((item) => item);
	}

	interface Item {
		checked: boolean;
		value: string;
	}
</script>

<div>
	<input type="text" bind:value={inputValue} />
	<button on:click={applyValue}>apply</button>
</div>

<div>
	<textarea
		style="font-family: consolas;"
		bind:value={itemsValue}
		cols={50}
		rows={20} />
	<button on:click={applyItems}>apply</button>
</div>

<div>
	<label>
		<input type="checkbox" bind:checked={multiSelectionType} />
		multi selection
	</label>
	<label> <input type="checkbox" bind:checked={nullable} /> nullable </label>
</div>

<div><button on:click={() => (reset = !reset)}>reset</button></div>

<div>
	{#if Array.isArray(value)}
		{#if value.length}["{value.join('","')}"]{:else}[]{/if}
	{:else if typeof value === 'string'}"{value}"{:else}{value}{/if}
</div>

{#key reset}
	{#key multiSelectionType}
		{#if multiSelectionType}
			<MultiSelectionGroup bind:value let:group {nullable}>
				{#each items as item, i}
					<div>
						<Item value={item.value} bind:checked={item.checked} {group} />
						<button on:click={() => removeItem(i)}>remove</button>
					</div>
				{/each}
			</MultiSelectionGroup>
		{:else}
			<SingleSelectionGroup bind:value let:group {nullable}>
				{#each items as item, i}
					<div>
						<Item value={item.value} bind:checked={item.checked} {group} />
						<button on:click={() => removeItem(i)}>remove</button>
					</div>
				{/each}
			</SingleSelectionGroup>
		{/if}
	{/key}
{/key}
