<svelte:options immutable={true} />

<script lang="ts">
	import {
		ListGroup,
		List,
		Item,
		Content,
		SubHeader,
		ListGroupSeparator,
	} from "@smui/core/list";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();
</script>

<ListGroup>
	<List>
		<Item value="group-item-1">
			<Content>List 1 Item 1</Content>
		</Item>
		<Item value="group-item-2">
			<Content>List 1 Item 2</Content>
		</Item>
	</List>
	{#if $configurations$.showSeparator}
		<ListGroupSeparator />
	{/if}
	{#if $configurations$.showSubHeader}
		<SubHeader>List 2 Sub Header</SubHeader>
	{/if}
	<List>
		<Item value="group-item-1">
			<Content>List 2 Item 1</Content>
		</Item>
		<Item value="group-item-2">
			<Content>List 2 Item 2</Content>
		</Item>
	</List>
</ListGroup>
