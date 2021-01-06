<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Props,
		Default,
		Signature,
	} from "src/components/components-api/props";
	import { Dom } from "src/components/components-api/props/common";
	import {
		BaseButtonProps,
		CommonIconButtonProps,
	} from "src/components/components-api/props/common/button";
</script>

<Props>
	<Prop>
		<Name readwrite>active</Name>
		<Signature keyword="boolean">
			<Default>false</Default>
		</Signature>
		<Description>
			If
			<code>true</code>
			the button is active and the
			<code>{'<IconOn />'}</code>
			component is shown.
		</Description>
	</Prop>
	<CommonIconButtonProps />
	<Prop>
		<Name>ariaLabelOn</Name>
		<Signature keyword="string" />
		<Description>
			<code>aria-label</code>
			value to use when the toggle is active.
		</Description>
	</Prop>
	<Prop>
		<Name>ariaLabelOff</Name>
		<Signature keyword="string" />
		<Description>
			<code>aria-label</code>
			value to use when the toggle isn't active.
		</Description>
	</Prop>
	<BaseButtonProps>
		<Dom instances={['HTMLButtonElement']} />
	</BaseButtonProps>
</Props>
