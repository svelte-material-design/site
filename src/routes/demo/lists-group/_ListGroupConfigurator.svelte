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
	import {
		ListGroup,
		SubHeader,
		ListGroupSeparator,
	} from "@smui/core/list/group";
	import ListGroupOptions from "./_ListGroupOptions.svelte";

	let showSubHeader: boolean;
	let showSeparator: boolean;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "ListGroup",
		props: [],
		content: getContentCode({
			showSubHeader,
			showSeparator,
		}),
	});

	function getContentCode(props: CodeProps) {
		return `
			${getListCode(1)}
			${getSubHeaderCode(props)}
			${getSeparatorCode(props)}
			${getListCode(2)}
		`;
	}

	function getListCode(index: number) {
		return `
			<List>
				<Item value="group-item-1">
					<Content>List ${index} Item 1</Content>
				</Item>
				<Item value="group-item-2">
					<Content>List ${index} Item 2</Content>
				</Item>
			</List>
		`;
	}

	function getSubHeaderCode({ showSubHeader }: CodeProps) {
		if (showSubHeader) {
			return `
			<SubHeader>List 1 Sub Header</SubHeader>
			`;
		} else {
			return "";
		}
	}

	function getSeparatorCode({ showSeparator }: CodeProps) {
		if (showSeparator) {
			return `
			<Seperator>
			`;
		} else {
			return "";
		}
	}

	interface CodeProps {
		showSubHeader: boolean;
		showSeparator: boolean;
	}
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
			<List>
				<Item value="group-item-1">
					<Content>List 1 Item 1</Content>
				</Item>
				<Item value="group-item-2">
					<Content>List 1 Item 2</Content>
				</Item>
			</List>
			{#if showSeparator}
				<ListGroupSeparator />
			{/if}
			{#if showSubHeader}
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
	</div>
	<div slot="optionsSidebar">
		<ListGroupOptions bind:showSubHeader bind:showSeparator />
	</div>
</Configurator>
