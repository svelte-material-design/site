<script lang="ts">
	import { Prop, Name, Description, Signature } from "..";

	export let target: "root" | "main" = "root";
</script>

<Prop>
	<Name>class</Name>
	<Signature keyword="string" />
	<Description>
		A string to be prepended into the
		<code>class</code>
		attribute of the {target}
		<code>HTMLElement</code>. It can be used to give one or more custom classes
		to the component's root element.
	</Description>
</Prop>
