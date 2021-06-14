<script lang="ts">
	import { Menu, Item } from "@svelte-material-design/core/menu";
	import { Button } from "@svelte-material-design/core/button";

	let open: boolean = false;

	function openMenu() {
		open = true;
	}
</script>

<Button on:click={openMenu}>Open menu</Button>
<Menu bind:open anchorCorner="bottom-start">
	<Item>Item 0</Item>
	<Item>Item 1</Item>
</Menu>
