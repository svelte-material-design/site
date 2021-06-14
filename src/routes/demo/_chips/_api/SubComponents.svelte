<svelte:options immutable={true} />

<script lang="ts">
	import {
		ExportedTags,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import {
		LeadingIcon,
		TrailingIcon,
		Content,
	} from "src/components/components-api/sub-components/common";

</script>

<ExportedTags>
	<SubComponent>
		<Tag href="chip" mandatory>Chip</Tag>
		<Description>A chip item.</Description>
	</SubComponent>
	<Content mandatory indentation={1} />
	<SubComponent indentation={2}>
		<Tag href="action">Action</Tag>
		<Description>
			The chip primary action, it allows user tab navigation.
		</Description>
	</SubComponent>
	<SubComponent indentation={3}>
		<Tag href="text">Text</Tag>
		<Description>The chip text.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="checkmark">Checkmark</Tag>
		<Description>
			Indicates the checkmark in a filter chip. It is shown when the chip is
			selected.
		</Description>
	</SubComponent>
	<LeadingIcon indentation={1} />
	<TrailingIcon indentation={1} />
</ExportedTags>
