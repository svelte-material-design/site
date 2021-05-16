<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { Label } from ".";

	export let indentation: number = 0;

</script>

<SubComponent {indentation}>
	<Tag href="action-button">ActionButton</Tag>
	<Description>
		Like a
		<code>{"<Button />"}</code>
		but used as action for the card.
	</Description>
</SubComponent>
<Label mandatory indentation={indentation + 1} component="ActionButton" />
