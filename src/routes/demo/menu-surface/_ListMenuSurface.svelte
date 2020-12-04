<script lang="ts">
	import { MenuSurface } from "@smui/core/menu-surface";
	import { List, Item, Separator, Content } from "@smui/core/list";

	let clicked = "";
</script>

<div>
	<MenuSurface class="non-abosulte-menu-surface" open>
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
	</MenuSurface>
</div>

<pre class="status">Clicked: {clicked}</pre>
