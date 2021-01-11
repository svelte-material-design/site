<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let indentation: number;
</script>

<svelte:options immutable={true} />

<SubComponent {indentation}>
	<Tag href="icon">Icon</Tag>
	<Description>
		A generic icon that can be used for the
		<code>{'<ActionIcon />'}</code>
		or as both leading and trailing icon of the
		<code>{'<ActionButton />'}</code>.
	</Description>
</SubComponent>
