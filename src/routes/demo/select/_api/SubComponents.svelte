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
		<svelte:fragment slot="inputAdditionalDescription">
			The <code>type</code> attribute is forced to <code>hidden</code>.
		</svelte:fragment>
		<svelte:fragment slot="content">
			<SubComponent indentation={2}>
				<Tag href="options" mandatory>Options</Tag>
				<Description>A list containing the select options.</Description>
			</SubComponent>
			<CommonListSubComponents indentation={3} listItemRefLabel="option">
				<slot name="itemTag" slot="itemTag">
					<Tag href="option">Option</Tag>
				</slot>
				<slot name="contentTag" slot="contentTag">
					<Tag href="option-content">OptionContent</Tag>
				</slot>
				<slot name="leadingIconTag" slot="leadingIconTag">
					<Tag href="option-leading-icon">OptionLeadingIcon</Tag>
				</slot>
				<slot name="trailingIconTag" slot="trailingIconTag">
					<Tag href="option-trailing-icon">OptionTrailingIcon</Tag>
				</slot>
			</CommonListSubComponents>
		</svelte:fragment>
	</BaseInputFieldSubComponents>
</SubComponents>
