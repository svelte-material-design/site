<script lang="ts">
	import { List, Item, Text } from "@smui/core/list";

	let value: string;
</script>

<List bind:value role="listbox">
	<Item value="1">
		<Text>1</Text>
	</Item>
	<Item value="2" selected>
		<Text>2</Text>
	</Item>
</List>

{value}
