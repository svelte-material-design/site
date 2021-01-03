<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Default,
		Description,
		Props,
	} from "src/components/components-api/props";
	import {
		Ripple,
		Disabled,
		Color,
		Dom,
		Class,
		Style,
		Id,
	} from "src/components/components-api/common/props";
</script>

<style>
</style>

<Props>
	<Prop>
		<Name>variant</Name>
		<Signature
			keyword="type"
			name="ButtonVariant"
			allowedValues={['"text"', '"raised"', '"unelevated"', '"outlined"']}>
			<Default>"text"</Default>
		</Signature>
		<Description>The variant to use.</Description>
	</Prop>
	<Ripple />
	<Disabled />
	<Color />
	<Prop>
		<Name>href</Name>
		<Signature keyword="string" />
		<Description>
			The URL to link to when the button is clicked. If defined, an
			<code>a</code>
			element will be used.
		</Description>
	</Prop>
	<Dom />
	<Class />
	<Id />
</Props>
