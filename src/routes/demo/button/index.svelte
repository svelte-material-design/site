<script lang="ts">
	import "./button.scss";
	import { Button, Icon, Label, MenuButton } from "@smui/core/button";
	import { Group, GroupItem } from "@smui/core/button/group";
	import { Menu } from "@smui/core/menu";
	import { List, Item, Content, Separator } from "@smui/core/list";
	import { Corner } from "@smui/core/menu-surface";
	import { Typography } from "@smui/core/typography";
	import { Group as MenuGroup, Icon as MenuItemIcon } from "@smui/core/menu";
	import ButtonConfigurator from "./_ButtonConfigurator.svelte";
	import ApiList from "src/components/api-list/APIList.svelte";

	let clicked = 0;
	let menu: Menu;
	let menu2: Menu;
</script>

<section>
	<Typography variant="headline2">Button</Typography>

	<ButtonConfigurator />

	<Typography variant="headline3">Events</Typography>

	<ApiList />

	<div>
		Button groups:
		<br />
		<Group>
			<Button on:click={() => clicked++}>
				<Label>One</Label>
			</Button>
			<Button on:click={() => clicked++}>
				<Label>Two</Label>
			</Button>
			<Button on:click={() => clicked++}>
				<Label>Three</Label>
			</Button>
		</Group>
		<Group variant="raised">
			<Button on:click={() => clicked++} variant="raised">
				<Label>One</Label>
			</Button>
			<Button on:click={() => clicked++} variant="raised">
				<Label>Two</Label>
			</Button>
			<Button on:click={() => clicked++} variant="raised">
				<Label>Three</Label>
			</Button>
		</Group>
		<Group variant="unelevated">
			<Button on:click={() => clicked++} variant="unelevated">
				<Label>One</Label>
			</Button>
			<Button on:click={() => clicked++} variant="unelevated">
				<Label>Two</Label>
			</Button>
			<Button on:click={() => clicked++} variant="unelevated">
				<Label>Three</Label>
			</Button>
		</Group>
		<Group variant="outlined">
			<Button on:click={() => clicked++} variant="outlined">
				<Label>One</Label>
			</Button>
			<Button on:click={() => clicked++} variant="outlined">
				<Label>Two</Label>
			</Button>
			<Button on:click={() => clicked++} variant="outlined">
				<Label>Three</Label>
			</Button>
		</Group>

		<br />
		<br />

		<Group variant="outlined" style="display: flex;">
			<Button
				on:click={() => clicked++}
				variant="unelevated"
				color="primary"
				style="flex-grow: 3;">
				<Label>Primary</Label>
			</Button>
			<Button
				on:click={() => clicked++}
				variant="unelevated"
				color="secondary"
				style="flex-grow: 1;">
				<Label>Secondary</Label>
			</Button>
			<Button
				on:click={() => clicked++}
				variant="unelevated"
				color="secondary"
				style="flex-grow: 1;">
				<Label>Secondary</Label>
			</Button>
		</Group>
	</div>

	<div>
		Split buttons using a button group:
		<br />
		<Group variant="raised">
			<Button on:click={() => clicked++} variant="raised">
				<Label>Do the thing</Label>
			</Button>
			<MenuButton variant="raised" style="padding: 0; min-width: 36px;" {menu}>
				<Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
			</MenuButton>

			<Menu
				bind:this={menu}
				anchorCorner={Corner.TOP_LEFT}
				on:selected={() => clicked++}>
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
							<svelte-fragment slot="leading">
								<MenuItemIcon>check</MenuItemIcon>
							</svelte-fragment>
							<Content>Thing 4</Content>
						</Item>
					</MenuGroup>
				</List>
			</Menu>
		</Group>

		<Group variant="outlined">
			<Button on:click={() => clicked++} variant="outlined">
				<Label>Do the thing</Label>
			</Button>
			<div use:GroupItem>
				<MenuButton
					variant="outlined"
					style="padding: 0; min-width: 36px;"
					menu={menu2}>
					<Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
				</MenuButton>
				<Menu bind:this={menu2} anchorCorner={Corner.TOP_LEFT}>
					<List>
						<Item on:click={() => clicked++}>
							<Content>Thing 1</Content>
						</Item>
						<Item on:click={() => clicked++}>
							<Content>Thing 2</Content>
						</Item>
						<Separator />
						<Item on:click={() => clicked++}>
							<Content>Thing 3</Content>
						</Item>
					</List>
				</Menu>
			</div>
		</Group>
	</div>

	<pre class="status">Clicked: {clicked}</pre>
</section>
