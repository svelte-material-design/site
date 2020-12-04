<script lang="ts">
	import { Menu } from "@smui/core/menu";
	import { List, Item, Separator, Content } from "@smui/core/list";

	export let clicked: string;
</script>

<style>
	:global(.static-menu) {
		position: unset;
	}
</style>

<div>
	<Menu class="static-menu" open>
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
