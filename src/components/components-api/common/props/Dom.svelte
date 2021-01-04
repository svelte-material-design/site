<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";

	export let keyword: string = undefined;
	export let name: string = undefined;
	export let instances: string[];
</script>

<Prop>
	<Name readonly>dom</Name>
	<Signature {keyword} {name} {instances} />
	<Description>
		The root
		<code>HTMLElement</code>.

		<slot />
	</Description>
</Prop>
