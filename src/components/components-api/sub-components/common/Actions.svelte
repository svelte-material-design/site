<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let indentation: number = 0;

</script>

<SubComponent {indentation}>
	<Tag href="actions">Actions</Tag>
	<Description>
		The area containing the actions. Mandatory if any action component is
		used.
	</Description>
</SubComponent>