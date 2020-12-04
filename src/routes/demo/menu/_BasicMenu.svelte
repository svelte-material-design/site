<script lang="ts">
	import { Menu } from "@smui/core/menu";
	import { List, Item, Separator, Content } from "@smui/core/list";
	import { MenuButton } from "@smui/core/button";

	export let clicked: string;
	let menu;
</script>

<div>
	Anchored automatically:

	<div style="min-width: 100px;">
		<MenuButton {menu} on:click={() => menu.setOpen(true)}>
			Open Menu
		</MenuButton>
		<Menu bind:this={menu}>
			<List>
				<Item on:click={() => (clicked = 'Cut')}>
					<Content>Cut</Content>
				</Item>
				<Item on:click={() => (clicked = 'Copy')}>
					<Content>Copy</Content>
				</Item>
				<Item on:click={() => (clicked = 'Paste')}>
					<Content>Paste</Content>
				</Item>
				<Separator />
				<Item on:click={() => (clicked = 'Delete')}>
					<Content>Delete</Content>
				</Item>
			</List>
		</Menu>
	</div>
</div>
