<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import {
		LeadingIcon,
		Content,
	} from "src/components/components-api/sub-components/common";

	export let componentName: string = "InputField";
	export let inputComponentName: string = "Input";
	export let inputComponentHref: string = "input";
	export let inputElement: string = "input";
</script>

<Content mandatory>
	The main content of the <code>InputField</code>, it is used to contain the
	mandatory <code>Input</code>.
</Content>
<SubComponent indentation={1}>
	<Tag href={inputComponentHref} mandatory>{inputComponentName}</Tag>
	<Description>
		Wraps the native <code>{inputElement}</code> element.
		<slot name="inputAdditionalDescription" />
	</Description>
</SubComponent>
<slot name="content" />
<LeadingIcon indentation={1} />
<SubComponent>
	<Tag href="helper-text">HelperText</Tag>
	<Description>
		A text placed under the <code>{componentName}</code> to give the user hints.
		No more than 1 must be used.
	</Description>
</SubComponent>
