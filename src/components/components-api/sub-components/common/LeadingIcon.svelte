<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let indentation: number = undefined;
	export let componentName: string = "LeadingIcon";
</script>

<SubComponent {indentation}>
	<Tag href="icon">{componentName}</Tag>
	<Description>Can be used as a leading icon.</Description>
</SubComponent>
