<svelte:options immutable={true} />

<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import {
		Ripple,
		AccessibleTouch,
	} from "src/components/components-api/props/common";
	import { CommonInputProps } from "src/components/components-api/props/common/input";
	import {
		Selected,
		Value,
	} from "src/components/components-api/props/common/groups";
	import { InnerInputElementNotes } from "src/components/components-api/props/common/notes";
</script>

<Props>
	<Selected name="checked">
		When <code>false</code> the checkbox is checked, when <code>false</code>
		the checkbox is unchecked. When <code>allowIndeterminate</code> is
		<code>true</code>
		and <code>checked</code> is <code>false</code>, the checkbox is
		indeterminate
	</Selected>
	<Value>
		The value passed to the <code>{"<input />"}</code> element and used by the
		<code>{"<CheckboxGroup />"}</code>.
	</Value>
	<Prop>
		<Name>allowIndeterminated</Name>
		<Signature keyword="boolean" />
		<Description
			>If <code>false</code> the checkbox can be indeterminate.</Description
		>
	</Prop>
	<AccessibleTouch />
	<Ripple />
	<CommonInputProps />
	<span slot="notes">
		<InnerInputElementNotes />
	</span>
</Props>
