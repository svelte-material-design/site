<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let indentation: number = undefined;
</script>

<SubComponent {indentation}>
	<slot name="tag">
		<Tag href="leading-icon">LeadingIcon</Tag>
	</slot>
	<Description>Can be used as a leading icon.</Description>
</SubComponent>
