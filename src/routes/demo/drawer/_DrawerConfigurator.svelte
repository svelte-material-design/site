<script lang="ts">
	import {
		Drawer,
		AppContent,
		Content,
		DrawerVariant,
		Title,
		Subtitle,
		Header,
	} from "@smui/core/drawer";
	import {
		TopAppBar,
		Row,
		Title as TopAppBarTitle,
		Section,
	} from "@smui/core/top-app-bar";
	import { List, Item, Text } from "@smui/core/list";
	import { FormField } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Select, Option } from "@smui/core/select";
	import { Checkbox } from "@smui/core/packages/checkbox";

	let open: boolean;
	let title: boolean;
	let subtitle: boolean;
	let variant: DrawerVariant = "permanent";
	let layout: "below-top-app-bar" | "full-height";

	$: if (!title) subtitle = false;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "Drawer",
		props: [`bind:open`, [variant !== "permanent", `variant="${variant}"`]],
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
		<div class="drawer-container">
			{#if layout === 'below-top-app-bar'}
				<TopAppBar class="top-app-bar" style="z-index: 7;">
					<Row>
						<Section>
							<TopAppBarTitle>Top App Bar</TopAppBarTitle>
						</Section>
					</Row>
				</TopAppBar>
			{/if}

			{#key layout}
				<Drawer {variant} bind:open>
					{#if title}
						<Header>
							<Title>Title</Title>
							{#if subtitle}
								<Subtitle>Subtitle</Subtitle>
							{/if}
						</Header>
					{/if}
					<Content>
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
				</Drawer>
			{/key}

			<AppContent class={'app-content'}>
				<div slot="topAppBar">
					{#if layout === 'full-height'}
						<TopAppBar class="top-app-bar">
							<Row>
								<Section>
									<TopAppBarTitle>Top App Bar</TopAppBarTitle>
								</Section>
							</Row>
						</TopAppBar>
					{/if}
				</div>
				App Content
			</AppContent>
		</div>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div>
			<FormField>
				<Select bind:value={variant} nullable={false}>
					<span slot="label">Variant</span>
					<div slot="options">
						<Option value="permanent">Permanent</Option>
						<Option value="dismissible">Dismissible</Option>
						<Option value="modal">Modal</Option>
					</div>
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
					<div slot="options">
						<Option />
						<Option value="full-height">Full Height + Top App Bar</Option>
						<Option value="below-top-app-bar">Below Top App Bar</Option>
					</div>
				</Select>
			</FormField>
		</div>
	</div>
</Configurator>
