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
	import { Input } from ".";

	export let componentName: string = "InputField";
	export let inputComponentName: string = "Input";
	export let inputComponentHref: string = "input";
	export let inputElement: string = "input";

</script>

<Content mandatory>
	The main content of the <code>InputField</code>, it is used to contain the
	mandatory <code>Input</code>.
</Content>
<Input
	indentation={1}
	name={inputComponentName}
	href={inputComponentHref}
	mandatory
	{inputElement}
>
	<slot name="inputAdditionalDescription" slot="additionalDescription" />
</Input>
<slot name="content" />
<LeadingIcon indentation={1} />
<SubComponent>
	<Tag href="helper-text">HelperText</Tag>
	<Description>
		A text placed under the <code>{componentName}</code> to give the user hints.
		No more than 1 must be used.
	</Description>
</SubComponent>
