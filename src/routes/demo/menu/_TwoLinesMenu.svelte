<script lang="ts">
	import { Menu } from "@smui/core/menu";
	import { Corner } from "@smui/core/menu-surface";
	import {
		List,
		Item,
		Separator,
		Content,
		PrimaryText,
		SecondaryText,
	} from "@smui/core/list";
	import { MenuButton } from "@smui/core/button";

	let menu: Menu;
	export let clicked: string;
</script>

<div>
	Two line, anchored manually, corner set to Corner.TOP_RIGHT:

	<div>
		<MenuButton {menu} on:click={() => menu.setOpen(true)}>
			Open Menu
		</MenuButton>
		<Menu bind:this={menu} anchorCorner={Corner.TOP_RIGHT}>
			<List itemsRows={2}>
				<Item on:click={() => (clicked = 'Cut')}>
					<Content>
						<PrimaryText>Cut</PrimaryText>
						<SecondaryText>Copy to clipboard and remove.</SecondaryText>
					</Content>
				</Item>
				<Item on:click={() => (clicked = 'Copy')}>
					<Content>
						<PrimaryText>Copy</PrimaryText>
						<SecondaryText>Copy to clipboard.</SecondaryText>
					</Content>
				</Item>
				<Item on:click={() => (clicked = 'Paste')}>
					<Content>
						<PrimaryText>Paste</PrimaryText>
						<SecondaryText>Paste from clipboard.</SecondaryText>
					</Content>
				</Item>
				<Separator />
				<Item on:click={() => (clicked = 'Delete')}>
					<Content>
						<PrimaryText>Delete</PrimaryText>
						<SecondaryText>Remove item.</SecondaryText>
					</Content>
				</Item>
			</List>
		</Menu>
	</div>
</div>
