<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let componentName: string = "InputField";
	export let inputComponentName: string = "Input";
	export let inputComponentHref: string = "input";
	export let inputElement: string = "input";
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
		<Tag href={inputComponentHref} mandatory>{inputComponentName}</Tag>
		<Description>
			Wraps the native <code>{inputElement}</code> element.
		</Description>
	</SubComponent>
	<slot name="content"/>
	<SubComponent>
		<Tag href="helper-text">HelperText</Tag>
		<Description>
			A text placed under the <code>{componentName}</code> to give the user hints. No
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
