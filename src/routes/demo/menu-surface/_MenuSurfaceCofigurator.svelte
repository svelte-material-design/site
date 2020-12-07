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
	import { ListGroup, SubHeader } from "@smui/core/list/group";
	import MenuSurfaceOptions from "./_MenuSurfaceOptions.svelte";
	import { Button } from "@smui/core/button";
	import {
		MenuSurface,
		Corner,
		MenuSurfaceVariant,
		MDCMenuDistance,
	} from "@smui/core/menu-surface";

	let anchorCorner: Corner;
	let quickOpen: boolean;
	let open: boolean;
	let variant: MenuSurfaceVariant;
	let anchor: HTMLElement;

	let anchorMargin: MDCMenuDistance;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "ListGroup",
		props: [],
		content: "",
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

	function openSurface() {
		open = true;
	}

	function closeSurface() {
		open = false;
	}

	interface CodeProps {
		showSubHeader: boolean;
		showSeparator: boolean;
	}
</script>

<style lang="scss">
	.configurator {
		.preview {
			min-height: 10em;
			width: 80%;
			justify-content: flex-start;
		}

		.surface {
			margin: 1em;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		.anchor {
			width: 16em;
		}
	}
</style>

<svelte:options immutable={true} />

<div class="configurator">
	<Configurator {svelteCode} {scssCode}>
		<svelte-fragment slot="preview" let:class={baseClass}>
			<div class="{baseClass} preview">
				<div class="anchor" bind:this={anchor}>
					<Button on:click={openSurface}>Open Surface</Button>
					<MenuSurface
						bind:open
						{anchor}
						{anchorCorner}
						{quickOpen}
						{variant}
						{anchorMargin}>
						<div class="surface">
							<div>Menu surface content</div>
							<Button on:click={closeSurface}>Close Surface</Button>
						</div>
					</MenuSurface>
				</div>
			</div>
		</svelte-fragment>
		<div slot="optionsSidebar">
			<MenuSurfaceOptions
				bind:anchorCorner
				bind:quickOpen
				bind:open
				bind:variant
				bind:anchorMargin />
		</div>
	</Configurator>
</div>
