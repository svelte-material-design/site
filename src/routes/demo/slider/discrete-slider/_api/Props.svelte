<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import {
		Ripple,
		AccessibleTouch,
	} from "src/components/components-api/props/common";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
</script>

<Props noNotes>
	<Prop>
		<Name readwrite>value</Name>
		<Signature keyword="string[]">
			<Default value={[]} />
		</Signature>
		<Description>The values of the checked checkboxes.</Description>
	</Prop>
	<Prop>
		<Name>group</Name>
		<Signature keyword="SelectionGroupBinding" />
		<Description
			>This prop is useful when you want to redirect all related checkboxes to
			another <code>{"<CheckboxGroup />"}</code> or another
			<code>{"<SelectionGroup />"}</code> component.</Description
		>
	</Prop>
	<Prop>
		<Name>allowIndeterminated</Name>
		<Signature keyword="boolean" />
		<Description
			>If <code>false</code> the checkbox can be indeterminate.</Description
		>
	</Prop>
</Props>
