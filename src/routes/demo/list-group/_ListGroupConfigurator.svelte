<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import {
		List,
		ListRole,
		ListOrientation,
		Item,
		Content,
	} from "@smui/core/list";
	import { ListGroup, Subheader } from "@smui/core/list/group";

	let role: ListRole;
	let orientation: ListOrientation;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "List",
		props: [
			[role, `role="${role}"`],
			[orientation, `orientation="${orientation}"`],
		],
		content: "",
	});
</script>

<style lang="scss">
	[slot="preview"] {
		min-height: 10em;
		width: 80%;
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<ListGroup>
			<Subheader>List 1</Subheader>
			<List>
				<Item value="group-item-1">
					<Content>Group Item 1</Content>
				</Item>
				<Item value="group-item-2">
					<Content>Group Item 2</Content>
				</Item>
			</List>
			<Subheader>List 2</Subheader>
			<List>
				<Item value="group-item-1">
					<Content>Group Item 1</Content>
				</Item>
				<Item value="group-item-2">
					<Content>Group Item 2</Content>
				</Item>
			</List>
		</ListGroup>
	</div>
	<div slot="optionsSidebar" />
</Configurator>
