<script lang="ts">
	import { Text } from "../common/particles/atoms";
	import { Section } from "../common";
</script>

<div class="props">
	<Section title="Props" slots={$$slots}>
		<slot slot="table" name="table">
			<slot />
		</slot>
		<slot />
	</Section>
</div>
<div class="note">
	<Text>
		<b>Note:</b>
		any other props are forwarded directly to the root
		<code>HTMLElement</code>
		via
		<code>$$restProps</code>
		magical global.
	</Text>
</div>

<style>
	.props,
	.note {
		margin-bottom: 1em;
	}
</style>
