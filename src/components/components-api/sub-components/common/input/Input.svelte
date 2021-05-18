<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";

	export let name: string = "Input";
	export let mandatory: boolean = false;
	export let href: string = "input";
	export let inputElement: string = "input";
	export let indentation: number = undefined;

</script>

<SubComponent {indentation}>
	<Tag {href} {mandatory}>{name}</Tag>
	<Description>
		<slot>
			Wraps the native <code>{inputElement}</code> element.
		</slot>
		<slot name="additionalDescription" />
	</Description>
</SubComponent>
