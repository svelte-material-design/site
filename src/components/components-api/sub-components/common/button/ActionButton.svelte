<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { ButtonSubComponents } from ".";

	export let indentation: number = 0;
	export let component: string;
	export let name: string = "ActionButton";
	export let href: string = "action-button";

</script>

<SubComponent {indentation}>
	<Tag {href}>ActionButton</Tag>
	<Description>
		Like a
		<code>{"<Button />"}</code>
		but used as action for the {`<${component} />`}.
	</Description>
</SubComponent>
<ButtonSubComponents indentation={indentation + 1} component={name} />
