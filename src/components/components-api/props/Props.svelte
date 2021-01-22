<script lang="ts">
	import { Text } from "../common/particles/atoms";
	import { Section } from "../common";

	export let noNotes: boolean;
</script>

<div class="props">
	<Section title="Props">
		<slot slot="table" name="table">
			<slot />
		</slot>
		<slot />
	</Section>
</div>
{#if !noNotes}
	<div class="note">
		<Text>
			<b>Note:</b>
			<slot name="notes" />
			{#if !$$slots.notes}
				any other props are forwarded directly to the root
				<code>HTMLElement</code>
				via
				<code>$$restProps</code>
				magical global.
			{/if}
		</Text>
	</div>
{/if}

<style>
	.props,
	.note {
		margin-bottom: 1em;
	}
</style>
