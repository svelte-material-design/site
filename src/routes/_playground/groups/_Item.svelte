<script lang="ts" context="module">
	let count: number = 0;
</script>

<script lang="ts">
	import { Selectable } from "@raythurnevoid/svelte-group-components/esm/selectable";

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

<Selectable bind:this={selectable} bind:selected={checked} {value} {dom}>
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
