<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";
</script>

<Prop>
	<Name readonly>dom</Name>
	<Signature instances={['HTMLButtonElement', 'HTMLAnchorElement']} />
	<Description>
		The root
		<code>HTMLElement</code>. It's
		<code>HTMLAnchorElement</code>
		when
		<code>href</code>
		is not empty; otherwise it's
		<code>HTMLButtonElement</code>.
	</Description>
</Prop>
