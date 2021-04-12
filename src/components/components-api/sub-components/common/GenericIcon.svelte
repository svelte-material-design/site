<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let indentation: number;
</script>

<SubComponent {indentation}>
	<Tag href="icon">Icon</Tag>
	<Description>
		<slot>
			Can be used for both leading and trailing icon.
		</slot>
		<!-- A generic icon that can be used for the
		<code>{'<ActionIcon />'}</code>
		or as both leading and trailing icon of the
		<code>{'<ActionButton />'}</code>. -->
	</Description>
</SubComponent>
