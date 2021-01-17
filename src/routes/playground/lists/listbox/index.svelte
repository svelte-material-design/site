<script lang="ts">
	import { ListBox, Item, Content } from "@smui/core/list";

	let value: string;
</script>

<ListBox bind:value>
	<Item value="1">
		<Content>1</Content>
	</Item>
	<Item value="2" selected>
		<Content>2</Content>
	</Item>
</ListBox>

{value}
