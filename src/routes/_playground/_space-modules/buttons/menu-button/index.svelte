<script lang="ts">
	import "./index.scss";
	import { Button, Icon, Label } from "@svelte-material-design/core/button";
	import { MenuButton } from "@svelte-material-design/space-modules/buttons/menu-button";
	import {
		Group,
		GroupItem,
	} from "@svelte-material-design/space-modules/buttons/buttons-group";
	import { Menu } from "@svelte-material-design/core/menu";
	import {
		List,
		Item,
		Content,
		Separator,
	} from "@svelte-material-design/core/list";
	import {
		SelectionGroup as MenuGroup,
		Icon as MenuItemIcon,
	} from "@svelte-material-design/core/menu";

</script>

<Group variant="raised">
	<Button variant="raised">
		<Label>Do the thing</Label>
	</Button>
	<MenuButton variant="raised" style="padding: 0; min-width: 36px;">
		<Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
	</MenuButton>

	<Menu anchorCorner={"top-start"}>
		<List>
			<Item>
				<Content>Thing 1</Content>
			</Item>
			<Item>
				<Content>Thing 2</Content>
			</Item>
			<Separator />
			<Item>
				<Content>Thing 3</Content>
			</Item>
			<MenuGroup>
				<Item>
					<svelte:fragment slot="leading">
						<MenuItemIcon>check</MenuItemIcon>
					</svelte:fragment>
					<Content>Thing 4</Content>
				</Item>
			</MenuGroup>
		</List>
	</Menu>
</Group>

<Group variant="outlined">
	<Button variant="outlined">
		<Label>Do the thing</Label>
	</Button>
	<div use:GroupItem>
		<MenuButton variant="outlined" style="padding: 0; min-width: 36px;">
			<Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
		</MenuButton>
		<Menu>
			<List>
				<Item>
					<Content>Thing 1</Content>
				</Item>
				<Item>
					<Content>Thing 2</Content>
				</Item>
				<Separator />
				<Item>
					<Content>Thing 3</Content>
				</Item>
			</List>
		</Menu>
	</div>
</Group>
