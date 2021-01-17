<script lang="ts">
	import { Prop, Name, Default, Description, Signature } from "..";
</script>

<Prop>
	<Name>accessibleTouch</Name>
	<Signature keyword="boolean">
		<Default value={false} />
	</Signature>
	<Description>
		Ensure the touch area to be accessible. Material Design spec advises that
		touch targets should be at least 48x48px.
	</Description>
</Prop>
