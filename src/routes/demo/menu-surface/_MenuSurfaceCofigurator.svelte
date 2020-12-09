<script lang="ts">
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import MenuSurfaceOptions from "./_MenuSurfaceOptions.svelte";
	import { Button } from "@smui/core/button";
	import {
		MenuSurface,
		MenuSurfaceAnchorCorner,
		MenuSurfaceVariant,
		MDCMenuDistance,
	} from "@smui/core/menu-surface";

	let anchorCorner: MenuSurfaceAnchorCorner;
	let anchorFlipRtl: boolean;
	let quickOpen: boolean;
	let open: boolean;
	let variant: MenuSurfaceVariant;

	let anchorMargin: MDCMenuDistance;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "div",
		content: `
			<Button on:click={openMenuSurface}>Open Surface</Button>
			${getMenuSurfaceCode({
				anchorCorner,
				anchorFlipRtl,
				quickOpen,
				open,
				variant,
				anchorMargin,
			})}
		`,
	});

	function getMenuSurfaceCode(props: CodeProps) {
		const {
			open,
			anchorCorner,
			anchorFlipRtl,
			anchorMargin,
			quickOpen,
			variant,
		} = props;
		return generateSvelteTagCode({
			tag: "MenuSurface",
			props: [
				"bind:open",
				[anchorCorner !== "bottom-start", `anchorCorner="${anchorCorner}"`],
				[anchorFlipRtl === false, "anchorFlipRtl={false}"],
				[quickOpen, "quickOpen"],
				[variant, `variant={${variant}}`],
				[
					anchorMargin,
					`anchorMargin={${
						anchorMargin && JSON.stringify(anchorMargin).replaceAll(`"`, "")
					}}`,
				],
			],
			content: `
				<div>Menu surface content</div>
				<Button on:click={closeMenuSurface}>Close Surface</Button>
			`,
			indentSize: 3,
			indentFirstLine: false,
		});
	}

	function openMenuSurface() {
		open = true;
	}

	function closeMenuSurface() {
		open = false;
	}

	interface CodeProps {
		anchorCorner: MenuSurfaceAnchorCorner;
		anchorFlipRtl: boolean;
		quickOpen: boolean;
		open: boolean;
		variant: MenuSurfaceVariant;
		anchorMargin: MDCMenuDistance;
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
				<div class="anchor">
					<Button on:click={openMenuSurface}>Open Surface</Button>
					<MenuSurface
						bind:open
						{anchorCorner}
						{anchorFlipRtl}
						{quickOpen}
						{variant}
						{anchorMargin}>
						<div class="surface">
							<div>Menu surface content</div>
							<Button on:click={closeMenuSurface}>Close Surface</Button>
						</div>
					</MenuSurface>
				</div>
			</div>
		</svelte-fragment>
		<div slot="optionsSidebar">
			<MenuSurfaceOptions
				bind:anchorCorner
				bind:anchorFlipRtl
				bind:quickOpen
				bind:open
				bind:variant
				bind:anchorMargin />
		</div>
	</Configurator>
</div>
