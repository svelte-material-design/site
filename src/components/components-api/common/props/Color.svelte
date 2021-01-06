<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Default,
		Description,
	} from "src/components/components-api/props";

	export let allowedValues: string[];
	export let defaultValue: string = allowedValues[0];
</script>

<Prop>
	<Name>color</Name>
	<Signature keyword="type" name="ButtonColor" {allowedValues}>
		<Default>{defaultValue}</Default>
	</Signature>
	<Description>The color of the component.</Description>
</Prop>
