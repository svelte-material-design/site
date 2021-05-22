<script lang="ts">
	import {
		List,
		Item,
		Content,
		Checkbox,
	} from "@svelte-material-design/core/list";

	let value: string[] = [];

</script>

<List bind:value role="group">
	<Item value="1">
		<svelte:fragment slot="leading">
			<Checkbox />
		</svelte:fragment>
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
