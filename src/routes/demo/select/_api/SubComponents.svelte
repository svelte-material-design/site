<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
		SubComponents,
	} from "src/components/components-api/sub-components";
	import { BaseInputFieldSubComponents } from "src/components/components-api/sub-components/common/input";
	import { CommonListSubComponents } from "src/components/components-api/sub-components/common/lists";
</script>

<SubComponents>
	<BaseInputFieldSubComponents
		componentName="Select"
		inputComponentName="Input"
		inputComponentHref="input"
		inputElement="input"
	>
		<svelte-fragment slot="content">
			<SubComponent indentation={2}>
				<Tag href="selection-group" mandatory>Options</Tag>
				<Description>A list containing the select options.</Description>
			</SubComponent>
			<CommonListSubComponents
				indentation={3}
				componentItemName="Option"
				contentComponentName="OptionContent"
				leadingIconComponentName="OptionLeadingIcon"
				trailingIconComponentName="OptionTrailingIcon"
				listItemRefLabel="option"
			/>
		</svelte-fragment>
	</BaseInputFieldSubComponents>
</SubComponents>
