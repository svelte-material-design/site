<script lang="ts">
	import { Prop, Name, Default, Description, Signature } from "..";

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
