<svelte:options immutable={true} />

<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
</script>

<Props noNotes>
	<Prop>
		<Name readwrite>value</Name>
		<Signature keyword="string">
			<Default value={[]} />
		</Signature>
		<Description>The value of the checked radio.</Description>
	</Prop>
	<Prop>
		<Name>group</Name>
		<Signature keyword="SelectionGroupBinding" />
		<Description
			>This prop is useful when you want to redirect all related checkboxes to
			another <code>{"<RadioGroup />"}</code> or another
			<code>{"<SelectionGroup />"}</code> component.</Description
		>
	</Prop>
</Props>
