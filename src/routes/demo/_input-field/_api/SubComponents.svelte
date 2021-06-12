<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
		ExportedTags,
	} from "src/components/components-api/sub-components";
	import { BaseInputFieldSubComponents } from "src/components/components-api/sub-components/common/input";
	import { TrailingIcon } from "src/components/components-api/sub-components/common";

</script>

<ExportedTags>
	<BaseInputFieldSubComponents
		componentName="InputField"
		inputComponentName="Input"
		inputComponentHref="input"
		inputElement="input"
	>
		<svelte:fragment slot="content">
			<SubComponent indentation={1}>
				<Tag href="prefix">Prefix</Tag>
				<Description>
					A content placed before the <code>Input</code> component. No more than
					1 must be used.
				</Description>
			</SubComponent>
			<SubComponent indentation={1}>
				<Tag href="suffix">Suffix</Tag>
				<Description>
					A content placed after the <code>Input</code> component. No more than 1
					must be used.
				</Description>
			</SubComponent>
			<TrailingIcon indentation={1} />
		</svelte:fragment>
	</BaseInputFieldSubComponents>
	<SubComponent>
		<Tag href="character-counter">CharacterCounter</Tag>
		<Description>
			It is used if there is a character limit. It displays the ratio of
			characters used and the total character limit. No more than 1 must be
			used.
		</Description>
	</SubComponent>
</ExportedTags>
