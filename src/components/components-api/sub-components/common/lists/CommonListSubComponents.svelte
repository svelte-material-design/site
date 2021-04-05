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
		Content,
	} from "src/components/components-api/sub-components/common";

	export let indentation: number = 0;
	export let listItemRefLabel = "list item";

	const listItemRefLabelStartWithVocal = ["a", "e", "i", "o", "u"].includes(
		listItemRefLabel[0].toLocaleLowerCase()
	);
</script>

<SubComponent {indentation}>
	<slot name="itemTag">
		<Tag href="item">Item</Tag>
	</slot>
	<Description>
		A{listItemRefLabelStartWithVocal ? "n" : ""}
		{listItemRefLabel}.
	</Description>
</SubComponent>
<Content mandatory indentation={indentation + 1}>
	<slot name="contentTag" slot="tag">
		<Tag href="content">Content</Tag>
	</slot>
	The content for the {listItemRefLabel}.
</Content>
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
<LeadingIcon indentation={indentation + 2}>
	<slot name="leadingIconTag" slot="tag" />
</LeadingIcon>
<TrailingIcon indentation={indentation + 2}>
	<slot name="trailingIconTag" slot="tag" />
</TrailingIcon>
<slot name="item" />
<SubComponent {indentation}>
	<Tag href="separator">Separator</Tag>
	<Description>A separator to be used between two items.</Description>
</SubComponent>
