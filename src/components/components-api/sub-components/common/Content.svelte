<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let mandatory: boolean = false;
	export let indentation: number = 0;
</script>

<SubComponent {indentation}>
	<slot name="tag">
		<Tag href="content" {mandatory}>Content</Tag>
	</slot>
	<Description>
		<slot>The main content of the component.</slot>
	</Description>
</SubComponent>
