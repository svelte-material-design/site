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
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/common/props";
</script>

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
	<BaseComponentProps>
		<Dom instances={['HTMLButtonElement', 'HTMLAnchorElement']}>
			<span slot="additional-dom-desc">
				It's
				<code>HTMLAnchorElement</code>
				when
				<code>href</code>
				is not empty; otherwise it's
				<code>HTMLButtonElement</code>.
			</span>
		</Dom>
	</BaseComponentProps>
</Props>
