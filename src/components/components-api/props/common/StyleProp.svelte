<script lang="ts">
	import { Prop, Name, Description, Signature } from "..";

	export let target: "root" | "main" = "root";
</script>

<Prop>
	<Name>style</Name>
	<Signature keyword="string" />
	<Description>
		A string to be appended into the
		<code>style</code>
		attribute of the {target}
		<code>HTMLElement</code>. It can be used to assign custom inline style to
		the component's root element.
	</Description>
</Prop>
