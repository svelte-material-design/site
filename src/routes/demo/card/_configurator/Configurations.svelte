<svelte:options immutable={true} />

<script lang="ts">
	import type { AspectRatio } from "@svelte-material-design/core/card";
	import { Typography } from "@svelte-material-design/core/typography";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import type { ActionsLayout } from "./types";
	import { Section } from "src/components/configurator/molecules/configurations";

	export let outlined: boolean = false;

	export let showTitle: boolean = false;
	export let showSubtitle: boolean = false;
	export let showText: boolean = true;

	export let showBodyTitle: boolean = false;
	export let showBodySubtitle: boolean = false;
	export let showBodyText: boolean = false;
	export let media: AspectRatio = undefined;
	export let showMediaContent: boolean = false;
	export let horizontalLayout: boolean = false;
	export let clickableBody: boolean = false;
	export let primaryActionRipple: boolean = true;

	export let actionsLayout: ActionsLayout = undefined;

	let isHeadTextDisabled = true;
	$: isHeadTextDisabled =
		!showTitle &&
		!showSubtitle &&
		!showBodyTitle &&
		!showBodySubtitle &&
		!showBodyText &&
		!media &&
		!showMediaContent;

	let isClickableBodyDisabled = true;
	$: isClickableBodyDisabled =
		!showBodyTitle &&
		!showBodySubtitle &&
		!showBodyText &&
		!media &&
		!showMediaContent;

	let isHorizontalLayoutDisabled = true;
	$: if ((!showBodyTitle && !showBodySubtitle && !showBodyText) || !media) {
		isHorizontalLayoutDisabled = true;
		horizontalLayout = false;
	} else {
		isHorizontalLayoutDisabled = false;
	}

	$: if (!media) showMediaContent = false;
	$: if (isHeadTextDisabled) showText = true;
	$: if (isClickableBodyDisabled) clickableBody = false;
	$: if (!clickableBody) primaryActionRipple = true;

	let actionsLayoutOptions = [
		{ value: "", label: "" },
		{ value: "single", label: "Single action" },
		{ value: "multi", label: "Multiple actions" },
		{ value: "icons", label: "Icons actions" },
		{ value: "all", label: "All types actions" },
		{ value: "full-bleed", label: "Full bleed" },
	];
</script>

<Section>
	<Checkbox bind:checked={outlined} label="Outlined" />
</Section>
<Typography>Head</Typography>
<Section>
	<Checkbox bind:checked={showTitle} label="Title" />
	<Checkbox bind:checked={showSubtitle} label="Subtitle" />
	<Checkbox
		bind:checked={showText}
		disabled={isHeadTextDisabled}
		label="Text"
	/>
</Section>
<Typography>Body</Typography>
<Section>
	<Select
		bind:value={media}
		options={[
			{ value: "", label: "" },
			{ value: "16x9", label: "16x9" },
			{ value: "square", label: "Square" },
		]}
		label="Media"
	/>
	<Checkbox
		bind:checked={showMediaContent}
		disabled={!media}
		label="Media content"
	/>
	<Checkbox bind:checked={showBodyTitle} label="Title" />
	<Checkbox bind:checked={showBodySubtitle} label="Subtitle" />
	<Checkbox bind:checked={showBodyText} label="Text" />
	<Checkbox
		bind:checked={clickableBody}
		disabled={isClickableBodyDisabled}
		label="Clickable"
	/>
	<Checkbox
		bind:checked={primaryActionRipple}
		disabled={!clickableBody}
		label="Clickable"
	/>
	<Checkbox
		bind:checked={horizontalLayout}
		disabled={isHorizontalLayoutDisabled}
		label="Horizontal layout"
	/>
</Section>
<Typography>Actions</Typography>
<Section>
	<Select
		bind:value={actionsLayout}
		options={actionsLayoutOptions}
		label="Actions layout"
	/>
</Section>
