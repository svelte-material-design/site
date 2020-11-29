<script lang="ts" context="module">
	let count: number = 0;
</script>

<script lang="ts">
	import { GroupBinding } from "./types";
	import { Selectable } from "@smui/core/common/selectable";

	export let group: GroupBinding;
	export let value: string;
	export let checked: boolean;

	let id: string = `item:${count++}`;
	let dom: HTMLInputElement;
	let selectable: Selectable;

	function handleChange() {
		selectable.setSelected(dom.checked);
	}
</script>

<svelte:options immutable={true} />

<Selectable
	bind:this={selectable}
	bind:selected={checked}
	{value}
	{dom}
	{group}>
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
</Selectable>
