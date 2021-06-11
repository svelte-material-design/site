<svelte:options immutable={true} />

<script lang="ts">
	import {
		DataTable,
		Head,
		Body,
		Row,
		Cell,
		LinearProgress,
		HeadCell,
		HeadRow,
		Label,
		SortButton,
		Checkbox,
		PageSize,
		Pagination,
		Table,
		TableContainer,
	} from "@svelte-material-design/core/data-table";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$, multipleItemsHandler } = getConfiguratorContext();
	const { items$ } = multipleItemsHandler;

	let pageIndex: number = 0;
	let pageSize: number = 4;
</script>

<DataTable
	bind:value={$configurations$.value}
	selectionType={$configurations$.selectionType}
	nullable={$configurations$.nullable}
>
	<TableContainer>
		<Table>
			<Head>
				<HeadRow>
					{#if $configurations$.selectionType}
						<HeadCell checkbox>
							<Checkbox
								style={!$configurations$.showSelectAll ? "display: none;" : ""}
							/>
						</HeadCell>
					{/if}
					<HeadCell>
						<Label>Name</Label>
						{#if $configurations$.allowSorting}
							<SortButton />
						{/if}
					</HeadCell>
					<HeadCell>
						<Label>Description</Label>
						{#if $configurations$.allowSorting}
							<SortButton />
						{/if}
					</HeadCell>
					<HeadCell alignEnd={$configurations$.priceColAlignEnd}>
						{#if $configurations$.priceColAlignEnd}
							{#if $configurations$.allowSorting}
								<SortButton />
							{/if}
							<Label>Price</Label>
						{:else}
							<Label>Price</Label>
							{#if $configurations$.allowSorting}
								<SortButton />
							{/if}
						{/if}
					</HeadCell>
				</HeadRow>
			</Head>
			<Body>
				{#each $items$ as row (row.name)}
					<Row value={row.value}>
						{#if $configurations$.selectionType}
							<Cell checkbox>
								<Checkbox />
							</Cell>
						{/if}
						<Cell>{row.name}</Cell>
						<Cell>{row.description}</Cell>
						<Cell alignEnd={$configurations$.priceColAlignEnd}>{row.price}</Cell
						>
					</Row>
				{/each}
			</Body>
		</Table>
	</TableContainer>
	{#if $configurations$.showLinearProgress}
		<LinearProgress />
	{/if}
	{#if $configurations$.showPagination}
		<Pagination length={$items$.length} bind:pageIndex bind:pageSize>
			<div slot="pageSize">
				<PageSize pageSizeOptions={[4, 8, 12]}>Rows per page</PageSize>
			</div>
			<div slot="counter" let:first let:end let:length>
				{first}‑{end}
				of
				{length}
			</div>
		</Pagination>
	{/if}
</DataTable>
