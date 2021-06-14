<script lang="ts">
	import { List, Item, Content } from "@svelte-material-design/core/list";

	let value: string;
</script>

<List selectionType="single" role="listbox" bind:value>
	<Item value="1">
		<Content>1</Content>
	</Item>
	<Item value="2" selected>
		<Content>2</Content>
	</Item>
</List>

{value}
