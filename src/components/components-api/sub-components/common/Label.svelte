<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let mandatory: boolean = false;
	export let indentation: number = 0;
	export let component: string = undefined;

</script>

<SubComponent {indentation}>
	<Tag {mandatory} href="label">Label</Tag>
	<Description>
		The text of the
		{#if component}
			<code>{`<${component} />`}</code>
		{:else}
			component
		{/if}.
	</Description>
</SubComponent>
