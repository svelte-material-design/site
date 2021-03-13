<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
</script>

<SubComponents>
	<SubComponent>
		<Tag href="content" mandatory>Content</Tag>
		<Description>
			The main content of the <code>InputField</code>, it is used to contain the
			mandatory <code>Input</code>.
		</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="input" mandatory>Input</Tag>
		<Description>
			Wraps the native <code>input</code> element.
		</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="prefix">Prefix</Tag>
		<Description>
			A content placed before the <code>Input</code> component. No more than 1 must
			be used.
		</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="suffix">Suffix</Tag>
		<Description>
			A content placed after the <code>Input</code> component. No more than 1 must
			be used.
		</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="leading-icon">LeadingIcon</Tag>
		<Description>The leading icon. No more than 1 must be used.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="trailing-icon">TrailingIcon</Tag>
		<Description>The trailing icon. No more than 1 must be used.</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="helper-text">HelperText</Tag>
		<Description>
			A text placed under the <code>InputField</code> to give the user hints. No
			more than 1 must be used.
		</Description>
	</SubComponent>
	<SubComponent>
		<Tag href="character-counter">CharacterCounter</Tag>
		<Description>
			It is used if there is a character limit. It displays the ratio of
			characters used and the total character limit. No more than 1 must be
			used.
		</Description>
	</SubComponent>
</SubComponents>
