<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { Color } from "src/components/components-api/props/common";
</script>

<Color>
	<Signature
		keyword="type"
		name="ButtonColor"
		allowedValues={["primary", "secondary"]}
	>
		<Default value="primary" />
	</Signature>
</Color>
<Prop>
	<Name>prominent</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>
		If
		<code>true</code>
		the top-app-bar is two rows tall.
	</Description>
</Prop>
<Prop>
	<Name>dense</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>If <code>true</code> the top-app-bar is shorter.</Description>
</Prop>
