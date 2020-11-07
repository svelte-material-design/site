<script lang="ts">
	import {
		ImageList,
		Item,
		ImageAspectContainer,
		Image,
		Supporting,
		Label,
	} from "@smui/core/image-list";
	import { List, ListItem, Text } from "@smui/core/list";
	import { Slider } from "@smui/core/slider";
	import { FormField, Label as FormFieldLabel } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Select, Option } from "@smui/core/select";
	import { Checkbox } from "@svelte-material-ui-test/core/packages/checkbox";

	let open: boolean;
	let title: boolean;
	let subtitle: boolean;
	let variant: string = "permanent";
	let layout: "below-top-app-bar" | "full-height";
	let gapValue: number;
	let gapUnit: "em" | "px";
	let columns: number;

	$: gap = gapValue > 0 ? `${gapValue}${gapUnit}` : undefined;

	$: if (!title) subtitle = false;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "Drawer",
		props: [`bind:open`, [variant !== "permanent", `variant=${variant}`]],
		content: `
			${getContentCode(title, subtitle)}
		`,
		after: `

			<AppContent>
${layout === "full-height" ? getTopAppBarCode() : ""}
				App Content
			</AppContent>
		`,
		before: layout === "below-top-app-bar" ? getTopAppBarCode() : "",
	});

	$: if (variant === "permanent") open = true;

	//#region content code
	function getContentCode(
		titleValue: typeof title,
		subtitleValue: typeof subtitle
	) {
		function getHeaderCode() {
			if (titleValue) {
				return `
				<Header>
					<Title>Title</Title>
					${subtitleValue ? `<Subtitle>Subtitle</Subtitle>` : ""}
				</Header>
				`;
			} else {
				return "";
			}
		}

		return `
			<Content>
${getHeaderCode()}
				<List>
					<Item href="javascript:void(0)">
						<Text>Gray Kittens</Text>
					</Item>
					<Item href="javascript:void(0)">
						<Text>A Space Rocket</Text>
					</Item>
					<Item href="javascript:void(0)">
						<Text>100 Pounds of Gravel</Text>
					</Item>
					<Item href="javascript:void(0)">
						<Text>All of the Shrimp</Text>
					</Item>
					<Item href="javascript:void(0)">
						<Text>A Planet with a Mall</Text>
					</Item>
				</List>
			</Content>
		`;
	}
	//#endregion

	function getTopAppBarCode() {
		if (layout) {
			return `
				<TopAppBar${layout === "below-top-app-bar" ? ' style="z-index: 7;"' : ""}>
					<Row>
						<Section>
							<TopAppBarTitle>Top App Bar</TopAppBarTitle>
						</Section>
					</Row>
				</TopAppBar>
			`;
		} else {
			return "";
		}
	}

	function getGalleryWidth(columnsValue: typeof columns) {
		switch (columns) {
			case 2:
				return "10em";
			case 3:
				return "14em";
			default:
				return "20em";
		}
	}
</script>

<style lang="scss">
	.drawer-container {
		position: relative;
		display: flex;
		height: 20em;
		border: 1px solid rgba(0, 0, 0, 0.1);
		overflow: hidden;
		z-index: 0;
		width: 25em;

		:global(.mdc-drawer-scrim) {
			position: absolute;
		}

		:global(.smui-app-content__main-content) {
			padding: 16px;
		}

		:global(.top-app-bar) {
			position: absolute;
		}
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<ImageList
			{gap}
			columns={columns < 2 ? undefined : columns}
			style="width: {getGalleryWidth(columns)};">
			{#each Array(4) as _, i}
				<Item>
					<ImageAspectContainer>
						<Image
							src="https://via.placeholder.com/190x190.png?text=square"
							alt="Image {i + 1}" />
					</ImageAspectContainer>
					<Supporting>
						<Label>Image {i + 1}</Label>
					</Supporting>
				</Item>
			{/each}
		</ImageList>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div>
			<FormField>
				<Select bind:value={variant} nullable={false}>
					<span slot="label">Variant</span>
					<Option value="permanent">Permanent</Option>
					<Option value="dismissible">Dismissible</Option>
					<Option value="modal">Modal</Option>
				</Select>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={open} disabled={variant === 'permanent'} />
				<span slot="label">Open modal</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={title} />
				<span slot="label">Show Title</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={subtitle} disabled={!title} />
				<span slot="label">Show Subtitle</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Select bind:value={layout} nullable={false}>
					<span slot="label">Layout</span>
					<Option />
					<Option value="full-height">Full Height + Top App Bar</Option>
					<Option value="below-top-app-bar">Below Top App Bar</Option>
				</Select>
			</FormField>
		</div>
		<div style="grid-column: span 2">Columns</div>
		<div style="grid-column: span 2">
			<FormField vertical>
				<FormFieldLabel>{columns < 2 ? 'Default' : columns}</FormFieldLabel>
				<Slider step={1} min={1} max={4} bind:value={columns} />
			</FormField>
		</div>
		<div style="grid-column: span 2">Gap</div>
		<div>
			<FormField>
				<Slider
					step={gapUnit === 'em' ? 0.5 : 1}
					max={gapUnit === 'em' ? 3 : 12}
					bind:value={gapValue} />
			</FormField>
		</div>
		<div>
			<FormField style="min-width: 200px">
				<FormFieldLabel style="flex-grow: 1; text-align: right;">
					{gapValue || 'Default'}
				</FormFieldLabel>
				<Select
					nullable={false}
					bind:value={gapUnit}
					style="min-width: calc(150px - 1em); margin-left: 1em;">
					<span slot="label">Unit</span>
					<Option value="em">em</Option>
					<Option value="px">px</Option>
				</Select>
			</FormField>
		</div>
	</div>
</Configurator>
