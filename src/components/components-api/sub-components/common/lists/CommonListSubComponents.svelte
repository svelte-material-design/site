<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/components-api/sub-components/common";

	export let indentation: number = 0;
	export let componentItemName: string = "Item";
	export let contentComponentName: string = "Content";
	export let leadingIconComponentName: string = "LeadingIcon";
	export let trailingIconComponentName: string = "TrailingIcon";
	export let listItemRefLabel = "list item";

	const listItemRefLabelStartWithVocal = ["a", "e", "i", "o", "u"].includes(
		listItemRefLabel[0].toLocaleLowerCase()
	);
</script>

<SubComponent {indentation}>
	<Tag href="item">{componentItemName}</Tag>
	<Description
		>A{listItemRefLabelStartWithVocal ? "n" : ""}
		{listItemRefLabel}.</Description
	>
</SubComponent>
<SubComponent indentation={indentation + 1}>
	<Tag href="content">{contentComponentName}</Tag>
	<Description>The content for the {listItemRefLabel}.</Description>
</SubComponent>
<SubComponent indentation={indentation + 2}>
	<Tag href="primary-text">PrimaryText</Tag>
	<Description>
		The primary text for the {listItemRefLabel}. Only one per item is allowed.
	</Description>
</SubComponent>
<SubComponent indentation={indentation + 2}>
	<Tag href="secondary-text">SecondaryText</Tag>
	<Description>
		A secondary text for the {listItemRefLabel}. It must be used only with
		<code>itemsRows</code>
		greater than 1. Each secondary text will fill a row.
	</Description>
</SubComponent>
<LeadingIcon
	indentation={indentation + 2}
	componentName={leadingIconComponentName}
/>
<TrailingIcon
	indentation={indentation + 2}
	componentName={trailingIconComponentName}
/>
<slot name="item" />
<SubComponent {indentation}>
	<Tag href="separator">Separator</Tag>
	<Description>A separator to be used between two items.</Description>
</SubComponent>
