<script lang="ts">
	import {
		ImageList,
		Item,
		ImageAspectContainer,
		Image,
		Supporting,
		Label,
	} from "@smui/core/image-list";
	import { Slider } from "@smui/core/slider";
	import { FormField, Label as FormFieldLabel } from "@smui/core/form-field";
	import {
		Configurator,
		generateSCSSCode,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Select, Option } from "@smui/core/select";
	import { Checkbox } from "@svelte-material-ui-test/core/packages/checkbox";
	import { getUnevenImageSize } from "./getUnevenImageSize";
	import { ImageListVariant } from "@svelte-material-ui-test/core/packages/image-list/src/types";

	let variant: ImageListVariant;
	let label: boolean = true;
	let textProtection: boolean;
	let aspectContainer: boolean = true;
	let aspect: "1:1" | "16:9" | "4:3";
	let gapValue: number;
	let gapUnit: "em" | "px";
	let columns: number;
	let customShapeRadius: boolean;

	$: if (!label) textProtection = false;
	$: gap = gapValue > 0 ? `${gapValue}${gapUnit}` : undefined;
	$: aspect = !aspectContainer ? (aspect = undefined) : aspect ?? "1:1";

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "ImageList",
		props: [
			[variant !== "standard", `variant="${variant}"`],
			[textProtection, "textProtection"],
			[aspect && aspect !== "1:1", `aspect="${aspect}"`],
			[gap, `gap="${gap}"`],
			[columns > 1, `columns={${columns}}`],
			[customShapeRadius, `class="custom-shape-radius"`],
		],
		content: `
			${getContentCode(variant, columns, aspectContainer, label)}
		`,
	});

	$: scssCode = generateSCSSCode({ content: getSCSSCode(customShapeRadius) });

	$: if (variant === "masonry") aspectContainer = false;

	//#region code
	function getContentCode(
		variantValue: typeof variant,
		columnsValue: typeof columns,
		aspectContainerValue: typeof aspectContainer,
		labelValue: typeof label
	) {
		return `
			${getImagesCode(variantValue, columnsValue, aspectContainerValue, labelValue)}
		`;
	}

	function getImagesCode(
		variantValue: typeof variant,
		columnsValue: typeof columns,
		aspectContainerValue: typeof aspectContainer,
		labelValue: typeof label
	) {
		const res = Array(4)
			.fill("")
			.map((_, index) => {
				return `
				<Item>
				${getImageCode(index, variantValue, columnsValue, aspectContainerValue)}
				${getLabelCode(index, labelValue)}
				</Item>
				`;
			});

		return res.join("\n");
	}

	function getImageCode(
		counter: number,
		variantValue: typeof variant,
		columnsValue: typeof columns,
		aspectContainerValue: typeof aspectContainer
	) {
		if (aspectContainerValue) {
			return `
					<ImageAspectContainer>
						<Image
							src="https://via.placeholder.com/${getImageRes(
								variantValue,
								counter,
								columnsValue
							)}.png?text=${getImageRes(variantValue, counter, columnsValue)}"
							alt="Image ${counter + 1}" />
					</ImageAspectContainer>
			`;
		} else {
			return `
					<Image
						src="https://via.placeholder.com/${getImageRes(
							variantValue,
							counter,
							columnsValue
						)}.png?text=${getImageRes(variantValue, counter, columnsValue)}"
						alt="Image ${counter + 1}" />
			`;
		}
	}

	function getLabelCode(counter: number, labelValue: typeof label) {
		if (labelValue) {
			return `
					<Supporting>
						<Label>Image ${counter}</Label>
					</Supporting>
			`;
		} else {
			return "";
		}
	}

	function getSCSSCode(customShapeRadiusValue: typeof customShapeRadius) {
		if (customShapeRadiusValue) {
			return `
			@use "@material/image-list";

			.custom-shape-radius {
				@include image-list.shape-radius(25px);
			}

			`;
		}
	}
	//#endregion

	function getGalleryWidth(
		variantValue: typeof variant,
		columnsValue: typeof columns
	) {
		switch (columnsValue) {
			case 2:
				return variantValue === "masonry" ? "22em" : "18em";
			case 3:
				return "26em";
			default:
				return "40em";
		}
	}

	function getImageRes(
		variantValue: typeof variant,
		counter: number,
		columnsValue: typeof columns
	) {
		const height =
			variantValue === "standard"
				? getUnevenImageSize(counter, 190, 10)
				: getUnevenImageSize(
						counter,
						107,
						200,
						Math.abs,
						columnsValue == 3 ? 2 : 3
				  );
		return `190x${height}`;
	}
</script>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div
		slot="preview"
		style={columns == 2 && (variant === 'masonry' || aspect === '1:1') ? 'height: 100%;' : ''}>
		<ImageList
			{variant}
			{aspect}
			{gap}
			columns={columns < 2 ? undefined : columns}
			style="width: {getGalleryWidth(variant, columns)};"
			{textProtection}
			class={customShapeRadius ? 'custom-shape-radius' : undefined}>
			{#each Array(4) as _, i}
				<Item>
					{#if variant === 'masonry' || !aspectContainer}
						<Image
							src="https://via.placeholder.com/{getImageRes(variant, i, columns)}.png?text={getImageRes(variant, i, columns)}"
							alt="Image {i + 1}" />
						{#if label}
							<Supporting>
								<Label>Image {i + 1}</Label>
							</Supporting>
						{/if}
					{:else}
						<ImageAspectContainer>
							<Image
								src="https://via.placeholder.com/{getImageRes(variant, i, columns)}.png?text={getImageRes(variant, i, columns)}"
								alt="Image {i + 1}" />
						</ImageAspectContainer>
						{#if label}
							<Supporting>
								<Label>Image {i + 1}</Label>
							</Supporting>
						{/if}
					{/if}
				</Item>
			{/each}
		</ImageList>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div style="grid-column: span 2;">
			<FormField>
				<Select bind:value={variant} nullable={false}>
					<span slot="label">Variant</span>
					<Option value="standard">Standard</Option>
					<Option value="masonry">Masonry</Option>
				</Select>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={label} />
				<span slot="label">Show Label</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={textProtection} disabled={!label} />
				<span slot="label">Text protection</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={aspectContainer}
					disabled={variant === 'masonry'} />
				<span slot="label">Aspect container</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Select bind:value={aspect} disabled={!aspectContainer}>
					<span slot="label">Aspect</span>
					<Option value="1:1">1:1</Option>
					<Option value="16:9">16:9</Option>
					<Option value="4:3">4:3</Option>
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
		<div>
			<FormField>
				<Checkbox bind:checked={customShapeRadius} />
				<span slot="label">Custom shape radius</span>
			</FormField>
		</div>
	</div>
</Configurator>
