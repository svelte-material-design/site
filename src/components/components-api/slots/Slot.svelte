<script lang="ts">
	import { Table, Row } from "../common/table";
</script>

<Row>
	<slot />
	{#if $$slots.props}
		<div class="props">
			<Table cols={3}>
				<slot name="props" />
			</Table>
		</div>
	{/if}
	{#if $$slots.contentElements}
		<div class="contentElements">
			Allowed content elements: <slot name="contentElements" />
		</div>
	{/if}
</Row>

<style>
	.props {
		grid-column: span 2;
	}

	.contentElements {
		grid-column: span 2;
	}
</style>
