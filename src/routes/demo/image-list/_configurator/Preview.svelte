<svelte:options immutable={true} />

<script lang="ts">
	import {
		ImageList,
		Item,
		ImageAspectContainer,
		Image,
		Supporting,
		Label,
	} from "@smui/core/image-list";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { getImageSrc, getUnevenImageSize } from "./code";
	import { classList } from "@raythurnevoid/strings-filter";

	const { configurations$ } = getConfiguratorContext();

	function getGalleryWidth(
		variantValue: typeof $configurations$["variant"],
		columnsValue: typeof $configurations$["columns"]
	) {
		switch (columnsValue) {
			case 1:
				return "9em";
			case 2:
				return variantValue === "masonry" ? "22em" : "18em";
			case 3:
				return "26em";
			default:
				return "40em";
		}
	}

</script>

<div class="image-list-wrapper">
	<ImageList
		variant={$configurations$.variant}
		style="width: {getGalleryWidth(
			$configurations$.variant,
			$configurations$.columns
		)};"
		textProtection={$configurations$.textProtection}
		class={classList([
			`columns--${$configurations$.variant}--${$configurations$.columns}`,
			[$configurations$.aspect === "16:9", "aspect-16-9"],
		])}
	>
		{#each Array(4) as _, i}
			<Item>
				{#if $configurations$.variant === "masonry" || !$configurations$.aspectContainer}
					<Image
						src={getImageSrc(
							$configurations$.variant,
							i,
							$configurations$.columns
						)}
						alt="Image {i + 1}"
					/>
					{#if $configurations$.label}
						<Supporting>
							<Label>Image {i + 1}</Label>
						</Supporting>
					{/if}
				{:else}
					<ImageAspectContainer>
						<Image
							src={getImageSrc(
								$configurations$.variant,
								i,
								$configurations$.columns
							)}
							alt="Image {i + 1}"
						/>
					</ImageAspectContainer>
					{#if $configurations$.label}
						<Supporting>
							<Label>Image {i + 1}</Label>
						</Supporting>
					{/if}
				{/if}
			</Item>
		{/each}
	</ImageList>
</div>

<style lang="scss" global>
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

</style>
