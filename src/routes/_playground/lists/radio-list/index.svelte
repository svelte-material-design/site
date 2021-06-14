<script lang="ts">
	import {
		List,
		Item,
		Content,
		Radio,
	} from "@svelte-material-design/core/list";

	let value: string[] = [];
</script>

<List bind:value role="radiogroup">
	<Item value="1" let:selected let:leadingClassName>
		<Radio checked={selected} class={leadingClassName} />
		<Content>1</Content>
	</Item>
	<Item value="2">
		<Content>2</Content>
	</Item>
	<Item value="3">
		<Content>3</Content>
	</Item>
</List>

{JSON.stringify(value)}
