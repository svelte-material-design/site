import type { ImageListConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import { getImgPlaceholderSrc } from "src/functions/imgPlacehoder";

export function script(props: ImageListConfigurations) {
	const { aspectContainer, textProtection, label } = props;

	const importsCode = removeEmptyLines(source`
		${getImportCode(
			[
				"ImageList",
				"Item",
				"Image",
				[aspectContainer, "ImageAspectContainer"],
				[textProtection, "Supporting"],
				[label, "Label"],
			],
			"image-list"
		)}
	`);

	const code = source`
		<script>
			${importsCode}
		</script>
	`;

	return code;
}

export function template(configurations: ImageListConfigurations) {
	const { variant, textProtection, aspect, columns } = configurations;

	const code = generateSvelteTagCode({
		tag: "ImageList",
		props: [
			[variant !== "standard", `variant="${variant}"`],
			[textProtection, "textProtection"],
			[aspect && aspect !== "1:1", `aspect="${aspect}"`],
			[columns > 1, `columns={${columns}}`],
		],
		content: `
			${getContentCode(configurations)}
		`,
	});

	return removeEmptyLines(code);
}

function getContentCode(configurations: ImageListConfigurations) {
	return source`
		${getImagesCode(configurations)}
	`;
}

function getImagesCode(configurations: ImageListConfigurations) {
	const res = Array(4)
		.fill("")
		.map((_, index) => {
			return source`
				<Item>
					${getImageCode(index, configurations)}
					${getLabelCode(index, configurations)}
				</Item>
			`;
		});

	return res.join("\n");
}

function getImageCode(index: number, configurations: ImageListConfigurations) {
	const { variant, columns, aspectContainer } = configurations;

	if (aspectContainer) {
		return source`
			<ImageAspectContainer>
				<Image
					src="${getImageSrc(variant, index, columns)}"
					alt="Image ${index + 1}" />
			</ImageAspectContainer>
		`;
	} else {
		return source`
			<Image
				src="${getImageSrc(variant, index, columns)}"
				alt="Image ${index + 1}" />
		`;
	}
}

function getLabelCode(index: number, configurations: ImageListConfigurations) {
	const { label } = configurations;

	if (label) {
		return source`
			<Supporting>
				<Label>Image ${index + 1}</Label>
			</Supporting>
		`;
	} else {
		return "";
	}
}

export function getImageSrc(
	variantValue: ImageListConfigurations["variant"],
	index: number,
	columnsValue: ImageListConfigurations["columns"]
) {
	const height =
		variantValue === "standard"
			? getUnevenImageSize(index, 190, 10)
			: getUnevenImageSize(
					index,
					107,
					200,
					Math.abs,
					columnsValue == 3 ? 2 : 3
			  );

	const width = 190;
	return getImgPlaceholderSrc({
		width,
		height,
		text: `${width}x${height}`,
	});
}

export function getUnevenImageSize(
	index: number,
	base: number,
	variance: number,
	preAdd: (num: number) => number = (num) => num,
	mod: number = 2
) {
	const mid = (index % mod ? Math.cos : Math.sin)(index) * variance;
	return base + Math.floor(preAdd(mid));
}

export function scss() {
	return source`
		@use "@material/image-list";

		:local(.image-list-wrapper) {
			.aspect-16-9 {
				@include image-list.aspect(16 / 9);
			}

			@each $columns in 1, 2, 3, 4 {
				.columns--standard--#{$columns} {
					@include image-list.standard-columns($columns);
				}

				.columns--masonry--#{$columns} {
					@include image-list.masonry-columns($columns);
				}
			}
		}

	`;
}
