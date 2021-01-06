<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Table } from "../particles";
	import { Text } from "../particles/atoms";
</script>

<style>
	.props,
	.note {
		margin-bottom: 1em;
	}
</style>

<div class="props">
	<Typography variant="headline3">Props</Typography>
	<Table cols={3}>
		<slot />
	</Table>
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
