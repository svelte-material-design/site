<script lang="ts">
	import { Prop, Name, Default, Description, Signature } from "..";
</script>

<Prop>
	<Name readwrite>checked</Name>
	<Signature keyword="boolean">
		<Default value="false" />
	</Signature>
	<Description
		>{#if $$slots.default}
			<slot />
		{:else}
			When <code>true</code> the component is checked.
		{/if}</Description
	>
</Prop>
