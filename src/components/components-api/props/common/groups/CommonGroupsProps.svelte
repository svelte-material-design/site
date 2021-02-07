<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
</script>

<Prop>
	<Name readwrite>value</Name>
	<slot name="valueSignature">
		<Signature keyword="string[]">
			<Default value={[]} />
		</Signature>
	</slot>
	<Description>
		<slot name="valueDescription">The value(s) of the selected items.</slot>
	</Description>
</Prop>
<Prop>
	<Name>group</Name>
	<Signature keyword="SelectionGroupBinding" />
	<Description
		>This prop is useful when you want to redirect all related items to another <code
			>{"<CheckboxGroup />"}</code
		>
		or another
		<code>{"<SelectionGroup />"}</code> component.</Description
	>
</Prop>
