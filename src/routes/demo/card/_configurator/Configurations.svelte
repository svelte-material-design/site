<svelte:options immutable={true} />

<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { Section } from "src/components/configurator/molecules/configurations";
	import type { CardConfigurations } from "./types";

	export let configurations: CardConfigurations;
	let showTitle: boolean;
	let showSubtitle: boolean;
	let showText: boolean = true;
	let showBodyTitle: boolean;
	let showBodySubtitle: boolean;
	let showBodyText: boolean;
	let showMediaContent: boolean;

	let isClickableBodyDisabled = true;
	let isHorizontalLayoutDisabled = true;

	handleChange();

	let actionsLayoutOptions = [
		{ value: "", label: "" },
		{ value: "single", label: "Single action" },
		{ value: "multi", label: "Multiple actions" },
		{ value: "icons", label: "Icons actions" },
		{ value: "all", label: "All types actions" },
		{ value: "full-bleed", label: "Full bleed" },
	];

	function handleChange() {
		isClickableBodyDisabled =
			!showBodyTitle &&
			!showBodySubtitle &&
			!showBodyText &&
			!configurations.media &&
			!showMediaContent;

		if (isClickableBodyDisabled) configurations.clickableBody = false;
		if (!configurations.clickableBody)
			configurations.primaryActionRipple = true;

		if (
			(!showBodyTitle && !showBodySubtitle && !showBodyText) ||
			!configurations.media
		) {
			isHorizontalLayoutDisabled = true;
			configurations.horizontalLayout = false;
		} else {
			isHorizontalLayoutDisabled = false;
		}

		configurations.title = showTitle ? "Title" : undefined;
		configurations.subtitle = showSubtitle ? "Subtitle" : undefined;
		configurations.bodyTitle = showBodyTitle ? "Body Title" : undefined;
		configurations.bodySubtitle = showBodySubtitle
			? "Body Subtitle"
			: undefined;
		configurations.bodyText = showBodyText ? "Body Text" : undefined;
		configurations.mediaContent = showMediaContent
			? "Media Content"
			: undefined;
		configurations.text = showText ? "Text" : undefined;

		configurations = { ...configurations };
	}
</script>

<Section>
	<Checkbox
		bind:checked={configurations.outlined}
		label="Outlined"
		on:change={handleChange}
	/>
</Section>
<Typography>Head</Typography>
<Section>
	<Checkbox bind:checked={showTitle} label="Title" on:change={handleChange} />
	<Checkbox
		bind:checked={showSubtitle}
		label="Subtitle"
		on:change={handleChange}
	/>
	<Checkbox bind:checked={showText} label="Text" on:change={handleChange} />
</Section>
<Typography>Body</Typography>
<Section>
	<Select
		bind:value={configurations.media}
		options={[
			{ value: "", label: "" },
			{ value: "16x9", label: "16x9" },
			{ value: "square", label: "Square" },
		]}
		label="Media"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={showMediaContent}
		disabled={!configurations.media}
		label="Media content"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={showBodyTitle}
		label="Title"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={showBodySubtitle}
		label="Subtitle"
		on:change={handleChange}
	/>
	<Checkbox bind:checked={showBodyText} label="Text" on:change={handleChange} />
	<Checkbox
		bind:checked={configurations.clickableBody}
		disabled={isClickableBodyDisabled}
		label="Clickable"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.primaryActionRipple}
		disabled={!configurations.clickableBody}
		label="Clickable"
		on:change={handleChange}
	/>
	<Checkbox
		bind:checked={configurations.horizontalLayout}
		disabled={isHorizontalLayoutDisabled}
		label="Horizontal layout"
		on:change={handleChange}
	/>
</Section>
<Typography>Actions</Typography>
<Section>
	<Select
		bind:value={configurations.actionsLayout}
		options={actionsLayoutOptions}
		label="Actions layout"
		on:change={handleChange}
	/>
</Section>
