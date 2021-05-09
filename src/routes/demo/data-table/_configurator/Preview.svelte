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
	} from "@svelte-material-design/core/data-table";
	import type { SortEventDetail } from "@svelte-material-design/core/data-table";
	import type { DataTableConfigurations } from "./types";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	let pageIndex: number = undefined;
	let pageSize: number = undefined;

	let allRows: RowData[] = [
		{
			name: "Broom",
			description: "A wooden handled broom.",
			price: 15,
		},
		{
			name: "Dust Pan",
			description: "A plastic dust pan.",
			price: 8,
		},
		{
			name: "Mop",
			description: "A strong, durable mop.",
			price: 18,
		},
		{
			name: "Bucket",
			description: "A metal bucket.",
			price: 13,
		},
		{
			name: "Ray Gun",
			description: "An alien artifact.",
			price: 99.99,
		},
		{
			name: "Big gun",
			description: "To kick asses.",
			price: 50,
		},
		{
			name: "Compound V",
			description: "To get nice and strong.",
			price: 14.03,
		},
		{
			name: "Script Hook",
			description: "To shape the world like The Matrix.",
			price: 13,
		},
		{
			name: "Riff",
			description: "Lot of people will follows you.",
			price: 5,
		},
	];

	let rows: RowData[];

	$: initPagination($configurations$.showPagination);
	function initPagination(
		showPagination: DataTableConfigurations["showPagination"]
	) {
		if (showPagination) {
			$configurations$.allowSelection = false;
			pageIndex = undefined;
			pageSize = undefined;
			rows = [...allRows];
		} else {
			pageIndex = 0;
			pageSize = 4;
			rows = allRows.slice(0, 4);
		}
	}

	function sort(sortData: SortEventDetail) {
		rows = rows.sort((a, b) => {
			if (a[sortData.columnId] > b[sortData.columnId]) return 1;
			else if (a[sortData.columnId] < b[sortData.columnId]) return -1;
			else return 0;
		});

		if (sortData.sortValue === "ascending") {
			rows = [...rows];
		} else if (sortData.sortValue === "descending") {
			rows = [...rows.reverse()];
		}
	}

	interface RowData {
		name: string;
		description: string;
		price: number;
		selected?: boolean;
	}
</script>

<DataTable
	ariaLabel="Items list"
	bind:value={$configurations$.value}
	on:sort={(event) => sort(event.detail)}
>
	<Table>
		<Head>
			<HeadRow>
				{#if $configurations$.allowSelection}
					<HeadCell checkbox>
						<Checkbox
							style={!$configurations$.showSelectAll ? "display: none;" : ""}
						/>
					</HeadCell>
				{/if}
				<HeadCell columnId="name" numeric={$configurations$.nameColNumeric}>
					{#if $configurations$.nameColNumeric}
						{#if $configurations$.allowSorting}
							<SortButton />
						{/if}
						<Label>Name</Label>
					{:else}
						<Label>Name</Label>
						{#if $configurations$.allowSorting}
							<SortButton />
						{/if}
					{/if}
				</HeadCell>
				<HeadCell
					columnId="description"
					numeric={$configurations$.descColNumeric}
				>
					{#if $configurations$.descColNumeric}
						{#if $configurations$.allowSorting}
							<SortButton />
						{/if}
						<Label>Description</Label>
					{:else}
						<Label>Description</Label>
						{#if $configurations$.allowSorting}
							<SortButton />
						{/if}
					{/if}
				</HeadCell>
				<HeadCell columnId="price" numeric={$configurations$.priceColNumeric}>
					{#if $configurations$.priceColNumeric}
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
			{#if pageIndex != null && pageSize != null}
				{#each rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize) as row (row.name)}
					<Row value={row.name}>
						{#if $configurations$.allowSelection}
							<Cell checkbox>
								<Checkbox />
							</Cell>
						{/if}
						<Cell numeric={$configurations$.nameColNumeric}>{row.name}</Cell>
						<Cell numeric={$configurations$.descColNumeric}
							>{row.description}</Cell
						>
						<Cell numeric={$configurations$.priceColNumeric}>{row.price}</Cell>
					</Row>
				{/each}
			{/if}
		</Body>
	</Table>
	{#if $configurations$.showLinearProgress}
		<LinearProgress ariaLabel="Loading data..." />
	{/if}
	{#if $configurations$.showPagination}
		<Pagination length={rows.length} bind:pageIndex bind:pageSize>
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
