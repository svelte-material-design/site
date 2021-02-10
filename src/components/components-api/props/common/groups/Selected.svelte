<svelte:options immutable={true} />

<script lang="ts">
	import { Prop, Name, Default, Description, Signature } from "../..";

	export let name: string = "selected";
</script>

<Prop>
	<Name readwrite>{name}</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>
		<slot>
			When <code>true</code> the component is {name}.
		</slot>
	</Description>
</Prop>
