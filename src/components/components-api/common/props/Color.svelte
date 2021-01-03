<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Default,
		Description,
	} from "src/components/components-api/props";
</script>

<Prop>
	<Name>color</Name>
	<Signature
		keyword="type"
		name="ButtonColor"
		allowedValues={['"primary"', '"secondary"']}>
		<Default>"primary"</Default>
	</Signature>
	<Description>The color of the component.</Description>
</Prop>
