<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { GenericIcon } from "src/components/components-api/sub-components/common";

	export let indentation: number = 0;
</script>

<SubComponent {indentation}>
	<Tag href="action-button">ActionButton</Tag>
	<Description>
		Like a
		<code>{'<Button />'}</code>
		but used as action for the card.
	</Description>
</SubComponent>
<SubComponent indentation={indentation + 1}>
	<Tag href="label">Label</Tag>
	<Description>
		The label for the
		<code>{'<ActionButton />'}</code>.
	</Description>
</SubComponent>
