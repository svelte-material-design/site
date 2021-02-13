<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";

	export let name: string;
	export let allowedValues: string[];
</script>

<Prop>
	<Name>variant</Name>
	<Signature keyword="type" {name} {allowedValues}>
		<Default value="text" />
	</Signature>
	<Description>The variant to use.</Description>
</Prop>
