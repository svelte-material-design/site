<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let indentation: number = 0;
	export let component: string;

</script>

<SubComponent {indentation}>
	<Tag href="action-icon">ActionIcon</Tag>
	<Description>
		Like an
		<code>{"<IconButton />"}</code>
		but used as action for the {`<${component} />`}.
	</Description>
</SubComponent>
